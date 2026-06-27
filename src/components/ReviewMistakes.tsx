"use client";

import Link from "next/link";
import { useMemo } from "react";
import { questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";

export function ReviewMistakes() {
  const progress = useProgress();

  const wrongQuestions = useMemo(() => {
    const wrongSet = new Set(progress.wrongQuestionIds);
    return questions.filter((question) => wrongSet.has(question.id));
  }, [progress.wrongQuestionIds]);

  return (
    <>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-rose-600">間違えた問題</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          Review your mistakes.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Practice only the questions saved in your mistake list.
        </p>
      </section>

      <section className="rounded-lg border border-rose-100 bg-rose-50 p-4">
        <p className="text-sm font-semibold text-rose-500">Mistake Bank</p>
        <p className="mt-1 text-4xl font-black text-rose-700">
          {wrongQuestions.length}
        </p>
      </section>

      {wrongQuestions.length ? (
        <>
          <Link
            href="/quiz?mode=review"
            className="rounded-lg bg-rose-600 px-5 py-5 text-center text-lg font-bold text-white shadow-sm"
          >
            Start Review
          </Link>
          <section className="grid gap-3">
            {wrongQuestions.map((question) => (
              <article
                key={question.id}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {question.category}
                </p>
                <p className="mt-2 text-base font-semibold leading-7">
                  {question.naturalEnglish}
                </p>
              </article>
            ))}
          </section>
        </>
      ) : (
        <section className="rounded-lg border border-slate-200 bg-white p-5 text-center">
          <p className="text-xl font-bold">No mistakes yet.</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Wrong answers will be saved here automatically.
          </p>
          <Link
            href="/practice"
            className="mt-5 block rounded-lg bg-slate-950 px-5 py-4 text-base font-bold text-white"
          >
            Go to Practice
          </Link>
        </section>
      )}
    </>
  );
}
