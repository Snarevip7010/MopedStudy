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

  return (
    <>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">
          原付免許 English Practice
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-950">
          Learn traffic rules in English.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Study Japanese moped license questions with clear English, quick true
          or false practice, and a mistake review list.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-2xl font-bold">{progress.answeredQuestionIds.length}</p>
          <p className="text-xs font-semibold text-slate-500">Answered</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-2xl font-bold text-rose-600">
            {progress.wrongQuestionIds.length}
          </p>
          <p className="text-xs font-semibold text-slate-500">Mistakes</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-2xl font-bold text-emerald-700">{accuracy}%</p>
          <p className="text-xs font-semibold text-slate-500">Accuracy</p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Link
          href="/practice"
          className="rounded-lg bg-slate-950 px-5 py-5 text-lg font-bold text-white shadow-sm"
        >
          Practice by Category
          <span className="mt-1 block text-sm font-medium text-slate-300">
            {questions.length} sample questions
          </span>
        </Link>
        <Link
          href="/review"
          className="rounded-lg border border-rose-200 bg-rose-50 px-5 py-5 text-lg font-bold text-rose-700"
        >
          Review Mistakes
          <span className="mt-1 block text-sm font-medium text-rose-500">
            Focus only on wrong answers
          </span>
        </Link>
        <Link
          href="/exam"
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-5 text-lg font-bold text-emerald-800"
        >
          Mock Exam
          <span className="mt-1 block text-sm font-medium text-emerald-600">
            30 minutes, pass at 45 / 50
          </span>
        </Link>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Recent Practice</h2>
          <span className="text-sm font-semibold text-slate-400">履歴</span>
        </div>
        {latestHistory.length ? (
          <div className="mt-3 flex flex-col divide-y divide-slate-100">
            {latestHistory.map((entry) => (
              <div key={entry.id} className="py-3">
                <p className="text-sm font-bold capitalize">
                  {entry.mode} {entry.category ? `• ${entry.category}` : ""}
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
