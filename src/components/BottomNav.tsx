"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", mark: "•" },
  { href: "/practice", label: "Practice", mark: "○" },
  { href: "/review", label: "Review", mark: "!" },
  { href: "/exam", label: "Exam", mark: "✓" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {items.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold transition active:scale-[0.98] ${
                isActive ? "text-emerald-700" : "text-slate-500"
              }`}
            >
              <span
                className={`grid h-6 min-w-6 place-items-center text-base ${
                  isActive ? "font-black" : "font-semibold"
                }`}
                aria-hidden="true"
              >
                {item.mark}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
