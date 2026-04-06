import type { KanjiEntry, KanjiFillProblem, KanjiChoiceProblem } from "@/types/problem";
import { shuffle, pickRandom } from "@/lib/utils";

export function generateFillProblem(entry: KanjiEntry): KanjiFillProblem {
  const example = pickRandom(entry.examples);
  const sentence = example.sentence;
  // blankIndex は文字列インデックス（複合語対応）
  const withBlank =
    sentence.slice(0, example.blankIndex) + "□" + sentence.slice(example.blankIndex + 1);

  return {
    type: "fill",
    id: `fill:${entry.character}`,
    character: entry.character,
    sentence: withBlank,
    answer: entry.character,
    reading: entry.readings.kunyomi[0] ?? entry.readings.onyomi[0] ?? "",
    hint: entry.readings.kunyomi[0]
      ? `よみかた: ${entry.readings.kunyomi[0]}`
      : `よみかた: ${entry.readings.onyomi[0]}`,
  };
}

export function generateChoiceProblem(
  entry: KanjiEntry,
  allEntries: KanjiEntry[],
): KanjiChoiceProblem {
  // 誤答候補：同学年の漢字から3つ選ぶ
  const distractors = shuffle(allEntries.filter((e) => e.character !== entry.character))
    .slice(0, 3)
    .map((e) => e.character);

  const choices = shuffle([entry.character, ...distractors]);
  const answerIndex = choices.indexOf(entry.character);

  const readingMode = Math.random() < 0.5;
  const reading = entry.readings.kunyomi[0] ?? entry.readings.onyomi[0] ?? "";

  return {
    type: "choice",
    id: `choice:${entry.character}`,
    character: entry.character,
    question: readingMode
      ? `「${entry.character}」のよみかたはどれ？`
      : `「${reading}」とよむかんじはどれ？`,
    choices,
    answerIndex,
    answer: entry.character,
  };
}
