"use client";

import { useState, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const set = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const next = typeof newValue === "function"
          ? (newValue as (p: T) => T)(prev)
          : newValue;
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // 無視
        }
        return next;
      });
    },
    [key],
  );

  return [value, set] as const;
}
