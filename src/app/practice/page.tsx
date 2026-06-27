import Link from "next/link";
import { AppFrame } from "@/components/AppFrame";
import { categories, getCategoryQuestionCount, questions } from "@/data/questions";

export default function PracticePage() {
  return (
    <AppFrame>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">分野別練習</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          Choose a category.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Practice one topic at a time with true or false questions.
        </p>
      </section>

      <Link
        href="/quiz?mode=practice"
        className="rounded-lg bg-slate-950 px-5 py-5 text-lg font-bold text-white shadow-sm"
      >
        All Questions
        <span className="mt-1 block text-sm font-medium text-slate-300">
          {questions.length} questions
        </span>
      </Link>

      <section className="grid gap-3">
        {categories.map((category) => {
          const count = getCategoryQuestionCount(category.name);

          return (
            <Link
              key={category.name}
              href={`/quiz?mode=practice&category=${encodeURIComponent(
                category.name,
              )}`}
              className={`rounded-lg border bg-white p-4 shadow-sm transition active:scale-[0.99] ${
                count
                  ? "border-slate-200"
                  : "pointer-events-none border-slate-100 opacity-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">{category.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-400">
                    {category.japanese}
                  </p>
                </div>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-bold text-slate-600">
                  {count}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          );
        })}
      </section>
    </AppFrame>
  );
}
