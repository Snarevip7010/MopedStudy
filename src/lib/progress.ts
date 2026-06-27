import { getQuestionPoint, Question } from "@/data/questions";

export type QuizMode = "practice" | "review" | "exam";

export type AnswerMap = Record<string, boolean>;

export type PracticeHistoryEntry = {
  id: string;
  date: string;
  mode: QuizMode;
  category?: string;
  questionIds: string[];
  wrongQuestionIds: string[];
  answers: AnswerMap;
  correctAnswers: number;
  totalQuestions: number;
  score?: number;
  rawScore?: number;
  possibleScore?: number;
  passed?: boolean;
};

export type ProgressState = {
  answeredQuestionIds: string[];
  wrongQuestionIds: string[];
  correctCount: number;
  practiceHistory: PracticeHistoryEntry[];
  lastResultId?: string;
};

export const STORAGE_KEY = "gentsuki-license-progress-v1";
export const PROGRESS_CHANGED_EVENT = "gentsuki-progress-changed";

export const emptyProgress: ProgressState = {
  answeredQuestionIds: [],
  wrongQuestionIds: [],
  correctCount: 0,
  practiceHistory: [],
};

export const examConfig = {
  totalQuestions: 48,
  regularQuestions: 46,
  hazardQuestions: 2,
  durationMinutes: 30,
  maxScore: 50,
  passScore: 45,
};

const unique = (values: string[]) => Array.from(new Set(values));

function normalizeProgressState(value: unknown): ProgressState {
  if (!value || typeof value !== "object") {
    return emptyProgress;
  }

  const parsed = value as Partial<ProgressState>;
  const practiceHistory = Array.isArray(parsed.practiceHistory)
    ? parsed.practiceHistory.map((entry) => ({
        ...entry,
        answers: entry.answers ?? {},
      }))
    : [];

  return {
    ...emptyProgress,
    ...parsed,
    answeredQuestionIds: Array.isArray(parsed.answeredQuestionIds)
      ? parsed.answeredQuestionIds
      : [],
    wrongQuestionIds: Array.isArray(parsed.wrongQuestionIds)
      ? parsed.wrongQuestionIds
      : [],
    practiceHistory,
  };
}

export function parseProgressSnapshot(stored: string | null): ProgressState {
  if (!stored) {
    return emptyProgress;
  }

  try {
    return normalizeProgressState(JSON.parse(stored));
  } catch {
    return emptyProgress;
  }
}

export function getProgressSnapshot() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") {
    return emptyProgress;
  }

  return parseProgressSnapshot(window.localStorage.getItem(STORAGE_KEY));
}

export function saveProgress(progress: ProgressState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event(PROGRESS_CHANGED_EVENT));
}

export function recordQuestionAnswer(
  progress: ProgressState,
  questionId: string,
  isCorrect: boolean,
): ProgressState {
  const answeredQuestionIds = unique([
    ...progress.answeredQuestionIds,
    questionId,
  ]);
  const wrongSet = new Set(progress.wrongQuestionIds);

  if (isCorrect) {
    wrongSet.delete(questionId);
  } else {
    wrongSet.add(questionId);
  }

  return {
    ...progress,
    answeredQuestionIds,
    wrongQuestionIds: Array.from(wrongSet),
    correctCount: progress.correctCount + (isCorrect ? 1 : 0),
  };
}

export function recordHistory(
  progress: ProgressState,
  entry: PracticeHistoryEntry,
): ProgressState {
  const nextHistory = [entry, ...progress.practiceHistory].slice(0, 30);

  return {
    ...progress,
    practiceHistory: nextHistory,
    lastResultId: entry.id,
  };
}

export function createResultEntry({
  mode,
  category,
  sessionQuestions,
  answers,
}: {
  mode: QuizMode;
  category?: string;
  sessionQuestions: Question[];
  answers: AnswerMap;
}): PracticeHistoryEntry {
  const wrongQuestionIds = sessionQuestions
    .filter((question) => answers[question.id] !== question.answer)
    .map((question) => question.id);

  const correctAnswers = sessionQuestions.length - wrongQuestionIds.length;
  const baseEntry = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}`,
    date: new Date().toISOString(),
    mode,
    category,
    questionIds: sessionQuestions.map((question) => question.id),
    wrongQuestionIds,
    answers,
    correctAnswers,
    totalQuestions: sessionQuestions.length,
  };

  if (mode !== "exam") {
    return baseEntry;
  }

  const rawScore = sessionQuestions.reduce((sum, question) => {
    if (answers[question.id] !== question.answer) {
      return sum;
    }

    return sum + getQuestionPoint(question);
  }, 0);
  const possibleScore = sessionQuestions.reduce(
    (sum, question) => sum + getQuestionPoint(question),
    0,
  );
  const score =
    possibleScore === examConfig.maxScore
      ? rawScore
      : Math.round((rawScore / Math.max(possibleScore, 1)) * examConfig.maxScore);

  return {
    ...baseEntry,
    rawScore,
    possibleScore,
    score,
    passed: score >= examConfig.passScore,
  };
}

function createSeededRandom(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return () => {
    hash += 0x6d2b79f5;
    let value = hash;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed<T>(items: T[], seed: string) {
  const shuffled = [...items];
  const random = createSeededRandom(seed);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export function createExamQuestions(source: Question[], seed = "default") {
  const hazards = shuffleWithSeed(
    source.filter((question) => question.isHazardPrediction),
    `${seed}:hazards`,
  ).slice(0, examConfig.hazardQuestions);
  const regular = shuffleWithSeed(
    source.filter((question) => !question.isHazardPrediction),
    `${seed}:regular`,
  ).slice(0, examConfig.regularQuestions);

  return shuffleWithSeed([...regular, ...hazards], `${seed}:all`).slice(
    0,
    examConfig.totalQuestions,
  );
}

export function createPracticeQuestions(source: Question[], seed = "default") {
  return shuffleWithSeed(source, `${seed}:practice`);
}
