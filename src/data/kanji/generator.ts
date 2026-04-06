import type { KanjiEntry, KanjiFillProblem, KanjiChoiceProblem } from "@/types/problem";
import { shuffle, pickRandom } from "@/lib/utils";

export function generateFillProblem(entry: KanjiEntry): KanjiFillProblem {
  const example = pickRandom(entry.examples);
  // □を漢字に戻して例文を表示する（読み方を答えさせる）
  const sentence = example.sentence.replace("□", entry.character);
  const reading = entry.readings.kunyomi[0] ?? entry.readings.onyomi[0] ?? "";

  return {
    type: "fill",
    id: `fill:${entry.character}`,
    character: entry.character,
    sentence,
    answer: reading,
    reading,
  };
}

export function generateChoiceProblem(
  entry: KanjiEntry,
  allEntries: KanjiEntry[],
): KanjiChoiceProblem {
  const correctReading = entry.readings.kunyomi[0] ?? entry.readings.onyomi[0] ?? "";
  const readingMode = Math.random() < 0.5;

  if (readingMode) {
    // 読みモード：「◯のよみかたはどれ？」→ 選択肢はひらがな
    const distractorReadings = shuffle(
      allEntries
        .filter((e) => e.character !== entry.character)
        .map((e) => e.readings.kunyomi[0] ?? e.readings.onyomi[0] ?? "")
        .filter((r) => r !== "" && r !== correctReading),
    ).slice(0, 3);

    const choices = shuffle([correctReading, ...distractorReadings]);
    const answerIndex = choices.indexOf(correctReading);

    return {
      type: "choice",
      id: `choice:${entry.character}`,
      character: entry.character,
      question: `「${entry.character}」のよみかたはどれ？`,
      choices,
      answerIndex,
      answer: correctReading,
    };
  } else {
    // 漢字モード：「◯とよむかんじはどれ？」→ 選択肢は漢字
    const distractors = shuffle(allEntries.filter((e) => e.character !== entry.character))
      .slice(0, 3)
      .map((e) => e.character);

    const choices = shuffle([entry.character, ...distractors]);
    const answerIndex = choices.indexOf(entry.character);

    return {
      type: "choice",
      id: `choice:${entry.character}`,
      character: entry.character,
      question: `「${correctReading}」とよむかんじはどれ？`,
      choices,
      answerIndex,
      answer: entry.character,
    };
  }
}
