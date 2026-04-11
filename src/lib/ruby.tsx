import type { ReactNode } from "react";
import type { KanjiEntry } from "@/types/problem";

export interface RubyTerm {
  term: string;
  reading: string;
}

interface RenderRubyTextOptions {
  excludeTerms?: string[];
}

const KANJI_PATTERN = /[々〆ヵヶ一-龯]/;

const MATH_RUBY_TERMS: RubyTerm[] = [
  { term: "お母さん", reading: "おかあさん" },
  { term: "友だち", reading: "ともだち" },
  { term: "次の日", reading: "つぎのひ" },
  { term: "追加", reading: "ついか" },
  { term: "本", reading: "ほん" },
  { term: "読みました", reading: "よみました" },
  { term: "何ページ", reading: "なんぺーじ" },
  { term: "バス停", reading: "ばすてい" },
  { term: "何人", reading: "なんにん" },
  { term: "同じ数", reading: "おなじかず" },
  { term: "分けます", reading: "わけます" },
  { term: "1人分", reading: "ひとりぶん" },
  { term: "買いました", reading: "かいました" },
  { term: "円", reading: "えん" },
  { term: "図書館", reading: "としょかん" },
  { term: "新しく", reading: "あたらしく" },
  { term: "工場", reading: "こうじょう" },
  { term: "部品", reading: "ぶひん" },
  { term: "作りました", reading: "つくりました" },
  { term: "出荷", reading: "しゅっか" },
  { term: "全部", reading: "ぜんぶ" },
  { term: "何さつ", reading: "なんさつ" },
];

export const MATH_RUBY_DICTIONARY = createRubyDictionary(MATH_RUBY_TERMS);

function toHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeReading(reading: string): string {
  return toHiragana(reading.trim());
}

function hasKanji(text: string): boolean {
  return KANJI_PATTERN.test(text);
}

export function createRubyDictionary(terms: RubyTerm[]): RubyTerm[] {
  const map = new Map<string, string>();

  for (const item of terms) {
    const term = item.term.trim();
    const reading = normalizeReading(item.reading);
    if (!term || !reading || !hasKanji(term)) continue;
    if (map.has(term)) continue;
    map.set(term, reading);
  }

  return Array.from(map.entries())
    .map(([term, reading]) => ({ term, reading }))
    .sort((a, b) => b.term.length - a.term.length || a.term.localeCompare(b.term, "ja"));
}

export function buildRubyDictionaryFromKanjiEntries(entries: KanjiEntry[]): RubyTerm[] {
  const terms: RubyTerm[] = [];

  for (const entry of entries) {
    for (const example of entry.examples) {
      if (!example.word || !example.reading) continue;
      terms.push({ term: example.word, reading: example.reading });
    }
  }

  return createRubyDictionary(terms);
}

function startsWithAny(text: string, index: number, candidates: string[]): string | null {
  for (const candidate of candidates) {
    if (candidate && text.startsWith(candidate, index)) return candidate;
  }
  return null;
}

export function renderRubyText(
  text: string,
  dictionary: RubyTerm[],
  options: RenderRubyTextOptions = {},
): ReactNode[] {
  if (!text) return [text];
  if (dictionary.length === 0) return [text];

  const excludeTerms = Array.from(new Set((options.excludeTerms ?? []).filter(Boolean))).sort(
    (a, b) => b.length - a.length || a.localeCompare(b, "ja"),
  );

  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < text.length) {
    const excluded = startsWithAny(text, index, excludeTerms);
    if (excluded) {
      nodes.push(text.slice(index, index + excluded.length));
      index += excluded.length;
      continue;
    }

    const match = dictionary.find((item) => {
      if (!text.startsWith(item.term, index)) return false;
      return !excludeTerms.some((excludedTerm) => item.term.includes(excludedTerm));
    });

    if (!match) {
      nodes.push(text[index]);
      index += 1;
      continue;
    }

    nodes.push(
      <ruby key={`${match.term}:${index}`} className="kid-ruby">
        {match.term}
        <rt className="kid-ruby-rt">{match.reading}</rt>
      </ruby>,
    );
    index += match.term.length;
  }

  return nodes;
}
