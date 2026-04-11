import type { KanjiEntry, KanjiExample, KanjiFillProblem, KanjiChoiceProblem } from "@/types/problem";
import { shuffle, pickRandom } from "@/lib/utils";

const LOW_QUALITY_GAME_SENTENCE = /(マインクラフト|ロブロックス|カービィ)/;

function makeExample(
  word: string,
  reading: string,
  sentence: string,
  targetReading?: string,
): KanjiExample {
  const blankIndex = sentence.indexOf("□");
  if (blankIndex === -1) {
    throw new Error(`Curated example must include □: ${sentence}`);
  }

  return targetReading
    ? { word, reading, sentence, blankIndex, targetReading }
    : { word, reading, sentence, blankIndex };
}

// もとのデータにある雑なゲーム風例文は除外し、
// 実際のゲーム内容に自然に合うものだけを個別に追加する。
const CURATED_GAME_EXAMPLES: Partial<Record<string, KanjiExample[]>> = {
  山: [makeExample("山", "やま", "カービィはワープスターで□をこえた。")],
  木: [makeExample("木", "き", "マインクラフトで□を切って木ざいを集めた。")],
  土: [makeExample("土", "つち", "マインクラフトで□をほって地下へ進んだ。")],
  二: [makeExample("二ひき", "にひき", "マインクラフトで□ひきの羊を見つけた。")],
  花: [makeExample("花", "はな", "カービィが□ばたけのコースを走った。")],
  空: [makeExample("空", "そら", "カービィのエアライドで□をかけぬけた。")],
  雨: [makeExample("雨", "あめ", "マインクラフトで□がふる前に家に入った。")],
  右: [makeExample("右", "みぎ", "カービィのエアライドで□に曲がった。")],
  左: [makeExample("左", "ひだり", "カービィのエアライドで□に曲がった。")],
  口: [makeExample("口", "くち", "カービィは□からすいこんでコピーした。")],
  村: [makeExample("村", "むら", "マインクラフトで□を見つけてベッドを借りた。")],
  魚: [makeExample("魚", "さかな", "マインクラフトで□をつって食べた。")],
  雪: [makeExample("雪", "ゆき", "マインクラフトで□のふるバイオームを歩いた。")],
  青: [makeExample("青", "あお", "カービィのエアライドで□い空を飛んだ。")],
  早: [makeExample("早い", "はやい", "カービィのエアライドで□くゴールした。")],
  出: [makeExample("出る", "でる", "マインクラフトで洞くつから□る。")],
  入: [makeExample("入る", "はいる", "マインクラフトで洞くつに□る。")],
  家: [makeExample("家", "いえ", "マインクラフトで大きな□を建てた。")],
  丸: [makeExample("丸い", "まるい", "カービィは□い体で転がった。")],
  岩: [makeExample("岩", "いわ", "マインクラフトで□をほって石を集めた。")],
  牛: [makeExample("牛乳", "ぎゅうにゅう", "マインクラフトで□乳をバケツに入れた。")],
  地: [makeExample("地図", "ちず", "マインクラフトで□図を見ながら村を探した。")],
  道: [makeExample("道路", "どうろ", "カービィのエアライドで近道の□路を見つけた。")],
  方: [makeExample("方向", "ほうこう", "マインクラフトで□向をたしかめて帰った。")],
  安: [makeExample("安全", "あんぜん", "マインクラフトで□全な場所にベッドを置いた。")],
  泳: [makeExample("泳ぐ", "およぐ", "カービィが海で□いで宝箱へ向かった。")],
  研: [makeExample("研究", "けんきゅう", "カービィのエアライドでマシンの特ちょうを研□した。")],
  急: [makeExample("急ぐ", "いそぐ", "マインクラフトで夜になる前に□いで帰った。")],
  曲: [makeExample("曲がる", "まがる", "カービィのエアライドでカーブを□がった。")],
  軽: [makeExample("軽い", "かるい", "カービィのエアライドで□いマシンをえらんだ。")],
  守: [makeExample("守る", "まもる", "マインクラフトで村人をモンスターから□った。")],
  場: [makeExample("場所", "ばしょ", "マインクラフトでスポーンした場□を覚えた。")],
  勝: [makeExample("勝つ", "かつ", "カービィのエアライドで友だちに□った。")],
  進: [makeExample("進む", "すすむ", "カービィのエアライドでまっすぐ□んだ。")],
  注: [makeExample("注意", "ちゅうい", "マインクラフトでクリーパーに□意した。")],
  不: [makeExample("不思議", "ふしぎ", "カービィの世界は□思議な場所が多い。")],
  平: [makeExample("平和", "へいわ", "マインクラフトを□和モードで遊んだ。")],
};

function getSelectableExamples(entry: KanjiEntry): KanjiExample[] {
  const curated = CURATED_GAME_EXAMPLES[entry.character] ?? [];
  const baseExamples = entry.examples.filter((example) => !LOW_QUALITY_GAME_SENTENCE.test(example.sentence));
  const selectable = [...baseExamples, ...curated];

  return selectable.length > 0 ? selectable : entry.examples;
}

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
  const example = pickRandom(getSelectableExamples(entry));
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
  const example = pickRandom(getSelectableExamples(entry));
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
      sentence: sentenceWithKanji,
      targetReading: correctReading,
      mode: "reading",
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
      sentence: sentenceWithKanji,
      targetReading: correctReading,
      mode: "character",
      choices,
      answerIndex,
      answer: entry.character,
    };
  }
}
