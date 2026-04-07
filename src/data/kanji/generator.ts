import type { KanjiEntry, KanjiFillProblem, KanjiChoiceProblem } from "@/types/problem";
import { shuffle, pickRandom } from "@/lib/utils";

function toKatakana(text: string): string {
  return text.replace(/[ぁ-ん]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function toHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function getContextReading(entry: KanjiEntry, exampleReading: string): string {
  const normalizedExample = toHiragana(exampleReading);
  const candidates = [...entry.readings.kunyomi, ...entry.readings.onyomi]
    .map((r) => toHiragana(r))
    .filter((r, i, arr) => r !== "" && arr.indexOf(r) === i);

  const matched = candidates
    .map((candidate, order) => ({ candidate, order }))
    .filter(({ candidate }) => normalizedExample.includes(candidate))
    .sort((a, b) => b.candidate.length - a.candidate.length || a.order - b.order);

  if (matched.length > 0) return matched[0].candidate;
  return candidates[0] ?? "";
}

export function generateFillProblem(entry: KanjiEntry): KanjiFillProblem {
  const example = pickRandom(entry.examples);
  // □を漢字に戻して例文を表示する（読み方を答えさせる）
  const sentence = example.sentence.replace("□", entry.character);
  const reading = getContextReading(entry, example.reading);

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
  const example = pickRandom(entry.examples);
  const correctReading = getContextReading(entry, example.reading);
  const readingInKatakana = toKatakana(correctReading);
  const sentenceWithKanji = example.sentence.replace("□", entry.character);
  const sentenceWithReading = example.sentence.replace("□", readingInKatakana);
  const readingMode = Math.random() < 0.5;

  if (readingMode) {
    // 読みモード：文中の漢字の読みを選ぶ
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
      question: `「${sentenceWithKanji}」の「${entry.character}」のよみかたはどれ？`,
      choices,
      answerIndex,
      answer: correctReading,
    };
  } else {
    // 漢字モード：文中の読み（カタカナ）に合う漢字を選ぶ
    const distractors = shuffle(allEntries.filter((e) => e.character !== entry.character))
      .slice(0, 3)
      .map((e) => e.character);

    const choices = shuffle([entry.character, ...distractors]);
    const answerIndex = choices.indexOf(entry.character);

    return {
      type: "choice",
      id: `choice:${entry.character}`,
      character: entry.character,
      question: `「${sentenceWithReading}」の「${readingInKatakana}」にあうかんじはどれ？`,
      choices,
      answerIndex,
      answer: entry.character,
    };
  }
}
