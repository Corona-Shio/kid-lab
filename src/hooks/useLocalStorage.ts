"use client";

import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) setValue(JSON.parse(item) as T);
    } catch {
      // 無視
    }
  }, [key]);

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
