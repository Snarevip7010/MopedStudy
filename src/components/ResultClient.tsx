"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { AppFrame } from "@/components/AppFrame";
import { Question, questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import { examConfig } from "@/lib/progress";

const answerLabel = (answer: boolean | undefined) => {
  if (answer === undefined) {
    return "No answer";
  }

  return answer ? "TRUE" : "FALSE";
};

function WrongQuestionCard({
  question,
  yourAnswer,
}: {
  question: Question;
  yourAnswer?: boolean;
}) {
  const [showJapanese, setShowJapanese] = useState(false);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
          {question.category}
        </p>
        <span className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
          {answerLabel(question.answer)}
        </span>
      </div>
      <p className="mt-3 text-lg font-black leading-7">
        {question.examLikeEnglish}
      </p>
      <div className="mt-4 grid gap-2">
        <p className="rounded-2xl bg-rose-50 px-4 py-3 text-base font-black text-rose-700">
          Your answer: {answerLabel(yourAnswer)}
        </p>
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-base font-black text-emerald-800">
          Correct answer: {answerLabel(question.answer)}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-black uppercase tracking-wide text-slate-500">
          Explanation
        </h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
          {question.explanationEn}
        </p>
      </div>
      {showJapanese ? (
        <div className="mt-4 rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-black uppercase tracking-wide text-slate-500">
            Japanese
          </h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
            {question.japanese}
          </p>
          <p className="mt-3 border-t border-slate-200 pt-3 text-sm font-semibold leading-6 text-slate-600">
            {question.explanationJa}
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowJapanese(true)}
          className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 active:scale-[0.98]"
        >
          Show Japanese explanation
        </button>
      )}
    </article>
  );
}

export function ResultClient() {
  const searchParams = useSearchParams();
  const resultId = searchParams.get("id");
  const progress = useProgress();

  const result = useMemo(() => {
    if (resultId) {
      return progress.practiceHistory.find((entry) => entry.id === resultId);
    }

    return progress.practiceHistory.find(
      (entry) => entry.id === progress.lastResultId,
    );
  }, [progress.lastResultId, progress.practiceHistory, resultId]);

  const wrongQuestions = useMemo(() => {
    if (!result) {
      return [];
    }

    return result.wrongQuestionIds
      .map((id) => questions.find((question) => question.id === id))
      .filter((question): question is Question => Boolean(question));
  }, [result]);

  if (!result) {
    return (
      <AppFrame>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-black">No result found.</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Complete a practice session or mock exam to see your result.
          </p>
          <Link
            href="/practice"
            className="mt-5 block min-h-16 rounded-2xl bg-slate-950 px-5 py-5 text-base font-bold text-white active:scale-[0.98]"
          >
            Start Practice
          </Link>
        </section>
      </AppFrame>
    );
  }

  const isExam = result.mode === "exam";
  const passed = Boolean(result.passed);

  return (
    <AppFrame>
      <section
        className={`rounded-2xl border p-6 text-center shadow-sm ${
          isExam
            ? passed
              ? "border-emerald-200 bg-emerald-50"
              : "border-rose-200 bg-rose-50"
            : "border-slate-200 bg-white"
        }`}
      >
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          {isExam ? "Mock Exam Result" : "Practice Result"}
        </p>
        {isExam ? (
          <>
            <h1
              className={`mt-3 text-5xl font-black ${
                passed ? "text-emerald-800" : "text-rose-700"
              }`}
            >
              {result.score} / {examConfig.maxScore}
            </h1>
            <p
              className={`mt-3 text-2xl font-black ${
                passed ? "text-emerald-800" : "text-rose-700"
              }`}
            >
              {passed ? "Passed" : "Try Again"}
            </p>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
              Check each mistake below to learn the correct answer and why it is
              correct.
            </p>
            {result.possibleScore !== examConfig.maxScore ? (
              <p className="mt-3 rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold leading-6 text-slate-600">
                Sample score scaled from {result.rawScore} /{" "}
                {result.possibleScore} available points.
              </p>
            ) : null}
          </>
        ) : (
          <>
            <h1 className="mt-3 text-5xl font-black text-slate-950">
              {result.correctAnswers} / {result.totalQuestions}
            </h1>
            <p className="mt-3 text-lg font-bold text-slate-600">Correct</p>
          </>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-emerald-700">
            {result.correctAnswers}
          </p>
          <p className="text-sm font-semibold text-slate-500">Correct</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-rose-600">
            {result.wrongQuestionIds.length}
          </p>
          <p className="text-sm font-semibold text-slate-500">Incorrect</p>
        </div>
      </section>

      <div className="grid gap-3">
        <Link
          href={isExam ? "/exam" : "/practice"}
          className="min-h-16 rounded-2xl bg-slate-950 px-5 py-5 text-center text-lg font-bold text-white shadow-sm active:scale-[0.98]"
        >
          {isExam ? "Try Mock Exam Again" : "Practice More"}
        </Link>
        {wrongQuestions.length ? (
          <Link
            href="/quiz?mode=review"
            className="min-h-16 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-5 text-center text-lg font-bold text-rose-700 active:scale-[0.98]"
          >
            Review Wrong Questions
          </Link>
        ) : null}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black">Wrong Questions</h2>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
          See which rule you missed, the correct answer, and the reason.
        </p>
      </section>

      {wrongQuestions.length ? (
        <section className="grid gap-3">
          {wrongQuestions.map((question) => (
            <WrongQuestionCard
              key={question.id}
              question={question}
              yourAnswer={result.answers?.[question.id]}
            />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
          <p className="text-xl font-black text-emerald-800">
            Great job. No wrong questions in this session.
          </p>
        </section>
      )}
    </AppFrame>
  );
}
