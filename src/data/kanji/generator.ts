import type { KanjiEntry, KanjiFillProblem, KanjiChoiceProblem } from "@/types/problem";
import { shuffle, pickRandom } from "@/lib/utils";

function toKatakana(text: string): string {
  return text.replace(/[ぁ-ん]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function toHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function isKana(char: string): boolean {
  return /^[ぁ-ゖー]$/.test(char);
}

function getNeighborKana(word: string, targetIndex: number): { prefix: string; suffix: string } {
  let prefix = "";
  for (let i = targetIndex - 1; i >= 0; i -= 1) {
    const ch = word[i];
    if (!isKana(ch)) break;
    prefix = ch + prefix;
  }

  let suffix = "";
  for (let i = targetIndex + 1; i < word.length; i += 1) {
    const ch = word[i];
    if (!isKana(ch)) break;
    suffix += ch;
  }

  return { prefix, suffix };
}

function extractReadingFromWord(
  entry: KanjiEntry,
  word: string,
  exampleReading: string,
): string | null {
  const normalizedWord = toHiragana(word);
  const normalizedReading = toHiragana(exampleReading);
  const targetIndex = normalizedWord.indexOf(entry.character);
  if (targetIndex === -1) return null;

  const { prefix, suffix } = getNeighborKana(normalizedWord, targetIndex);
  if (!prefix && !suffix) return null;

  if (prefix && suffix) {
    let startSearchAt = 0;
    while (startSearchAt <= normalizedReading.length) {
      const prefixPos = normalizedReading.indexOf(prefix, startSearchAt);
      if (prefixPos === -1) break;
      const start = prefixPos + prefix.length;
      const end = normalizedReading.indexOf(suffix, start);
      if (end > start) return normalizedReading.slice(start, end);
      startSearchAt = prefixPos + 1;
    }
    return null;
  }

  if (prefix) {
    const prefixPos = normalizedReading.lastIndexOf(prefix);
    if (prefixPos === -1) return null;
    const start = prefixPos + prefix.length;
    const extracted = normalizedReading.slice(start);
    return extracted !== "" ? extracted : null;
  }

  const suffixPos = normalizedReading.indexOf(suffix);
  if (suffixPos <= 0) return null;
  return normalizedReading.slice(0, suffixPos);
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

function getReadingCandidates(entry: KanjiEntry): string[] {
  return [...entry.readings.kunyomi, ...entry.readings.onyomi]
    .map((r) => toHiragana(r))
    .filter((r, i, arr) => r !== "" && arr.indexOf(r) === i);
}

function shouldUseExtractedReading(entry: KanjiEntry, extracted: string): boolean {
  const candidates = getReadingCandidates(entry);
  if (candidates.includes(extracted)) return true;
  if (extracted.length < 2) return false;
  return candidates.some((candidate) => extracted.startsWith(candidate) || candidate.startsWith(extracted));
}

function getExampleReading(
  entry: KanjiEntry,
  exampleWord: string,
  exampleReading: string,
  targetReading?: string,
): string {
  if (targetReading && targetReading.trim() !== "") {
    return toHiragana(targetReading.trim());
  }

  const extracted = extractReadingFromWord(entry, exampleWord, exampleReading);
  if (extracted && shouldUseExtractedReading(entry, extracted)) return extracted;

  return getContextReading(entry, exampleReading);
}

export function generateFillProblem(entry: KanjiEntry): KanjiFillProblem {
  const example = pickRandom(entry.examples);
  // □を漢字に戻して例文を表示する（読み方を答えさせる）
  const sentence = example.sentence.replace("□", entry.character);
  const reading = getExampleReading(entry, example.word, example.reading, example.targetReading);

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
  const correctReading = getExampleReading(entry, example.word, example.reading, example.targetReading);
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
