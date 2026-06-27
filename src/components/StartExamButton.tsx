"use client";

import { useRouter } from "next/navigation";

export function StartExamButton() {
  const router = useRouter();

  const handleStart = () => {
    const seed =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    router.push(`/quiz?mode=exam&seed=${encodeURIComponent(seed)}`);
  };

  return (
    <button
      type="button"
      onClick={handleStart}
      className="min-h-20 rounded-2xl bg-emerald-600 px-6 py-5 text-center text-xl font-black text-white shadow-sm active:scale-[0.98]"
    >
      Start Mock Exam
      <span className="mt-1 block text-sm font-semibold text-emerald-50">
        Questions are shuffled every time
      </span>
    </button>
  );
}
