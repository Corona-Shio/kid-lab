import fs from "node:fs";
import path from "node:path";

const DATA_FILES = [
  "src/data/kanji/grade1.ts",
  "src/data/kanji/grade2.ts",
  "src/data/kanji/grade3.ts",
];

function toHiragana(text) {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function isKana(char) {
  return /^[ぁ-ゖー]$/.test(char);
}

function getNeighborKana(word, targetIndex) {
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

function getReadingCandidates(entry) {
  return [...entry.readings.kunyomi, ...entry.readings.onyomi]
    .map((r) => toHiragana(r))
    .filter((r, i, arr) => r !== "" && arr.indexOf(r) === i);
}

function extractReadingFromWord(entry, word, exampleReading) {
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

function shouldUseExtractedReading(entry, extracted) {
  const candidates = getReadingCandidates(entry);
  if (candidates.includes(extracted)) return true;
  if (extracted.length < 2) return false;
  return candidates.some((candidate) => extracted.startsWith(candidate) || candidate.startsWith(extracted));
}

function getContextReading(entry, exampleReading) {
  const normalizedExample = toHiragana(exampleReading);
  const candidates = getReadingCandidates(entry);
  const matched = candidates
    .map((candidate, order) => ({ candidate, order }))
    .filter(({ candidate }) => normalizedExample.includes(candidate))
    .sort((a, b) => b.candidate.length - a.candidate.length || a.order - b.order);

  if (matched.length > 0) return { reading: matched[0].candidate, fallback: false };
  return { reading: candidates[0] ?? "", fallback: true };
}

function splitReadingByHiddenTerm(surface, reading, hiddenTerm, hiddenReading) {
  const hiddenIndex = surface.indexOf(hiddenTerm);
  if (hiddenIndex === -1) return null;

  const normalizedReading = toHiragana(reading);
  const normalizedHiddenReading = toHiragana(hiddenReading);
  if (!normalizedHiddenReading) return null;

  const readingPositions = [];
  let searchFrom = 0;
  while (searchFrom <= normalizedReading.length) {
    const position = normalizedReading.indexOf(normalizedHiddenReading, searchFrom);
    if (position === -1) break;
    readingPositions.push(position);
    searchFrom = position + 1;
  }

  if (readingPositions.length === 0) return null;

  const beforeSurface = surface.slice(0, hiddenIndex);
  const afterSurface = surface.slice(hiddenIndex + hiddenTerm.length);

  let readingIndex = null;
  if (readingPositions.length === 1) {
    [readingIndex] = readingPositions;
  } else if (beforeSurface === "") {
    readingIndex = readingPositions.find((position) => position === 0) ?? null;
  } else if (afterSurface === "") {
    readingIndex =
      readingPositions.find(
        (position) => position + normalizedHiddenReading.length === normalizedReading.length,
      ) ?? null;
  }

  if (readingIndex === null) return null;

  return {
    beforeSurface,
    beforeReading: normalizedReading.slice(0, readingIndex),
    afterSurface,
    afterReading: normalizedReading.slice(readingIndex + normalizedHiddenReading.length),
  };
}

function parseEntries(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const start = src.indexOf("[");
  const end = src.lastIndexOf("];");
  if (start === -1 || end === -1) throw new Error(`Array parse failed: ${filePath}`);
  const arrCode = src.slice(start, end + 1);
  return Function(`"use strict"; return (${arrCode});`)();
}

const allEntries = DATA_FILES.flatMap((relativeFile) => parseEntries(path.resolve(relativeFile)));
const termReadings = new Map();
for (const entry of allEntries) {
  for (const example of entry.examples) {
    if (!termReadings.has(example.word)) {
      termReadings.set(example.word, toHiragana(example.reading));
    }
  }
}

const rows = [];
const unresolvedSplitRows = [];
let handledSplitRiskCount = 0;

for (const relativeFile of DATA_FILES) {
  const filePath = path.resolve(relativeFile);
  const entries = parseEntries(filePath);
  for (const entry of entries) {
    for (const example of entry.examples) {
      const targetReading = typeof example.targetReading === "string" ? toHiragana(example.targetReading.trim()) : "";
      const hasTarget = targetReading !== "";
      const extracted = extractReadingFromWord(entry, example.word, example.reading);
      const useExtracted = Boolean(extracted && shouldUseExtractedReading(entry, extracted));
      const context = getContextReading(entry, example.reading);
      const predicted = hasTarget ? targetReading : useExtracted ? extracted : context.reading;

      const reasons = [];
      if (!hasTarget && !useExtracted && context.fallback) reasons.push("fallback-no-match");
      if (!hasTarget && extracted && !useExtracted) reasons.push("extracted-rejected");
      if (reasons.length === 0) continue;

      rows.push({
        file: relativeFile,
        character: entry.character,
        word: example.word,
        reading: example.reading,
        predicted,
        extracted: extracted ?? "-",
        reason: reasons.join(","),
      });
    }
  }
}

for (const relativeFile of DATA_FILES) {
  const filePath = path.resolve(relativeFile);
  const entries = parseEntries(filePath);
  for (const entry of entries) {
    for (const example of entry.examples) {
      const targetReading = typeof example.targetReading === "string" ? toHiragana(example.targetReading.trim()) : "";
      const extracted = extractReadingFromWord(entry, example.word, example.reading);
      const useExtracted = Boolean(extracted && shouldUseExtractedReading(entry, extracted));
      const context = getContextReading(entry, example.reading);
      const predicted = targetReading !== "" ? targetReading : useExtracted ? extracted : context.reading;

      const split = splitReadingByHiddenTerm(
        example.word,
        example.reading,
        entry.character,
        predicted,
      );

      if (!split) {
        if (example.word.includes(entry.character) && example.word.length > entry.character.length) {
          unresolvedSplitRows.push({
            file: relativeFile,
            character: entry.character,
            word: example.word,
            reading: example.reading,
            predicted,
          });
        }
        continue;
      }

      for (const [surfaceKey, readingKey] of [
        ["beforeSurface", "beforeReading"],
        ["afterSurface", "afterReading"],
      ]) {
        const surface = split[surfaceKey];
        const reading = split[readingKey];
        if (!surface || !reading) continue;

        const standaloneReading = termReadings.get(surface);
        if (standaloneReading && standaloneReading !== reading) {
          handledSplitRiskCount += 1;
        }
      }
    }
  }
}

if (rows.length === 0 && unresolvedSplitRows.length === 0) {
  console.log("No risky kanji reading examples found.");
  console.log(`Compound ruby split audit passed. handled_risky_segments=${handledSplitRiskCount}`);
  process.exit(0);
}

if (rows.length > 0) {
  console.log("file\tcharacter\tword\treading\tpredicted\textracted\treason");
  for (const row of rows) {
    console.log(
      `${row.file}\t${row.character}\t${row.word}\t${row.reading}\t${row.predicted}\t${row.extracted}\t${row.reason}`,
    );
  }
}

if (unresolvedSplitRows.length > 0) {
  console.log("file\tcharacter\tword\treading\tpredicted\treason");
  for (const row of unresolvedSplitRows) {
    console.log(
      `${row.file}\t${row.character}\t${row.word}\t${row.reading}\t${row.predicted}\tcompound-ruby-split-unresolved`,
    );
  }
}
const errorCount = rows.filter((row) => row.reason.includes("fallback-no-match")).length;
const warningCount = rows.length - errorCount + unresolvedSplitRows.length;
console.error(
  `TOTAL_ERRORS=${errorCount} TOTAL_WARNINGS=${warningCount} HANDLED_SPLIT_RISKS=${handledSplitRiskCount}`,
);
process.exit(errorCount > 0 || unresolvedSplitRows.length > 0 ? 1 : 0);
