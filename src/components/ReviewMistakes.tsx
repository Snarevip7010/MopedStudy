"use client";

import Link from "next/link";
import { useMemo } from "react";
import { questions } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";

const answerLabel = (answer: boolean) => (answer ? "TRUE" : "FALSE");

export function ReviewMistakes() {
  const progress = useProgress();

  const wrongQuestions = useMemo(() => {
    const wrongSet = new Set(progress.wrongQuestionIds);
    return questions.filter((question) => wrongSet.has(question.id));
  }, [progress.wrongQuestionIds]);

  return (
    <>
      <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-rose-600">Mistake Notes</p>
        <h1 className="mt-2 text-3xl font-black leading-tight">
          Learn from your mistakes.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          These are the rules to review again. Read the answer first, then try
          the review quiz.
        </p>
      </section>

      <section className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm">
        <p className="text-sm font-semibold text-rose-500">Mistake Bank</p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="text-5xl font-black text-rose-700">
            {wrongQuestions.length}
          </p>
          {wrongQuestions.length ? (
            <Link
              href="/quiz?mode=review"
              className="min-h-16 rounded-2xl bg-rose-600 px-5 py-5 text-center text-base font-black text-white shadow-sm active:scale-[0.98]"
            >
              Start Review
            </Link>
          ) : null}
        </div>
      </section>

      {wrongQuestions.length ? (
        <section className="grid gap-3">
          {wrongQuestions.map((question) => (
            <article
              key={question.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {question.category}
                </p>
                <span className="rounded-xl bg-rose-50 px-3 py-1 text-xs font-black text-rose-700">
                  Note
                </span>
              </div>
              <p className="mt-3 text-lg font-black leading-7">
                {question.naturalEnglish}
              </p>
              <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-base font-black text-emerald-800">
                Correct answer: {answerLabel(question.answer)}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                {question.explanationEn}
              </p>
            </article>
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
          <p className="text-2xl font-black text-emerald-800">
            No mistakes yet.
          </p>
          <p className="mt-2 text-base font-semibold leading-7 text-emerald-700">
            Great! Start practice to keep learning.
          </p>
          <Link
            href="/practice"
            className="mt-5 block min-h-16 rounded-2xl bg-slate-950 px-5 py-5 text-base font-bold text-white active:scale-[0.98]"
          >
            Start Practice
          </Link>
        </section>
      )}
    </>
  );
}
