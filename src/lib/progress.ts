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

export function parseProgressSnapshot(stored: string | null): ProgressState {
  if (!stored) {
    return emptyProgress;
  }

  try {
    return { ...emptyProgress, ...JSON.parse(stored) };
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

export function createExamQuestions(source: Question[]) {
  const hazards = source
    .filter((question) => question.isHazardPrediction)
    .slice(0, examConfig.hazardQuestions);
  const regular = source
    .filter((question) => !question.isHazardPrediction)
    .slice(0, examConfig.regularQuestions);

  return [...regular, ...hazards].slice(0, examConfig.totalQuestions);
}
