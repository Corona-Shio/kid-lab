"use client";

import { useState, useCallback } from "react";
import type { UserProgress, SessionRecord, TopicMastery, BadgeInfo } from "@/types/progress";
import type { Grade } from "@/types/problem";
import { loadProgress, saveProgress, updateMastery, addSession, addBadge } from "@/lib/storage";
import { BADGE_DEFINITIONS } from "@/types/progress";

export function useProgress(grade: Grade) {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress(grade));

  const updateAndSave = useCallback((updater: (p: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  const recordAnswer = useCallback(
    (topicId: string, mastery: TopicMastery) => {
      updateAndSave((p) => updateMastery(p, topicId, mastery));
    },
    [updateAndSave],
  );

  const recordSession = useCallback(
    (session: SessionRecord) => {
      updateAndSave((p) => {
        let next = addSession(p, session);
        // バッジチェック
        if (p.sessions.length === 0) {
          const def = BADGE_DEFINITIONS.find((b) => b.id === "session-complete")!;
          next = addBadge(next, { ...def, earnedAt: Date.now() });
        }
        if (session.correctCount === session.totalProblems) {
          const def = BADGE_DEFINITIONS.find((b) => b.id === "perfect-session")!;
          next = addBadge(next, { ...def, earnedAt: Date.now() });
        }
        return next;
      });
    },
    [updateAndSave],
  );

  const grantBadge = useCallback(
    (badgeId: string) => {
      const def = BADGE_DEFINITIONS.find((b) => b.id === badgeId);
      if (!def) return;
      const badge: BadgeInfo = { ...def, earnedAt: Date.now() };
      updateAndSave((p) => addBadge(p, badge));
    },
    [updateAndSave],
  );

  return { progress, recordAnswer, recordSession, grantBadge };
}
