"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Question, questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import {
  AnswerMap,
  createExamQuestions,
  createPracticeQuestions,
  createResultEntry,
  examConfig,
  loadProgress,
  QuizMode,
  recordHistory,
  recordQuestionAnswer,
  saveProgress,
} from "@/lib/progress";

type EnglishMode = "natural" | "exam";

const isQuizMode = (value: string | null): value is QuizMode =>
  value === "practice" || value === "review" || value === "exam";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
};

const answerLabel = (answer: boolean) => (answer ? "TRUE" : "FALSE");

function createSessionSeed() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()}`;
}

function AnswerButton({
  value,
  selected,
  disabled,
  isCorrectAnswer,
  answered,
  revealCorrectness,
  onSelect,
}: {
  value: boolean;
  selected: boolean;
  disabled: boolean;
  isCorrectAnswer: boolean;
  answered: boolean;
  revealCorrectness: boolean;
  onSelect: (value: boolean) => void;
}) {
  const baseClass =
    "flex min-h-32 flex-col items-center justify-center rounded-2xl border-2 px-3 py-5 text-center shadow-sm transition active:scale-[0.98] disabled:active:scale-100";
  const feedbackClass =
    answered && selected && revealCorrectness
      ? isCorrectAnswer
        ? "border-emerald-500 bg-emerald-50 text-emerald-800"
        : "border-rose-500 bg-rose-50 text-rose-700"
      : answered && selected
        ? "border-slate-950 bg-slate-100 text-slate-950"
        : answered && isCorrectAnswer && revealCorrectness
          ? "border-emerald-300 bg-white text-emerald-700"
          : answered
            ? "border-slate-200 bg-white text-slate-400"
            : "border-slate-200 bg-white text-slate-900";
  const subText = value
    ? "This statement is correct"
    : "This statement is wrong";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(value)}
      className={`${baseClass} ${feedbackClass}`}
    >
      <span className="text-6xl font-black leading-none">
        {value ? "○" : "×"}
      </span>
      <span className="mt-3 text-2xl font-black leading-none">
        {answerLabel(value)}
      </span>
      <span className="mt-2 text-xs font-bold leading-5 text-current/70">
        {subText}
      </span>
    </button>
  );
}

export function QuizClient() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const mode: QuizMode = isQuizMode(modeParam) ? modeParam : "practice";
  const category = searchParams.get("category") ?? undefined;
  const [fallbackSeed] = useState(createSessionSeed);
  const seed = searchParams.get("seed") ?? fallbackSeed;
  const progress = useProgress();
  const wrongKey = progress.wrongQuestionIds.join("|");

  const sessionQuestions = useMemo(() => {
    if (mode === "exam") {
      return createExamQuestions(questions, seed);
    }

    if (mode === "review") {
      const wrongSet = new Set(progress.wrongQuestionIds);
      return questions.filter((question) => wrongSet.has(question.id));
    }

    const practiceQuestions = category
      ? questions.filter((question) => question.category === category)
      : questions;

    return createPracticeQuestions(practiceQuestions, seed);
  }, [category, mode, progress.wrongQuestionIds, seed]);

  const backHref = useMemo(() => {
    if (mode === "exam") {
      return "/exam";
    }

    if (mode === "review") {
      return "/review";
    }

    return "/practice";
  }, [mode]);

  const sessionKey = `${mode}:${category ?? "all"}:${wrongKey}:${seed}`;

  return (
    <QuizRunner
      key={sessionKey}
      mode={mode}
      category={category}
      sessionQuestions={sessionQuestions}
      backHref={backHref}
    />
  );
}

function QuizRunner({
  mode,
  category,
  sessionQuestions,
  backHref,
}: {
  mode: QuizMode;
  category?: string;
  sessionQuestions: Question[];
  backHref: string;
}) {
  const router = useRouter();
  const answersRef = useRef<AnswerMap>({});
  const finishingRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [englishMode, setEnglishMode] = useState<EnglishMode>(
    mode === "exam" ? "exam" : "natural",
  );
  const [showQuestionJapanese, setShowQuestionJapanese] = useState(false);
  const [showExplanationJapanese, setShowExplanationJapanese] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    examConfig.durationMinutes * 60,
  );
  const [finishing, setFinishing] = useState(false);

  const currentQuestion = sessionQuestions[currentIndex];
  const answered = selectedAnswer !== null;
  const isExam = mode === "exam";
  const shouldShowFeedback = answered && !isExam;
  const selectedIsCorrect =
    currentQuestion && selectedAnswer === currentQuestion.answer;
  const progressPercent = sessionQuestions.length
    ? ((currentIndex + 1) / sessionQuestions.length) * 100
    : 0;

  const finishSession = useCallback(
    (finalAnswers: AnswerMap) => {
      if (!sessionQuestions.length || finishingRef.current) {
        return;
      }

      finishingRef.current = true;
      setFinishing(true);

      let nextProgress = loadProgress();

      sessionQuestions.forEach((question) => {
        const answer = finalAnswers[question.id];
        if (answer !== undefined) {
          nextProgress = recordQuestionAnswer(
            nextProgress,
            question.id,
            answer === question.answer,
          );
        } else if (mode === "exam") {
          nextProgress = {
            ...nextProgress,
            wrongQuestionIds: Array.from(
              new Set([...nextProgress.wrongQuestionIds, question.id]),
            ),
          };
        }
      });

      const entry = createResultEntry({
        mode,
        category,
        sessionQuestions,
        answers: finalAnswers,
      });
      nextProgress = recordHistory(nextProgress, entry);
      saveProgress(nextProgress);
      router.push(`/result?id=${entry.id}`);
    },
    [category, mode, router, sessionQuestions],
  );

  useEffect(() => {
    if (!isExam || !sessionQuestions.length || finishing) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          window.setTimeout(() => finishSession(answersRef.current), 0);
          return 0;
        }

        return value - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [finishSession, finishing, isExam, sessionQuestions.length]);

  const handleAnswer = (answer: boolean) => {
    if (!currentQuestion || answered || finishing) {
      return;
    }

    answersRef.current = {
      ...answersRef.current,
      [currentQuestion.id]: answer,
    };
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!currentQuestion || selectedAnswer === null || finishing) {
      return;
    }

    if (currentIndex + 1 >= sessionQuestions.length) {
      finishSession(answersRef.current);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
    setShowQuestionJapanese(false);
    setShowExplanationJapanese(false);
  };

  const handleExitExam = () => {
    const shouldExit = window.confirm(
      "Are you sure you want to quit this exam?\nYour answers will not be saved.",
    );

    if (shouldExit) {
      router.push("/exam");
    }
  };

  if (!sessionQuestions.length) {
    return (
      <main className="min-h-dvh bg-slate-50 px-4 py-8 text-slate-950">
        <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-black">No questions found.</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Add questions to this category or answer some questions incorrectly
            to build your review list.
          </p>
          <Link
            href={backHref}
            className="mt-5 block min-h-16 rounded-2xl bg-slate-950 px-5 py-5 text-base font-bold text-white active:scale-[0.98]"
          >
            Go Back
          </Link>
        </section>
      </main>
    );
  }

  const questionText =
    englishMode === "natural"
      ? currentQuestion.naturalEnglish
      : currentQuestion.examLikeEnglish;

  return (
    <main className="min-h-dvh bg-slate-50 px-4 pb-80 pt-4 text-slate-950">
      <div className="mx-auto flex max-w-md flex-col gap-5">
        <header className="flex items-center justify-between gap-3">
          {isExam ? (
            <button
              type="button"
              onClick={handleExitExam}
              className="rounded-2xl border border-rose-200 bg-white px-4 py-3 text-sm font-bold text-rose-700 active:scale-[0.98]"
            >
              Exit Exam
            </button>
          ) : (
            <Link
              href={backHref}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 active:scale-[0.98]"
            >
              Back
            </Link>
          )}
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500">
              {currentIndex + 1} / {sessionQuestions.length}
            </p>
            {isExam ? (
              <p className="text-lg font-black text-emerald-700">
                {formatTime(secondsLeft)}
              </p>
            ) : null}
          </div>
        </header>

        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                {currentQuestion.category}
              </p>
              {currentQuestion.isHazardPrediction ? (
                <p className="mt-1 text-sm font-bold text-amber-700">
                  Hazard prediction / 2 points
                </p>
              ) : null}
            </div>
            <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              Lv.{currentQuestion.difficulty}
            </span>
          </div>

          {isExam ? (
            <p className="mt-5 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600">
              Mock Exam: Exam-like English only
            </p>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setEnglishMode("natural")}
                className={`rounded-xl px-3 py-3 text-sm font-bold active:scale-[0.98] ${
                  englishMode === "natural"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Natural English
              </button>
              <button
                type="button"
                onClick={() => setEnglishMode("exam")}
                className={`rounded-xl px-3 py-3 text-sm font-bold active:scale-[0.98] ${
                  englishMode === "exam"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Exam-like English
              </button>
            </div>
          )}

          <h1 className="mt-6 text-2xl font-black leading-snug">
            {questionText}
          </h1>

          {!isExam ? (
            <>
              <button
                type="button"
                onClick={() => setShowQuestionJapanese((value) => !value)}
                className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 active:scale-[0.98]"
              >
                {showQuestionJapanese ? "Hide Japanese" : "Show Japanese"}
              </button>

              {showQuestionJapanese ? (
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-base font-semibold leading-7 text-slate-700">
                  {currentQuestion.japanese}
                </p>
              ) : null}
            </>
          ) : null}
        </section>

        {shouldShowFeedback ? (
          <section
            className={`rounded-2xl border p-6 shadow-sm ${
              selectedIsCorrect
                ? "border-emerald-200 bg-emerald-50"
                : "border-rose-200 bg-rose-50"
            }`}
          >
            <p
              className={`text-3xl font-black ${
                selectedIsCorrect ? "text-emerald-800" : "text-rose-700"
              }`}
            >
              {selectedIsCorrect ? "✅ Correct!" : "❌ Incorrect"}
            </p>
            <p
              className={`mt-2 text-lg font-bold ${
                selectedIsCorrect ? "text-emerald-700" : "text-rose-700"
              }`}
            >
              {selectedIsCorrect ? "Good job." : "Remember this rule."}
            </p>
            <p className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-base font-black text-slate-800">
              Correct answer: {answerLabel(currentQuestion.answer)}
            </p>
            <div className="mt-5">
              <h2 className="text-sm font-black uppercase tracking-wide text-slate-500">
                Explanation
              </h2>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-800">
                {currentQuestion.explanationEn}
              </p>
            </div>
            {showExplanationJapanese ? (
              <div className="mt-4 border-t border-white/80 pt-4">
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Japanese explanation
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  {currentQuestion.explanationJa}
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowExplanationJapanese(true)}
                className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 active:scale-[0.98]"
              >
                Show Japanese explanation
              </button>
            )}
          </section>
        ) : null}
      </div>

      <section className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.10)]">
        <div className="mx-auto grid max-w-md gap-3">
          <div className="grid grid-cols-2 gap-3">
            <AnswerButton
              value={true}
              selected={selectedAnswer === true}
              disabled={answered || finishing}
              answered={answered}
              revealCorrectness={!isExam}
              isCorrectAnswer={currentQuestion.answer === true}
              onSelect={handleAnswer}
            />
            <AnswerButton
              value={false}
              selected={selectedAnswer === false}
              disabled={answered || finishing}
              answered={answered}
              revealCorrectness={!isExam}
              isCorrectAnswer={currentQuestion.answer === false}
              onSelect={handleAnswer}
            />
          </div>
          {answered ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={finishing}
              className="min-h-16 rounded-2xl bg-slate-950 px-5 py-4 text-lg font-black text-white active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100"
            >
              {finishing
                ? "Saving..."
                : currentIndex + 1 >= sessionQuestions.length
                  ? "See Result"
                  : "Next"}
            </button>
          ) : null}
        </div>
      </section>
    </main>
  );
}
