import Link from "next/link";
import { AppFrame } from "@/components/AppFrame";
import { examConfig } from "@/lib/progress";
import { questions } from "@/data/questions";

export default function ExamPage() {
  const hasFullBank = questions.length >= examConfig.totalQuestions;

  return (
    <AppFrame>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">模擬試験</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          Take a mock exam.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Exam-like English is used first. You can still reveal Japanese when
          needed.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black">{examConfig.durationMinutes}</p>
          <p className="text-sm font-semibold text-slate-500">Minutes</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black">{examConfig.totalQuestions}</p>
          <p className="text-sm font-semibold text-slate-500">Questions</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black">{examConfig.maxScore}</p>
          <p className="text-sm font-semibold text-slate-500">Max score</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-3xl font-black text-emerald-700">
            {examConfig.passScore}
          </p>
          <p className="text-sm font-semibold text-slate-500">Pass score</p>
        </div>
      </section>

      {!hasFullBank ? (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-bold text-amber-800">
            Sample bank: {questions.length} / {examConfig.totalQuestions}
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-800">
            Add more questions in src/data/questions.ts. The exam will
            automatically use 48 questions when the bank is ready.
          </p>
        </section>
      ) : null}

      <Link
        href="/quiz?mode=exam"
        className="rounded-lg bg-emerald-600 px-5 py-5 text-center text-lg font-bold text-white shadow-sm"
      >
        Start Mock Exam
      </Link>
    </AppFrame>
  );
}
