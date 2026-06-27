import Link from "next/link";
import { AppFrame } from "@/components/AppFrame";
import { categories, getCategoryQuestionCount, questions } from "@/data/questions";

export default function PracticePage() {
  return (
    <AppFrame>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">
          Practice by Category
        </p>
        <h1 className="mt-2 text-3xl font-black leading-tight">
          Choose one topic.
        </h1>
        <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
          Practice true / false questions by rule type.
        </p>
      </section>

      <Link
        href="/quiz?mode=practice"
        className="min-h-20 rounded-2xl bg-slate-950 px-6 py-5 text-xl font-black text-white shadow-sm active:scale-[0.98]"
      >
        All Questions
        <span className="mt-1 block text-sm font-semibold text-slate-300">
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
              className={`rounded-2xl border bg-white p-5 shadow-sm transition active:scale-[0.98] ${
                count
                  ? "border-slate-200"
                  : "pointer-events-none border-slate-100 opacity-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-black">{category.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-400">
                    {category.japanese}
                  </p>
                </div>
                <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-black text-slate-600">
                  {count}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          );
        })}
      </section>
    </AppFrame>
  );
}
