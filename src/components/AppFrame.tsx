import { BottomNav } from "@/components/BottomNav";

export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-dvh bg-slate-50 px-4 pb-28 pt-5 text-slate-950">
      <div className="mx-auto flex w-full max-w-md flex-col gap-4">{children}</div>
      <BottomNav />
    </main>
  );
}
