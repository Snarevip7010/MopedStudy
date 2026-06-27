"use client";

import Link from "next/link";
import { useMemo } from "react";
import { questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";

export function HomeDashboard() {
  const progress = useProgress();

  const accuracy = useMemo(() => {
    const totalAnswered = progress.practiceHistory.reduce(
      (sum, entry) => sum + entry.totalQuestions,
      0,
    );
    const totalCorrect = progress.practiceHistory.reduce(
      (sum, entry) => sum + entry.correctAnswers,
      0,
    );

    if (!totalAnswered) {
      return 0;
    }

    return Math.round((totalCorrect / totalAnswered) * 100);
  }, [progress.practiceHistory]);

  const latestHistory = progress.practiceHistory.slice(0, 3);
  const hasMistakes = progress.wrongQuestionIds.length > 0;

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">
          Moped License Practice
        </p>
        <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950">
          Study Japanese traffic rules in English.
        </h1>
        <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
          A simple daily study app for true / false practice, mistake review,
          and mock exams.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
        <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
          Today
        </p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">
          Start with one quick practice.
        </h2>
        <p className="mt-2 text-sm font-semibold leading-6 text-emerald-800">
          Learn a rule, answer fast, and save mistakes automatically.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-black">
            {progress.answeredQuestionIds.length}
          </p>
          <p className="text-xs font-semibold text-slate-500">Answered</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-black text-rose-600">
            {progress.wrongQuestionIds.length}
          </p>
          <p className="text-xs font-semibold text-slate-500">Mistakes</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-black text-emerald-700">{accuracy}%</p>
          <p className="text-xs font-semibold text-slate-500">Accuracy</p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Link
          href="/quiz?mode=practice"
          className="min-h-20 rounded-2xl bg-slate-950 px-6 py-5 text-xl font-black text-white shadow-sm active:scale-[0.98]"
        >
          Start Practice
          <span className="mt-1 block text-sm font-semibold text-slate-300">
            {questions.length} questions / TRUE or FALSE
          </span>
        </Link>
        <Link
          href="/review"
          className="min-h-20 rounded-2xl border border-rose-200 bg-rose-50 px-6 py-5 text-xl font-black text-rose-700 shadow-sm active:scale-[0.98]"
        >
          Review Mistakes
          <span className="mt-1 block text-sm font-semibold text-rose-500">
            {hasMistakes
              ? `${progress.wrongQuestionIds.length} rules to review`
              : "No mistakes saved yet"}
          </span>
        </Link>
        <Link
          href="/exam"
          className="min-h-20 rounded-2xl border border-emerald-200 bg-white px-6 py-5 text-xl font-black text-emerald-800 shadow-sm active:scale-[0.98]"
        >
          Mock Exam
          <span className="mt-1 block text-sm font-semibold text-emerald-600">
            30 minutes / pass at 45 of 50
          </span>
        </Link>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black">Recent Practice</h2>
          <span className="text-sm font-semibold text-slate-400">History</span>
        </div>
        {latestHistory.length ? (
          <div className="mt-3 flex flex-col divide-y divide-slate-100">
            {latestHistory.map((entry) => (
              <div key={entry.id} className="py-3">
                <p className="text-sm font-bold capitalize">
                  {entry.mode} {entry.category ? `/ ${entry.category}` : ""}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {entry.correctAnswers} / {entry.totalQuestions} correct
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your practice history will appear here after your first session.
          </p>
        )}
      </section>
    </>
  );
}
