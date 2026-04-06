export type Grade = 1 | 2 | 3;

// ========== 漢字 ==========

export interface KanjiEntry {
  character: string;        // 漢字本体
  readings: {
    onyomi: string[];       // 音読み
    kunyomi: string[];      // 訓読み
  };
  strokes: number;          // 画数
  examples: KanjiExample[]; // 用例（最低2つ）
}

export interface KanjiExample {
  word: string;     // 単語（例: "山田"）
  reading: string;  // 読み仮名（例: "やまだ"）
  sentence: string; // 例文（例: "山田さんは元気です。"）
  blankIndex: number; // sentenceの何文字目を□にするか（0始まり）
}

export interface KanjiFillProblem {
  type: "fill";
  id: string;
  character: string;
  sentence: string;     // □を含む文（例: "□田さんは元気です。"）
  answer: string;       // 正解漢字
  reading: string;      // 正解の読み
  hint?: string;        // ヒント（読み仮名など）
}

export interface KanjiChoiceProblem {
  type: "choice";
  id: string;
  character: string;
  question: string;     // 質問文（例: "「山」の読み方はどれ？"）
  choices: string[];    // 4択
  answerIndex: number;  // 正解のインデックス (0-3)
  answer: string;       // 正解テキスト
}

export type KanjiProblem = KanjiFillProblem | KanjiChoiceProblem;

// ========== 算数 ==========

export type MathUnit =
  // 1年生
  | "add1"          // 1桁の足し算
  | "sub1"          // 1桁の引き算
  | "add_carry"     // 繰り上がりのある足し算
  | "sub_borrow"    // 繰り下がりのある引き算
  // 2年生
  | "add2"          // 2桁の足し算
  | "sub2"          // 2桁の引き算
  | "mul_intro"     // かけ算の導入（2〜5の段）
  | "div_intro"     // わり算の導入
  // 3年生
  | "kuku"          // 九九（6〜9の段）
  | "mul2"          // 大きな数のかけ算
  | "div2"          // わり算
  | "add3"          // 3桁の足し算
  | "sub3";         // 3桁の引き算

export const UNITS_BY_GRADE: Record<Grade, MathUnit[]> = {
  1: ["add1", "sub1", "add_carry", "sub_borrow"],
  2: ["add2", "sub2", "mul_intro", "div_intro"],
  3: ["kuku", "mul2", "div2", "add3", "sub3"],
};

export const UNIT_LABELS: Record<MathUnit, string> = {
  add1: "1けたのたしざん",
  sub1: "1けたのひきざん",
  add_carry: "くり上がりのたしざん",
  sub_borrow: "くり下がりのひきざん",
  add2: "2けたのたしざん",
  sub2: "2けたのひきざん",
  mul_intro: "かけざん（2〜5のだん）",
  div_intro: "わり算のにゅうもん",
  kuku: "九九（6〜9のだん）",
  mul2: "大きな数のかけざん",
  div2: "わり算",
  add3: "3けたのたしざん",
  sub3: "3けたのひきざん",
};

export interface MathCalcProblem {
  type: "calc";
  id: string;
  unit: MathUnit;
  expression: string;  // 例: "3 + 5"
  answer: number;
}

export interface MathWordProblem {
  type: "word";
  id: string;
  unit: MathUnit;
  text: string;        // 問題文
  question: string;    // 「〇〇はいくつ？」
  answer: number;
  unit_label: string;  // 答えの単位（「個」「本」など）
  expression?: string; // 式のヒント
}

export type MathProblem = MathCalcProblem | MathWordProblem;

export type Problem = KanjiProblem | MathProblem;
