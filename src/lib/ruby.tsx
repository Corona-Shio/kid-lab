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

interface SurfaceChunk {
  text: string;
  isKanji: boolean;
}

interface RubyChunk {
  type: "text" | "ruby";
  text: string;
  reading?: string;
}

function splitSurfaceByKanji(surface: string): SurfaceChunk[] {
  const chunks: SurfaceChunk[] = [];

  for (const char of Array.from(surface)) {
    const isKanji = hasKanji(char);
    const last = chunks[chunks.length - 1];

    if (!last || last.isKanji !== isKanji) {
      chunks.push({ text: char, isKanji });
      continue;
    }
    last.text += char;
  }

  return chunks;
}

function toRubyChunks(surface: string, reading: string): RubyChunk[] {
  const surfaceChunks = splitSurfaceByKanji(surface);
  const normalizedReading = normalizeReading(reading);
  if (surfaceChunks.length === 0) return [{ type: "text", text: surface }];

  const hasAnyKanji = surfaceChunks.some((chunk) => chunk.isKanji);
  if (!hasAnyKanji) return [{ type: "text", text: surface }];

  const rubyChunks: RubyChunk[] = [];
  let cursor = 0;

  for (let i = 0; i < surfaceChunks.length; i += 1) {
    const chunk = surfaceChunks[i];

    if (!chunk.isKanji) {
      const literal = toHiragana(chunk.text);
      const foundAt = normalizedReading.indexOf(literal, cursor);
      if (foundAt === -1) {
        return [{ type: "ruby", text: surface, reading: normalizedReading }];
      }
      if (foundAt > cursor && i === 0) {
        return [{ type: "ruby", text: surface, reading: normalizedReading }];
      }
      rubyChunks.push({ type: "text", text: chunk.text });
      cursor = foundAt + literal.length;
      continue;
    }

    const nextChunk = surfaceChunks[i + 1];
    const nextLiteral = nextChunk && !nextChunk.isKanji ? toHiragana(nextChunk.text) : "";

    let rubyReading = "";
    if (nextLiteral) {
      const nextPos = normalizedReading.indexOf(nextLiteral, cursor);
      if (nextPos === -1) {
        return [{ type: "ruby", text: surface, reading: normalizedReading }];
      }
      rubyReading = normalizedReading.slice(cursor, nextPos);
      cursor = nextPos;
    } else {
      rubyReading = normalizedReading.slice(cursor);
      cursor = normalizedReading.length;
    }

    if (!rubyReading) {
      return [{ type: "ruby", text: surface, reading: normalizedReading }];
    }
    rubyChunks.push({ type: "ruby", text: chunk.text, reading: rubyReading });
  }

  if (cursor < normalizedReading.length && surfaceChunks[surfaceChunks.length - 1]?.isKanji) {
    const tail = normalizedReading.slice(cursor);
    if (tail) {
      const last = rubyChunks[rubyChunks.length - 1];
      if (last && last.type === "ruby") {
        last.reading = `${last.reading ?? ""}${tail}`;
      }
    }
  }

  return rubyChunks;
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

    const rubyChunks = toRubyChunks(match.term, match.reading);
    rubyChunks.forEach((chunk, chunkIndex) => {
      if (chunk.type === "text") {
        nodes.push(chunk.text);
        return;
      }
      nodes.push(
        <ruby key={`${match.term}:${index}:${chunkIndex}`} className="kid-ruby">
          {chunk.text}
          <rt className="kid-ruby-rt">{chunk.reading}</rt>
        </ruby>,
      );
    });
    index += match.term.length;
  }

  return nodes;
}
