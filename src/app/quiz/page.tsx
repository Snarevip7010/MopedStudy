import { Suspense } from "react";
import { QuizClient } from "@/components/QuizClient";

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="grid min-h-dvh place-items-center bg-slate-50 px-4 text-slate-700">
          <p className="text-lg font-bold">Loading questions...</p>
        </main>
      }
    >
      <QuizClient />
    </Suspense>
  );
}
