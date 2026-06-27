"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { Question, questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import {
  AnswerMap,
  createExamQuestions,
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

function AnswerButton({
  value,
  label,
  selected,
  disabled,
  isCorrectAnswer,
  answered,
  onSelect,
}: {
  value: boolean;
  label: string;
  selected: boolean;
  disabled: boolean;
  isCorrectAnswer: boolean;
  answered: boolean;
  onSelect: (value: boolean) => void;
}) {
  const feedbackClass =
    answered && selected
      ? isCorrectAnswer
        ? "border-emerald-500 bg-emerald-50 text-emerald-800"
        : "border-rose-500 bg-rose-50 text-rose-700"
      : answered && isCorrectAnswer
        ? "border-emerald-300 bg-white text-emerald-700"
        : "border-slate-200 bg-white text-slate-800";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(value)}
      className={`min-h-24 rounded-lg border-2 p-4 text-left shadow-sm transition active:scale-[0.98] disabled:active:scale-100 ${feedbackClass}`}
    >
      <span className="block text-3xl font-black leading-none">
        {value ? "○" : "×"}
      </span>
      <span className="mt-2 block text-xl font-black">{label}</span>
    </button>
  );
}

export function QuizClient() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const mode: QuizMode = isQuizMode(modeParam) ? modeParam : "practice";
  const category = searchParams.get("category") ?? undefined;
  const progress = useProgress();
  const wrongKey = progress.wrongQuestionIds.join("|");

  const sessionQuestions = useMemo(() => {
    if (mode === "exam") {
      return createExamQuestions(questions);
    }

    if (mode === "review") {
      const wrongSet = new Set(progress.wrongQuestionIds);
      return questions.filter((question) => wrongSet.has(question.id));
    }

    return category
      ? questions.filter((question) => question.category === category)
      : questions;
  }, [category, mode, progress.wrongQuestionIds]);

  const backHref = useMemo(() => {
    if (mode === "exam") {
      return "/exam";
    }

    if (mode === "review") {
      return "/review";
    }

    return "/practice";
  }, [mode]);

  const sessionKey = `${mode}:${category ?? "all"}:${wrongKey}`;

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [englishMode, setEnglishMode] = useState<EnglishMode>(
    mode === "exam" ? "exam" : "natural",
  );
  const [showJapanese, setShowJapanese] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    examConfig.durationMinutes * 60,
  );
  const [finishing, setFinishing] = useState(false);

  const currentQuestion = sessionQuestions[currentIndex];
  const answered = selectedAnswer !== null;
  const selectedIsCorrect =
    currentQuestion && selectedAnswer === currentQuestion.answer;
  const progressPercent = sessionQuestions.length
    ? ((currentIndex + 1) / sessionQuestions.length) * 100
    : 0;

  const finishSession = useCallback(
    (finalAnswers: AnswerMap) => {
      if (!sessionQuestions.length || finishing) {
        return;
      }

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
    [category, finishing, mode, router, sessionQuestions],
  );

  useEffect(() => {
    if (mode !== "exam" || !sessionQuestions.length || finishing) {
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
  }, [finishSession, finishing, mode, sessionQuestions.length]);

  const handleAnswer = (answer: boolean) => {
    if (!currentQuestion || answered) {
      return;
    }

    answersRef.current = {
      ...answersRef.current,
      [currentQuestion.id]: answer,
    };
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!currentQuestion || selectedAnswer === null) {
      return;
    }

    if (currentIndex + 1 >= sessionQuestions.length) {
      finishSession(answersRef.current);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
    setShowJapanese(false);
  };

  if (!sessionQuestions.length) {
    return (
      <main className="min-h-dvh bg-slate-50 px-4 py-8 text-slate-950">
        <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-5 text-center">
          <h1 className="text-2xl font-black">No questions found.</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Add questions to this category or answer some questions incorrectly
            to build your review list.
          </p>
          <Link
            href={backHref}
            className="mt-5 block rounded-lg bg-slate-950 px-5 py-4 text-base font-bold text-white"
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
    <main className="min-h-dvh bg-slate-50 px-4 pb-64 pt-4 text-slate-950">
      <div className="mx-auto flex max-w-md flex-col gap-4">
        <header className="flex items-center justify-between gap-3">
          <Link
            href={backHref}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
          >
            Back
          </Link>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500">
              {currentIndex + 1} / {sessionQuestions.length}
            </p>
            {mode === "exam" ? (
              <p className="text-lg font-black text-emerald-700">
                {formatTime(secondsLeft)}
              </p>
            ) : null}
          </div>
        </header>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                {currentQuestion.category}
              </p>
              {currentQuestion.isHazardPrediction ? (
                <p className="mt-1 text-sm font-bold text-amber-700">
                  Hazard prediction • 2 points
                </p>
              ) : null}
            </div>
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-bold text-slate-600">
              Lv.{currentQuestion.difficulty}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setEnglishMode("natural")}
              className={`rounded-md px-3 py-3 text-sm font-bold ${
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
              className={`rounded-md px-3 py-3 text-sm font-bold ${
                englishMode === "exam"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Exam-like English
            </button>
          </div>

          <h1 className="mt-6 text-2xl font-black leading-snug">
            {questionText}
          </h1>

          <button
            type="button"
            onClick={() => setShowJapanese((value) => !value)}
            className="mt-5 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
          >
            {showJapanese ? "Hide Japanese" : "Show Japanese"}
          </button>

          {showJapanese ? (
            <p className="mt-4 rounded-lg bg-slate-50 p-4 text-base font-semibold leading-7 text-slate-700">
              {currentQuestion.japanese}
            </p>
          ) : null}
        </section>

        {answered ? (
          <section
            className={`rounded-lg border p-5 shadow-sm ${
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
              {selectedIsCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-800">
              {currentQuestion.explanationEn}
            </p>
            {showJapanese ? (
              <p className="mt-3 border-t border-white/80 pt-3 text-sm font-semibold leading-6 text-slate-600">
                {currentQuestion.explanationJa}
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setShowJapanese(true)}
                className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
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
              label="TRUE"
              selected={selectedAnswer === true}
              disabled={answered}
              answered={answered}
              isCorrectAnswer={currentQuestion.answer === true}
              onSelect={handleAnswer}
            />
            <AnswerButton
              value={false}
              label="FALSE"
              selected={selectedAnswer === false}
              disabled={answered}
              answered={answered}
              isCorrectAnswer={currentQuestion.answer === false}
              onSelect={handleAnswer}
            />
          </div>
          {answered ? (
            <button
              type="button"
              onClick={handleNext}
              className="min-h-14 rounded-lg bg-slate-950 px-5 py-4 text-lg font-black text-white"
            >
              {currentIndex + 1 >= sessionQuestions.length
                ? "See Result"
                : "Next"}
            </button>
          ) : null}
        </div>
      </section>
    </main>
  );
}
