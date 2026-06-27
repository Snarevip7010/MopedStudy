import { AppFrame } from "@/components/AppFrame";
import { StartExamButton } from "@/components/StartExamButton";
import { questions } from "@/data/questions";
import { examConfig } from "@/lib/progress";

export default function ExamPage() {
  const hasFullBank = questions.length >= examConfig.totalQuestions;

  return (
    <AppFrame>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">Mock Exam</p>
        <h1 className="mt-2 text-3xl font-black leading-tight">
          Take a real-style test.
        </h1>
        <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
          No hints, no instant explanation, and exam-like English only.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black">{examConfig.durationMinutes}</p>
          <p className="text-sm font-semibold text-slate-500">Minutes</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black">{examConfig.totalQuestions}</p>
          <p className="text-sm font-semibold text-slate-500">Questions</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black">{examConfig.maxScore}</p>
          <p className="text-sm font-semibold text-slate-500">Max score</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-emerald-700">
            {examConfig.passScore}
          </p>
          <p className="text-sm font-semibold text-slate-500">Pass score</p>
        </div>
      </section>

      {!hasFullBank ? (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <p className="text-sm font-bold text-amber-800">
            Sample bank: {questions.length} / {examConfig.totalQuestions}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-amber-800">
            Add more questions in src/data/questions.ts. The exam will
            automatically use up to 48 questions when the bank is ready.
          </p>
        </section>
      ) : null}

      <StartExamButton />
    </AppFrame>
  );
}
