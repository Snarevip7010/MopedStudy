"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AppFrame } from "@/components/AppFrame";
import { questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import { examConfig } from "@/lib/progress";

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

    const wrongSet = new Set(result.wrongQuestionIds);
    return questions.filter((question) => wrongSet.has(question.id));
  }, [result]);

  if (!result) {
    return (
      <AppFrame>
        <section className="rounded-lg border border-slate-200 bg-white p-5 text-center">
          <h1 className="text-2xl font-black">No result found.</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Complete a practice session or mock exam to see your result.
          </p>
          <Link
            href="/practice"
            className="mt-5 block rounded-lg bg-slate-950 px-5 py-4 text-base font-bold text-white"
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
        className={`rounded-lg border p-5 text-center shadow-sm ${
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
            {result.possibleScore !== examConfig.maxScore ? (
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
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

      <section className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black text-emerald-700">
            {result.correctAnswers}
          </p>
          <p className="text-sm font-semibold text-slate-500">Correct</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black text-rose-600">
            {result.wrongQuestionIds.length}
          </p>
          <p className="text-sm font-semibold text-slate-500">Incorrect</p>
        </div>
      </section>

      <div className="grid gap-3">
        <Link
          href={isExam ? "/exam" : "/practice"}
          className="rounded-lg bg-slate-950 px-5 py-5 text-center text-lg font-bold text-white"
        >
          {isExam ? "Try Mock Exam Again" : "Practice More"}
        </Link>
        {wrongQuestions.length ? (
          <Link
            href="/quiz?mode=review"
            className="rounded-lg border border-rose-200 bg-rose-50 px-5 py-5 text-center text-lg font-bold text-rose-700"
          >
            Review Wrong Questions
          </Link>
        ) : null}
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-black">Wrong Questions</h2>
        {wrongQuestions.length ? (
          <div className="mt-3 flex flex-col divide-y divide-slate-100">
            {wrongQuestions.map((question) => (
              <article key={question.id} className="py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {question.category}
                </p>
                <p className="mt-2 text-base font-bold leading-7">
                  {question.examLikeEnglish}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  {question.explanationEn}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Great job. No wrong questions in this session.
          </p>
        )}
      </section>
    </AppFrame>
  );
}
