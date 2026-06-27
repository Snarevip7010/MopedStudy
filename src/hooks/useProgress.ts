"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  getProgressSnapshot,
  parseProgressSnapshot,
  PROGRESS_CHANGED_EVENT,
} from "@/lib/progress";

function subscribeToProgress(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(PROGRESS_CHANGED_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(PROGRESS_CHANGED_EVENT, onStoreChange);
  };
}

export function useProgress() {
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    () => "",
  );

  return useMemo(() => parseProgressSnapshot(snapshot), [snapshot]);
}
