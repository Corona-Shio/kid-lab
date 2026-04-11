import type { MathCalcProblem, MathWordProblem, MathUnit } from "@/types/problem";
import { randomInt, pickRandom } from "@/lib/utils";

let problemCounter = 0;
function nextId(unit: MathUnit): string {
  return `math:${unit}:${++problemCounter}`;
}

// ========== 計算問題ジェネレータ ==========

export function generateCalcProblems(unit: MathUnit, count: number): MathCalcProblem[] {
  const generators: Record<MathUnit, () => MathCalcProblem> = {
    add1: () => {
      const a = randomInt(1, 9);
      const b = randomInt(1, 9 - a);
      return { type: "calc", id: nextId("add1"), unit: "add1", expression: `${a} + ${b}`, answer: a + b };
    },
    sub1: () => {
      const a = randomInt(1, 9);
      const b = randomInt(1, a);
      return { type: "calc", id: nextId("sub1"), unit: "sub1", expression: `${a} - ${b}`, answer: a - b };
    },
    add_carry: () => {
      const a = randomInt(2, 9);
      const b = randomInt(11 - a, 9);
      return { type: "calc", id: nextId("add_carry"), unit: "add_carry", expression: `${a} + ${b}`, answer: a + b };
    },
    sub_borrow: () => {
      const answer = randomInt(1, 9);
      const b = randomInt(2, 9);
      const a = answer + b; // a > 10 となる
      return { type: "calc", id: nextId("sub_borrow"), unit: "sub_borrow", expression: `${a} - ${b}`, answer };
    },
    add2: () => {
      const a = randomInt(10, 89);
      const b = randomInt(10, 99 - a);
      return { type: "calc", id: nextId("add2"), unit: "add2", expression: `${a} + ${b}`, answer: a + b };
    },
    sub2: () => {
      const a = randomInt(20, 99);
      const b = randomInt(10, a - 10);
      return { type: "calc", id: nextId("sub2"), unit: "sub2", expression: `${a} - ${b}`, answer: a - b };
    },
    mul_intro: () => {
      const a = randomInt(2, 5);
      const b = randomInt(1, 9);
      return { type: "calc", id: nextId("mul_intro"), unit: "mul_intro", expression: `${a} × ${b}`, answer: a * b };
    },
    div_intro: () => {
      const b = randomInt(2, 5);
      const answer = randomInt(1, 9);
      const a = b * answer;
      return { type: "calc", id: nextId("div_intro"), unit: "div_intro", expression: `${a} ÷ ${b}`, answer };
    },
    kuku: () => {
      const a = randomInt(6, 9);
      const b = randomInt(1, 9);
      return { type: "calc", id: nextId("kuku"), unit: "kuku", expression: `${a} × ${b}`, answer: a * b };
    },
    mul2: () => {
      const a = randomInt(10, 99);
      const b = randomInt(2, 9);
      return { type: "calc", id: nextId("mul2"), unit: "mul2", expression: `${a} × ${b}`, answer: a * b };
    },
    div2: () => {
      const b = randomInt(2, 9);
      const answer = randomInt(1, 12);
      const a = b * answer;
      return { type: "calc", id: nextId("div2"), unit: "div2", expression: `${a} ÷ ${b}`, answer };
    },
    add3: () => {
      const a = randomInt(100, 799);
      const b = randomInt(100, 999 - a);
      return { type: "calc", id: nextId("add3"), unit: "add3", expression: `${a} + ${b}`, answer: a + b };
    },
    sub3: () => {
      const a = randomInt(200, 999);
      const b = randomInt(100, a - 100);
      return { type: "calc", id: nextId("sub3"), unit: "sub3", expression: `${a} - ${b}`, answer: a - b };
    },
  };

  return Array.from({ length: count }, () => generators[unit]());
}

// ========== 文章題テンプレート ==========

interface WordTemplate {
  unit: MathUnit;
  generate: () => MathWordProblem;
}

const NAMES = ["たろう", "はなこ", "けんた", "さくら", "ゆうき", "あかり", "こうた", "みさき"];
const FRUITS = ["りんご", "みかん", "バナナ", "いちご", "ぶどう", "もも"];
const ANIMALS = ["ねこ", "いぬ", "うさぎ", "はと", "さかな"];
const ITEMS = ["えんぴつ", "けしごむ", "ノート", "シール", "キャンディー"];

const WORD_TEMPLATES: WordTemplate[] = [
  // 1けたのたしざん
  {
    unit: "add1",
    generate: () => {
      const name = pickRandom(NAMES);
      const item = pickRandom(FRUITS);
      const a = randomInt(1, 5);
      const b = randomInt(1, 9 - a);
      return {
        type: "word",
        id: nextId("add1"),
        unit: "add1",
        text: `${name}さんは${item}を${a}こもっています。お母さんから${b}こもらいました。`,
        question: `${item}はぜんぶでいくつになりましたか？`,
        answer: a + b,
        unit_label: "こ",
        expression: `${a} + ${b}`,
      };
    },
  },
  {
    unit: "add1",
    generate: () => {
      const name1 = pickRandom(NAMES);
      const name2 = pickRandom(NAMES.filter((n) => n !== name1));
      const animal = pickRandom(ANIMALS);
      const a = randomInt(1, 5);
      const b = randomInt(1, 9 - a);
      return {
        type: "word",
        id: nextId("add1"),
        unit: "add1",
        text: `${name1}さんは${animal}を${a}ひきかっています。${name2}さんは${b}ひきかっています。`,
        question: `ふたりあわせると${animal}は何びきですか？`,
        answer: a + b,
        unit_label: "ひき",
        expression: `${a} + ${b}`,
      };
    },
  },
  // 1けたのひきざん
  {
    unit: "sub1",
    generate: () => {
      const name = pickRandom(NAMES);
      const item = pickRandom(ITEMS);
      const a = randomInt(3, 9);
      const b = randomInt(1, a - 1);
      return {
        type: "word",
        id: nextId("sub1"),
        unit: "sub1",
        text: `${name}さんは${item}を${a}こもっています。友だちに${b}こあげました。`,
        question: `のこりは何こですか？`,
        answer: a - b,
        unit_label: "こ",
        expression: `${a} - ${b}`,
      };
    },
  },
  // 繰り上がりのたしざん
  {
    unit: "add_carry",
    generate: () => {
      const item = pickRandom(FRUITS);
      const a = randomInt(3, 8);
      const b = randomInt(11 - a, 9);
      return {
        type: "word",
        id: nextId("add_carry"),
        unit: "add_carry",
        text: `かごに${item}が${a}こはいっています。そこへ${b}こ追加しました。`,
        question: `${item}はぜんぶで何こですか？`,
        answer: a + b,
        unit_label: "こ",
        expression: `${a} + ${b}`,
      };
    },
  },
  // 繰り下がりのひきざん
  {
    unit: "sub_borrow",
    generate: () => {
      const name = pickRandom(NAMES);
      const item = pickRandom(ITEMS);
      const answer = randomInt(1, 8);
      const b = randomInt(2, 9);
      const a = answer + b;
      return {
        type: "word",
        id: nextId("sub_borrow"),
        unit: "sub_borrow",
        text: `${name}さんは${item}を${a}こもっています。${b}こなくなりました。`,
        question: `のこりは何こですか？`,
        answer,
        unit_label: "こ",
        expression: `${a} - ${b}`,
      };
    },
  },
  // 2けたのたしざん
  {
    unit: "add2",
    generate: () => {
      const name = pickRandom(NAMES);
      const a = randomInt(10, 69);
      const b = randomInt(10, 99 - a);
      return {
        type: "word",
        id: nextId("add2"),
        unit: "add2",
        text: `${name}さんは本を${a}ページ読みました。次の日に${b}ページ読みました。`,
        question: `ぜんぶで何ページ読みましたか？`,
        answer: a + b,
        unit_label: "ページ",
        expression: `${a} + ${b}`,
      };
    },
  },
  // 2けたのひきざん
  {
    unit: "sub2",
    generate: () => {
      const a = randomInt(30, 99);
      const b = randomInt(10, a - 10);
      return {
        type: "word",
        id: nextId("sub2"),
        unit: "sub2",
        text: `バスに${a}人のっています。バス停で${b}人おりました。`,
        question: `のこりは何人ですか？`,
        answer: a - b,
        unit_label: "人",
        expression: `${a} - ${b}`,
      };
    },
  },
  // かけざん（2〜5の段）
  {
    unit: "mul_intro",
    generate: () => {
      const name = pickRandom(NAMES);
      const item = pickRandom(FRUITS);
      const a = randomInt(2, 5);
      const b = randomInt(2, 8);
      return {
        type: "word",
        id: nextId("mul_intro"),
        unit: "mul_intro",
        text: `${name}さんは${item}を${b}ふくろ買いました。1ふくろに${a}こはいっています。`,
        question: `${item}はぜんぶで何こですか？`,
        answer: a * b,
        unit_label: "こ",
        expression: `${a} × ${b}`,
      };
    },
  },
  // わり算のにゅうもん
  {
    unit: "div_intro",
    generate: () => {
      const item = pickRandom(ITEMS);
      const b = randomInt(2, 5);
      const answer = randomInt(2, 8);
      const a = b * answer;
      return {
        type: "word",
        id: nextId("div_intro"),
        unit: "div_intro",
        text: `${a}この${item}を${b}人で同じ数に分けます。`,
        question: `1人分は何こですか？`,
        answer,
        unit_label: "こ",
        expression: `${a} ÷ ${b}`,
      };
    },
  },
  // 九九（6〜9の段）
  {
    unit: "kuku",
    generate: () => {
      const a = randomInt(6, 9);
      const b = randomInt(2, 9);
      const item = pickRandom(FRUITS);
      return {
        type: "word",
        id: nextId("kuku"),
        unit: "kuku",
        text: `${item}が${b}ふくろあります。1ふくろに${a}こはいっています。`,
        question: `${item}はぜんぶで何こですか？`,
        answer: a * b,
        unit_label: "こ",
        expression: `${a} × ${b}`,
      };
    },
  },
  // 大きな数のかけざん
  {
    unit: "mul2",
    generate: () => {
      const a = randomInt(10, 30);
      const b = randomInt(3, 9);
      return {
        type: "word",
        id: nextId("mul2"),
        unit: "mul2",
        text: `1まい${a}円のシールを${b}まい買います。`,
        question: `ぜんぶで何円ですか？`,
        answer: a * b,
        unit_label: "円",
        expression: `${a} × ${b}`,
      };
    },
  },
  // わり算
  {
    unit: "div2",
    generate: () => {
      const b = randomInt(3, 9);
      const answer = randomInt(3, 12);
      const a = b * answer;
      return {
        type: "word",
        id: nextId("div2"),
        unit: "div2",
        text: `${a}このあめを${b}人で同じ数ずつ分けます。`,
        question: `1人分は何こですか？`,
        answer,
        unit_label: "こ",
        expression: `${a} ÷ ${b}`,
      };
    },
  },
  // 3けたのたしざん
  {
    unit: "add3",
    generate: () => {
      const a = randomInt(100, 699);
      const b = randomInt(100, 999 - a);
      return {
        type: "word",
        id: nextId("add3"),
        unit: "add3",
        text: `図書館に本が${a}さつあります。新しく${b}さつ追加しました。`,
        question: `本は全部で何さつになりましたか？`,
        answer: a + b,
        unit_label: "さつ",
        expression: `${a} + ${b}`,
      };
    },
  },
  // 3けたのひきざん
  {
    unit: "sub3",
    generate: () => {
      const a = randomInt(300, 999);
      const b = randomInt(100, a - 100);
      return {
        type: "word",
        id: nextId("sub3"),
        unit: "sub3",
        text: `工場で部品を${a}こ作りました。そのうち${b}こを出荷しました。`,
        question: `のこりは何こですか？`,
        answer: a - b,
        unit_label: "こ",
        expression: `${a} - ${b}`,
      };
    },
  },
];

export function generateWordProblems(unit: MathUnit, count: number): MathWordProblem[] {
  const templates = WORD_TEMPLATES.filter((t) => t.unit === unit);
  if (templates.length === 0) return [];
  return Array.from({ length: count }, () => {
    const template = pickRandom(templates);
    return template.generate();
  });
}
