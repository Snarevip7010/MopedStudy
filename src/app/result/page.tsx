import { Suspense } from "react";
import { ResultClient } from "@/components/ResultClient";

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <main className="grid min-h-dvh place-items-center bg-slate-50 px-4 text-slate-700">
          <p className="text-lg font-bold">Loading result...</p>
        </main>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
