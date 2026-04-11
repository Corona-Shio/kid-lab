import type { KanjiEntry } from "@/types/problem";

// 3年生配当漢字（200字）から代表的な字を収録
export const GRADE3_KANJI: KanjiEntry[] = [
  {
    character: "悪",
    readings: { onyomi: ["アク", "オ"], kunyomi: ["わる"] },
    strokes: 11,
    examples: [
      { word: "悪い", reading: "わるい", sentence: "□いことはしない。", blankIndex: 0 },
      { word: "悪人", reading: "あくにん", sentence: "□人をつかまえた。", blankIndex: 0 },
    ],
  },
  {
    character: "安",
    readings: { onyomi: ["アン"], kunyomi: ["やす"] },
    strokes: 6,
    examples: [
      { word: "安全", reading: "あんぜん", sentence: "□全に気をつけよう。", blankIndex: 0 },
      { word: "安心", reading: "あんしん", sentence: "□心した。", blankIndex: 0 },
    ],
  },
  {
    character: "暗",
    readings: { onyomi: ["アン"], kunyomi: ["くら"] },
    strokes: 13,
    examples: [
      { word: "暗い", reading: "くらい", sentence: "夜は□い。", blankIndex: 2 },
      { word: "暗記", reading: "あんき", sentence: "漢字を□記した。", blankIndex: 2 },
    ],
  },
  {
    character: "医",
    readings: { onyomi: ["イ"], kunyomi: [] },
    strokes: 7,
    examples: [
      { word: "医者", reading: "いしゃ", sentence: "□者に診てもらった。", blankIndex: 0 },
      { word: "医院", reading: "いいん", sentence: "近くの□院に行く。", blankIndex: 0 },
    ],
  },
  {
    character: "委",
    readings: { onyomi: ["イ"], kunyomi: [] },
    strokes: 8,
    examples: [
      { word: "委員", reading: "いいん", sentence: "学級□員になった。", blankIndex: 2 },
      { word: "委員会", reading: "いいんかい", sentence: "□員会で話し合った。", blankIndex: 0 },
    ],
  },
  {
    character: "意",
    readings: { onyomi: ["イ"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "意見", reading: "いけん", sentence: "自分の□見を言う。", blankIndex: 2 },
      { word: "注意", reading: "ちゅうい", sentence: "注□してください。", blankIndex: 1 },
    ],
  },
  {
    character: "員",
    readings: { onyomi: ["イン"], kunyomi: [] },
    strokes: 10,
    examples: [
      { word: "委員", reading: "いいん", sentence: "委□になった。", blankIndex: 1 },
      { word: "全員", reading: "ぜんいん", sentence: "全□が集まった。", blankIndex: 1 },
    ],
  },
  {
    character: "院",
    readings: { onyomi: ["イン"], kunyomi: [] },
    strokes: 10,
    examples: [
      { word: "病院", reading: "びょういん", sentence: "病□に行った。", blankIndex: 1 },
      { word: "入院", reading: "にゅういん", sentence: "入□して治療を受けた。", blankIndex: 1 },
    ],
  },
  {
    character: "運",
    readings: { onyomi: ["ウン"], kunyomi: ["はこ"] },
    strokes: 12,
    examples: [
      { word: "運動", reading: "うんどう", sentence: "毎日□動する。", blankIndex: 0 },
      { word: "運転", reading: "うんてん", sentence: "バスを□転する。", blankIndex: 0 },
    ],
  },
  {
    character: "泳",
    readings: { onyomi: ["エイ"], kunyomi: ["およ"] },
    strokes: 8,
    examples: [
      { word: "泳ぐ", reading: "およぐ", sentence: "プールで□ぐ。", blankIndex: 4 },
      { word: "水泳", reading: "すいえい", sentence: "水□が得意だ。", blankIndex: 1 },
    ],
  },
  {
    character: "駅",
    readings: { onyomi: ["エキ"], kunyomi: [] },
    strokes: 14,
    examples: [
      { word: "駅", reading: "えき", sentence: "電車の□で降りる。", blankIndex: 4 },
      { word: "駅前", reading: "えきまえ", sentence: "□前で待ち合わせた。", blankIndex: 0 },
    ],
  },
  {
    character: "央",
    readings: { onyomi: ["オウ"], kunyomi: [] },
    strokes: 5,
    examples: [
      { word: "中央", reading: "ちゅうおう", sentence: "中□に立った。", blankIndex: 1 },
      { word: "中央線", reading: "ちゅうおうせん", sentence: "中□線に乗った。", blankIndex: 1 },
    ],
  },
  {
    character: "横",
    readings: { onyomi: ["オウ"], kunyomi: ["よこ"] },
    strokes: 15,
    examples: [
      { word: "横", reading: "よこ", sentence: "□に並んだ。", blankIndex: 0 },
      { word: "横断", reading: "おうだん", sentence: "道路を□断する。", blankIndex: 2 },
    ],
  },
  {
    character: "屋",
    readings: { onyomi: ["オク"], kunyomi: ["や"] },
    strokes: 9,
    examples: [
      { word: "屋根", reading: "やね", sentence: "□根に雪が積もった。", blankIndex: 0 },
      { word: "本屋", reading: "ほんや", sentence: "本□でマンガを買った。", blankIndex: 1 },
    ],
  },
  {
    character: "温",
    readings: { onyomi: ["オン"], kunyomi: ["あたた"] },
    strokes: 12,
    examples: [
      { word: "温度", reading: "おんど", sentence: "□度を測った。", blankIndex: 0 },
      { word: "温かい", reading: "あたたかい", sentence: "□かいスープを飲んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "化",
    readings: { onyomi: ["カ", "ケ"], kunyomi: ["ば"] },
    strokes: 4,
    examples: [
      { word: "文化", reading: "ぶんか", sentence: "日本の文□を学ぶ。", blankIndex: 2 },
      { word: "変化", reading: "へんか", sentence: "季節の変□を感じる。", blankIndex: 4 },
    ],
  },
  {
    character: "荷",
    readings: { onyomi: ["カ"], kunyomi: ["に"] },
    strokes: 10,
    examples: [
      { word: "荷物", reading: "にもつ", sentence: "□物を持つ。", blankIndex: 0 },
      { word: "入荷", reading: "にゅうか", sentence: "新しい商品が入□した。", blankIndex: 4 },
    ],
  },
  {
    character: "界",
    readings: { onyomi: ["カイ"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "世界", reading: "せかい", sentence: "世□は広い。", blankIndex: 1 },
      { word: "業界", reading: "ぎょうかい", sentence: "その業□で働く。", blankIndex: 2 },
    ],
  },
  {
    character: "開",
    readings: { onyomi: ["カイ"], kunyomi: ["あ", "ひら"] },
    strokes: 12,
    examples: [
      { word: "開く", reading: "あく", sentence: "ドアが□く。", blankIndex: 2 },
      { word: "開会", reading: "かいかい", sentence: "□会式が始まった。", blankIndex: 0 },
    ],
  },
  {
    character: "階",
    readings: { onyomi: ["カイ"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "三階", reading: "さんかい", sentence: "三□に教室がある。", blankIndex: 1 },
      { word: "階段", reading: "かいだん", sentence: "□段を上がる。", blankIndex: 0 },
    ],
  },
  {
    character: "感",
    readings: { onyomi: ["カン"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "感謝", reading: "かんしゃ", sentence: "□謝の気持ちを伝える。", blankIndex: 0 },
      { word: "感動", reading: "かんどう", sentence: "映画に□動した。", blankIndex: 2 },
    ],
  },
  {
    character: "漢",
    readings: { onyomi: ["カン"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "漢字", reading: "かんじ", sentence: "□字を練習する。", blankIndex: 0 },
      { word: "漢方", reading: "かんぽう", sentence: "□方薬を飲んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "館",
    readings: { onyomi: ["カン"], kunyomi: [] },
    strokes: 16,
    examples: [
      { word: "図書館", reading: "としょかん", sentence: "図書□で本を借りた。", blankIndex: 2 },
      { word: "博物館", reading: "はくぶつかん", sentence: "博物□に行った。", blankIndex: 2 },
    ],
  },
  {
    character: "岸",
    readings: { onyomi: ["ガン"], kunyomi: ["きし"] },
    strokes: 8,
    examples: [
      { word: "岸", reading: "きし", sentence: "川の□に立つ。", blankIndex: 2 },
      { word: "海岸", reading: "かいがん", sentence: "海□を散歩した。", blankIndex: 1 },
    ],
  },
  {
    character: "起",
    readings: { onyomi: ["キ"], kunyomi: ["お"] },
    strokes: 10,
    examples: [
      { word: "起きる", reading: "おきる", sentence: "朝早く□きる。", blankIndex: 2 },
      { word: "起立", reading: "きりつ", sentence: "□立してください。", blankIndex: 0 },
    ],
  },
  {
    character: "期",
    readings: { onyomi: ["キ", "ゴ"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "期間", reading: "きかん", sentence: "□間を決めて練習する。", blankIndex: 0 },
      { word: "時期", reading: "じき", sentence: "良い時□に来た。", blankIndex: 1 },
    ],
  },
  {
    character: "客",
    readings: { onyomi: ["キャク", "カク"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "客", reading: "きゃく", sentence: "お□さんが来た。", blankIndex: 1 },
      { word: "観客", reading: "かんきゃく", sentence: "観□が拍手した。", blankIndex: 1 },
    ],
  },
  {
    character: "究",
    readings: { onyomi: ["キュウ"], kunyomi: ["きわ"] },
    strokes: 7,
    examples: [
      { word: "研究", reading: "けんきゅう", sentence: "研□に取り組む。", blankIndex: 1 },
      { word: "追究", reading: "ついきゅう", sentence: "真実を追□する。", blankIndex: 2 },
    ],
  },
  {
    character: "急",
    readings: { onyomi: ["キュウ"], kunyomi: ["いそ"] },
    strokes: 9,
    examples: [
      { word: "急ぐ", reading: "いそぐ", sentence: "学校へ□いで行く。", blankIndex: 3 },
      { word: "急行", reading: "きゅうこう", sentence: "□行電車に乗った。", blankIndex: 0 },
    ],
  },
  {
    character: "球",
    readings: { onyomi: ["キュウ"], kunyomi: ["たま"] },
    strokes: 11,
    examples: [
      { word: "地球", reading: "ちきゅう", sentence: "地□は丸い。", blankIndex: 1 },
      { word: "野球", reading: "やきゅう", sentence: "野□が好きだ。", blankIndex: 1 },
    ],
  },
  {
    character: "去",
    readings: { onyomi: ["キョ", "コ"], kunyomi: ["さ"] },
    strokes: 5,
    examples: [
      { word: "去年", reading: "きょねん", sentence: "□年の出来事だ。", blankIndex: 0 },
      { word: "過去", reading: "かこ", sentence: "過□を振り返る。", blankIndex: 1 },
    ],
  },
  {
    character: "宮",
    readings: { onyomi: ["キュウ", "グウ", "ク"], kunyomi: ["みや"] },
    strokes: 10,
    examples: [
      { word: "宮殿", reading: "きゅうでん", sentence: "美しい□殿を見た。", blankIndex: 0 },
      { word: "神宮", reading: "じんぐう", sentence: "有名な神□を参拝した。", blankIndex: 2 },
    ],
  },
  {
    character: "橋",
    readings: { onyomi: ["キョウ"], kunyomi: ["はし"] },
    strokes: 16,
    examples: [
      { word: "橋", reading: "はし", sentence: "川に□をかけた。", blankIndex: 2 },
      { word: "鉄橋", reading: "てっきょう", sentence: "鉄□を渡った。", blankIndex: 1 },
    ],
  },
  {
    character: "業",
    readings: { onyomi: ["ギョウ", "ゴウ"], kunyomi: ["わざ"] },
    strokes: 13,
    examples: [
      { word: "授業", reading: "じゅぎょう", sentence: "授□が始まった。", blankIndex: 1 },
      { word: "農業", reading: "のうぎょう", sentence: "農□を体験した。", blankIndex: 1 },
    ],
  },
  {
    character: "曲",
    readings: { onyomi: ["キョク"], kunyomi: ["ま"] },
    strokes: 6,
    examples: [
      { word: "曲がる", reading: "まがる", sentence: "道が□がる。", blankIndex: 1 },
      { word: "名曲", reading: "めいきょく", sentence: "有名な名□を聴いた。", blankIndex: 2 },
    ],
  },
  {
    character: "局",
    readings: { onyomi: ["キョク"], kunyomi: [] },
    strokes: 7,
    examples: [
      { word: "郵便局", reading: "ゆうびんきょく", sentence: "郵便□で手紙を出した。", blankIndex: 2 },
      { word: "放送局", reading: "ほうそうきょく", sentence: "テレビの放送□だ。", blankIndex: 3 },
    ],
  },
  {
    character: "銀",
    readings: { onyomi: ["ギン"], kunyomi: [] },
    strokes: 14,
    examples: [
      { word: "銀行", reading: "ぎんこう", sentence: "□行にお金を預けた。", blankIndex: 0 },
      { word: "銀色", reading: "ぎんいろ", sentence: "□色のトロフィーだ。", blankIndex: 0 },
    ],
  },
  {
    character: "区",
    readings: { onyomi: ["ク"], kunyomi: [] },
    strokes: 4,
    examples: [
      { word: "地区", reading: "ちく", sentence: "この地□に住む。", blankIndex: 2 },
      { word: "区別", reading: "くべつ", sentence: "□別できない。", blankIndex: 0 },
    ],
  },
  {
    character: "苦",
    readings: { onyomi: ["ク"], kunyomi: ["くる", "にが"] },
    strokes: 8,
    examples: [
      { word: "苦手", reading: "にがて", sentence: "算数が□手だ。", blankIndex: 0 },
      { word: "苦労", reading: "くろう", sentence: "□労して覚えた。", blankIndex: 0 },
    ],
  },
  {
    character: "具",
    readings: { onyomi: ["グ"], kunyomi: [] },
    strokes: 8,
    examples: [
      { word: "道具", reading: "どうぐ", sentence: "道□を使う。", blankIndex: 1 },
      { word: "玩具", reading: "がんぐ", sentence: "玩□で遊んだ。", blankIndex: 1 },
    ],
  },
  {
    character: "君",
    readings: { onyomi: ["クン"], kunyomi: ["きみ"] },
    strokes: 7,
    examples: [
      { word: "君", reading: "きみ", sentence: "□はだれ？", blankIndex: 0 },
      { word: "諸君", reading: "しょくん", sentence: "諸□に話がある。", blankIndex: 1 },
    ],
  },
  {
    character: "係",
    readings: { onyomi: ["ケイ"], kunyomi: ["かかり"] },
    strokes: 9,
    examples: [
      { word: "関係", reading: "かんけい", sentence: "深い関□がある。", blankIndex: 3 },
      { word: "関係", reading: "かんけい", sentence: "深い関□がある。", blankIndex: 2 },
    ],
  },
  {
    character: "軽",
    readings: { onyomi: ["ケイ"], kunyomi: ["かる"] },
    strokes: 12,
    examples: [
      { word: "軽い", reading: "かるい", sentence: "□い荷物だ。", blankIndex: 0 },
      { word: "軽食", reading: "けいしょく", sentence: "□食を食べた。", blankIndex: 0 },
    ],
  },
  {
    character: "血",
    readings: { onyomi: ["ケツ"], kunyomi: ["ち"] },
    strokes: 6,
    examples: [
      { word: "血", reading: "ち", sentence: "□が出た。", blankIndex: 0 },
      { word: "血液", reading: "けつえき", sentence: "□液の検査をした。", blankIndex: 0 },
    ],
  },
  {
    character: "決",
    readings: { onyomi: ["ケツ"], kunyomi: ["き"] },
    strokes: 7,
    examples: [
      { word: "決める", reading: "きめる", sentence: "目標を□める。", blankIndex: 2 },
      { word: "決める", reading: "きめる", sentence: "目標を□める。", blankIndex: 3 },
    ],
  },
  {
    character: "研",
    readings: { onyomi: ["ケン"], kunyomi: ["と"] },
    strokes: 9,
    examples: [
      { word: "研究", reading: "けんきゅう", sentence: "□究を続ける。", blankIndex: 0 },
      { word: "研修", reading: "けんしゅう", sentence: "□修に参加した。", blankIndex: 0 },
    ],
  },
  {
    character: "県",
    readings: { onyomi: ["ケン"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "県", reading: "けん", sentence: "この□に住んでいる。", blankIndex: 2 },
      { word: "県庁", reading: "けんちょう", sentence: "□庁に行った。", blankIndex: 0 },
    ],
  },
  {
    character: "庫",
    readings: { onyomi: ["コ", "ク"], kunyomi: [] },
    strokes: 10,
    examples: [
      { word: "倉庫", reading: "そうこ", sentence: "倉□に荷物を入れた。", blankIndex: 1 },
      { word: "文庫", reading: "ぶんこ", sentence: "文□本を読んだ。", blankIndex: 1 },
    ],
  },
  {
    character: "湖",
    readings: { onyomi: ["コ"], kunyomi: ["みずうみ"] },
    strokes: 12,
    examples: [
      { word: "湖", reading: "みずうみ", sentence: "青い□で釣りをした。", blankIndex: 3 },
      { word: "湖畔", reading: "こはん", sentence: "□畔を散歩した。", blankIndex: 0 },
    ],
  },
  {
    character: "向",
    readings: { onyomi: ["コウ"], kunyomi: ["む"] },
    strokes: 6,
    examples: [
      { word: "向く", reading: "むく", sentence: "こちらを□く。", blankIndex: 4 },
      { word: "方向", reading: "ほうこう", sentence: "方□を確認する。", blankIndex: 1 },
    ],
  },
  {
    character: "幸",
    readings: { onyomi: ["コウ"], kunyomi: ["さいわ", "しあわ"] },
    strokes: 8,
    examples: [
      { word: "幸せ", reading: "しあわせ", sentence: "□せな気持ちになった。", blankIndex: 0 },
      { word: "幸運", reading: "こううん", sentence: "□運に恵まれた。", blankIndex: 0 },
    ],
  },
  {
    character: "港",
    readings: { onyomi: ["コウ"], kunyomi: ["みなと"] },
    strokes: 12,
    examples: [
      { word: "港", reading: "みなと", sentence: "□に船が着いた。", blankIndex: 0 },
      { word: "空港", reading: "くうこう", sentence: "空□から出発した。", blankIndex: 1 },
    ],
  },
  {
    character: "号",
    readings: { onyomi: ["ゴウ"], kunyomi: [] },
    strokes: 5,
    examples: [
      { word: "番号", reading: "ばんごう", sentence: "番□を言ってください。", blankIndex: 1 },
      { word: "号外", reading: "ごうがい", sentence: "□外を配った。", blankIndex: 0 },
    ],
  },
  {
    character: "根",
    readings: { onyomi: ["コン"], kunyomi: ["ね"] },
    strokes: 10,
    examples: [
      { word: "根", reading: "ね", sentence: "木の□が深い。", blankIndex: 2 },
      { word: "根性", reading: "こんじょう", sentence: "□性を見せた。", blankIndex: 0 },
    ],
  },
  {
    character: "祭",
    readings: { onyomi: ["サイ"], kunyomi: ["まつ"] },
    strokes: 11,
    examples: [
      { word: "祭り", reading: "まつり", sentence: "夏□りが楽しみだ。", blankIndex: 1 },
      { word: "文化祭", reading: "ぶんかさい", sentence: "文化□に出店した。", blankIndex: 2 },
    ],
  },
  {
    character: "坂",
    readings: { onyomi: ["ハン", "バン"], kunyomi: ["さか"] },
    strokes: 7,
    examples: [
      { word: "坂", reading: "さか", sentence: "急な□を上る。", blankIndex: 3 },
      { word: "坂", reading: "さか", sentence: "急な□を上る。", blankIndex: 2 },
    ],
  },
  {
    character: "指",
    readings: { onyomi: ["シ"], kunyomi: ["ゆび", "さ"] },
    strokes: 9,
    examples: [
      { word: "指", reading: "ゆび", sentence: "□をさして教えた。", blankIndex: 0 },
      { word: "指導", reading: "しどう", sentence: "先生が□導してくれた。", blankIndex: 0 },
    ],
  },
  {
    character: "死",
    readings: { onyomi: ["シ"], kunyomi: ["し"] },
    strokes: 6,
    examples: [
      { word: "必死", reading: "ひっし", sentence: "必□で頑張った。", blankIndex: 1 },
      { word: "死亡", reading: "しぼう", sentence: "□亡事故を防ぐ。", blankIndex: 0 },
    ],
  },
  {
    character: "詩",
    readings: { onyomi: ["シ"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "詩", reading: "し", sentence: "美しい□を書いた。", blankIndex: 4 },
      { word: "詩人", reading: "しじん", sentence: "有名な□人の作品だ。", blankIndex: 0 },
    ],
  },
  {
    character: "式",
    readings: { onyomi: ["シキ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "入学式", reading: "にゅうがくしき", sentence: "入学□に出た。", blankIndex: 2 },
      { word: "計算式", reading: "けいさんしき", sentence: "計算□を書く。", blankIndex: 2 },
    ],
  },
  {
    character: "実",
    readings: { onyomi: ["ジツ"], kunyomi: ["み", "みの"] },
    strokes: 8,
    examples: [
      { word: "実る", reading: "みのる", sentence: "果物が□った。", blankIndex: 3 },
      { word: "実る", reading: "みのる", sentence: "果物が□った。", blankIndex: 3 },
    ],
  },
  {
    character: "写",
    readings: { onyomi: ["シャ"], kunyomi: ["うつ"] },
    strokes: 5,
    examples: [
      { word: "写真", reading: "しゃしん", sentence: "□真を撮った。", blankIndex: 0 },
      { word: "写す", reading: "うつす", sentence: "黒板を□す。", blankIndex: 3 },
    ],
  },
  {
    character: "主",
    readings: { onyomi: ["シュ", "ス"], kunyomi: ["ぬし", "おも"] },
    strokes: 5,
    examples: [
      { word: "主人", reading: "しゅじん", sentence: "□人公が登場した。", blankIndex: 0 },
      { word: "主役", reading: "しゅやく", sentence: "□役を演じた。", blankIndex: 0 },
    ],
  },
  {
    character: "守",
    readings: { onyomi: ["シュ", "ス"], kunyomi: ["まも", "もり"] },
    strokes: 6,
    examples: [
      { word: "守る", reading: "まもる", sentence: "約束を□る。", blankIndex: 2 },
      { word: "守備", reading: "しゅび", sentence: "□備についた。", blankIndex: 0 },
    ],
  },
  {
    character: "取",
    readings: { onyomi: ["シュ"], kunyomi: ["と"] },
    strokes: 8,
    examples: [
      { word: "取る", reading: "とる", sentence: "ノートを□る。", blankIndex: 4 },
      { word: "取材", reading: "しゅざい", sentence: "□材に来た記者だ。", blankIndex: 0 },
    ],
  },
  {
    character: "受",
    readings: { onyomi: ["ジュ"], kunyomi: ["う"] },
    strokes: 8,
    examples: [
      { word: "受ける", reading: "うける", sentence: "テストを□ける。", blankIndex: 3 },
      { word: "受験", reading: "じゅけん", sentence: "□験に合格した。", blankIndex: 0 },
    ],
  },
  {
    character: "重",
    readings: { onyomi: ["ジュウ", "チョウ"], kunyomi: ["おも", "かさ"] },
    strokes: 9,
    examples: [
      { word: "重い", reading: "おもい", sentence: "□い荷物を持った。", blankIndex: 0 },
      { word: "体重", reading: "たいじゅう", sentence: "体□が増えた。", blankIndex: 1 },
    ],
  },
  {
    character: "州",
    readings: { onyomi: ["シュウ"], kunyomi: ["す"] },
    strokes: 6,
    examples: [
      { word: "九州", reading: "きゅうしゅう", sentence: "九□に旅行した。", blankIndex: 1 },
      { word: "本州", reading: "ほんしゅう", sentence: "本□を旅した。", blankIndex: 1 },
    ],
  },
  {
    character: "宿",
    readings: { onyomi: ["シュク"], kunyomi: ["やど"] },
    strokes: 11,
    examples: [
      { word: "宿題", reading: "しゅくだい", sentence: "□題をやった。", blankIndex: 0 },
      { word: "宿泊", reading: "しゅくはく", sentence: "旅館に□泊した。", blankIndex: 0 },
    ],
  },
  {
    character: "所",
    readings: { onyomi: ["ショ"], kunyomi: ["ところ"] },
    strokes: 8,
    examples: [
      { word: "場所", reading: "ばしょ", sentence: "待ち合わせの場□に着いた。", blankIndex: 6 },
      { word: "場所", reading: "ばしょ", sentence: "待ち合わせの場□に着いた。", blankIndex: 7 },
    ],
  },
  {
    character: "暑",
    readings: { onyomi: ["ショ"], kunyomi: ["あつ"] },
    strokes: 12,
    examples: [
      { word: "暑い", reading: "あつい", sentence: "夏は□い。", blankIndex: 2 },
      { word: "猛暑", reading: "もうしょ", sentence: "猛□が続く。", blankIndex: 1 },
    ],
  },
  {
    character: "助",
    readings: { onyomi: ["ジョ"], kunyomi: ["たす", "すけ"] },
    strokes: 7,
    examples: [
      { word: "助ける", reading: "たすける", sentence: "友達を□ける。", blankIndex: 2 },
      { word: "助言", reading: "じょげん", sentence: "□言をもらった。", blankIndex: 0 },
    ],
  },
  {
    character: "勝",
    readings: { onyomi: ["ショウ"], kunyomi: ["か"] },
    strokes: 12,
    examples: [
      { word: "勝つ", reading: "かつ", sentence: "試合に□つ。", blankIndex: 4 },
      { word: "勝負", reading: "しょうぶ", sentence: "□負をした。", blankIndex: 0 },
    ],
  },
  {
    character: "消",
    readings: { onyomi: ["ショウ"], kunyomi: ["き", "け"] },
    strokes: 10,
    examples: [
      { word: "消える", reading: "きえる", sentence: "火が□える。", blankIndex: 1 },
      { word: "消防", reading: "しょうぼう", sentence: "□防車が来た。", blankIndex: 0 },
    ],
  },
  {
    character: "章",
    readings: { onyomi: ["ショウ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "文章", reading: "ぶんしょう", sentence: "文□を書いた。", blankIndex: 1 },
      { word: "章", reading: "しょう", sentence: "第一□を読んだ。", blankIndex: 2 },
    ],
  },
  {
    character: "植",
    readings: { onyomi: ["ショク"], kunyomi: ["う"] },
    strokes: 12,
    examples: [
      { word: "植える", reading: "うえる", sentence: "花を□える。", blankIndex: 1 },
      { word: "植物", reading: "しょくぶつ", sentence: "□物を育てる。", blankIndex: 0 },
    ],
  },
  {
    character: "申",
    readings: { onyomi: ["シン"], kunyomi: ["もう"] },
    strokes: 5,
    examples: [
      { word: "申し込む", reading: "もうしこむ", sentence: "参加を□し込んだ。", blankIndex: 2 },
      { word: "申告", reading: "しんこく", sentence: "□告書を書いた。", blankIndex: 0 },
    ],
  },
  {
    character: "身",
    readings: { onyomi: ["シン"], kunyomi: ["み"] },
    strokes: 7,
    examples: [
      { word: "自身", reading: "じしん", sentence: "自□でやってみた。", blankIndex: 1 },
      { word: "自身", reading: "じしん", sentence: "自□でやってみた。", blankIndex: 1 },
    ],
  },
  {
    character: "進",
    readings: { onyomi: ["シン"], kunyomi: ["すす"] },
    strokes: 11,
    examples: [
      { word: "進む", reading: "すすむ", sentence: "前に□む。", blankIndex: 2 },
      { word: "進歩", reading: "しんぽ", sentence: "□歩した。", blankIndex: 0 },
    ],
  },
  {
    character: "深",
    readings: { onyomi: ["シン"], kunyomi: ["ふか"] },
    strokes: 11,
    examples: [
      { word: "深い", reading: "ふかい", sentence: "□い海に潜った。", blankIndex: 0 },
      { word: "深夜", reading: "しんや", sentence: "□夜まで勉強した。", blankIndex: 0 },
    ],
  },
  {
    character: "整",
    readings: { onyomi: ["セイ"], kunyomi: ["ととの"] },
    strokes: 16,
    examples: [
      { word: "整える", reading: "ととのえる", sentence: "服装を□える。", blankIndex: 2 },
      { word: "整理", reading: "せいり", sentence: "部屋を□理した。", blankIndex: 2 },
    ],
  },
  {
    character: "世",
    readings: { onyomi: ["セイ", "セ"], kunyomi: ["よ"] },
    strokes: 5,
    examples: [
      { word: "世界", reading: "せかい", sentence: "□界は広い。", blankIndex: 0 },
      { word: "世の中", reading: "よのなか", sentence: "□の中は不思議だ。", blankIndex: 0 },
    ],
  },
  {
    character: "全",
    readings: { onyomi: ["ゼン"], kunyomi: ["すべ", "まった"] },
    strokes: 6,
    examples: [
      { word: "全員", reading: "ぜんいん", sentence: "□員集まった。", blankIndex: 0 },
      { word: "全力", reading: "ぜんりょく", sentence: "□力で頑張った。", blankIndex: 0 },
    ],
  },
  {
    character: "速",
    readings: { onyomi: ["ソク"], kunyomi: ["はや"] },
    strokes: 10,
    examples: [
      { word: "速い", reading: "はやい", sentence: "□い車だ。", blankIndex: 0 },
      { word: "速度", reading: "そくど", sentence: "□度を落とした。", blankIndex: 0 },
    ],
  },
  {
    character: "族",
    readings: { onyomi: ["ゾク"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "家族", reading: "かぞく", sentence: "家□で旅行した。", blankIndex: 1 },
      { word: "民族", reading: "みんぞく", sentence: "さまざまな民□が暮らす。", blankIndex: 2 },
    ],
  },
  {
    character: "他",
    readings: { onyomi: ["タ"], kunyomi: ["ほか"] },
    strokes: 5,
    examples: [
      { word: "他", reading: "ほか", sentence: "□の方法を試した。", blankIndex: 0 },
      { word: "他人", reading: "たにん", sentence: "□人を思いやる。", blankIndex: 0 },
    ],
  },
  {
    character: "打",
    readings: { onyomi: ["ダ"], kunyomi: ["う"] },
    strokes: 5,
    examples: [
      { word: "打つ", reading: "うつ", sentence: "ボールを□つ。", blankIndex: 4 },
      { word: "打者", reading: "だしゃ", sentence: "強い□者が出てきた。", blankIndex: 0 },
    ],
  },
  {
    character: "対",
    readings: { onyomi: ["タイ", "ツイ"], kunyomi: ["むか"] },
    strokes: 7,
    examples: [
      { word: "反対", reading: "はんたい", sentence: "反□の意見もある。", blankIndex: 1 },
      { word: "対話", reading: "たいわ", sentence: "□話をした。", blankIndex: 0 },
    ],
  },
  {
    character: "待",
    readings: { onyomi: ["タイ"], kunyomi: ["ま"] },
    strokes: 9,
    examples: [
      { word: "待つ", reading: "まつ", sentence: "友達を□つ。", blankIndex: 3 },
      { word: "待合室", reading: "まちあいしつ", sentence: "□合室で座る。", blankIndex: 0 },
    ],
  },
  {
    character: "代",
    readings: { onyomi: ["ダイ", "タイ"], kunyomi: ["か", "しろ"] },
    strokes: 5,
    examples: [
      { word: "時代", reading: "じだい", sentence: "昔の時□の話だ。", blankIndex: 2 },
      { word: "代わり", reading: "かわり", sentence: "□わりにやってあげた。", blankIndex: 0 },
    ],
  },
  {
    character: "第",
    readings: { onyomi: ["ダイ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "第一", reading: "だいいち", sentence: "□一問題を解く。", blankIndex: 0 },
      { word: "第二", reading: "だいに", sentence: "□二章を読んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "題",
    readings: { onyomi: ["ダイ"], kunyomi: [] },
    strokes: 18,
    examples: [
      { word: "問題", reading: "もんだい", sentence: "問□に答える。", blankIndex: 1 },
      { word: "宿題", reading: "しゅくだい", sentence: "宿□を仕上げた。", blankIndex: 1 },
    ],
  },
  {
    character: "短",
    readings: { onyomi: ["タン"], kunyomi: ["みじか"] },
    strokes: 12,
    examples: [
      { word: "短い", reading: "みじかい", sentence: "□い鉛筆だ。", blankIndex: 0 },
      { word: "短所", reading: "たんしょ", sentence: "□所を克服する。", blankIndex: 0 },
    ],
  },
  {
    character: "炭",
    readings: { onyomi: ["タン"], kunyomi: ["すみ"] },
    strokes: 9,
    examples: [
      { word: "炭", reading: "すみ", sentence: "□で火を起こした。", blankIndex: 0 },
      { word: "石炭", reading: "せきたん", sentence: "石□を燃やした。", blankIndex: 1 },
    ],
  },
  {
    character: "注",
    readings: { onyomi: ["チュウ"], kunyomi: ["そそ"] },
    strokes: 8,
    examples: [
      { word: "注意", reading: "ちゅうい", sentence: "□意してください。", blankIndex: 0 },
      { word: "注目", reading: "ちゅうもく", sentence: "□目を集めた。", blankIndex: 0 },
    ],
  },
  {
    character: "柱",
    readings: { onyomi: ["チュウ"], kunyomi: ["はしら"] },
    strokes: 9,
    examples: [
      { word: "柱", reading: "はしら", sentence: "家の□が太い。", blankIndex: 2 },
      { word: "電柱", reading: "でんちゅう", sentence: "電□に張り紙があった。", blankIndex: 1 },
    ],
  },
  {
    character: "丁",
    readings: { onyomi: ["チョウ", "テイ"], kunyomi: [] },
    strokes: 2,
    examples: [
      { word: "丁寧", reading: "ていねい", sentence: "□寧に書く。", blankIndex: 0 },
      { word: "一丁目", reading: "いちちょうめ", sentence: "一□目に住む。", blankIndex: 1 },
    ],
  },
  {
    character: "追",
    readings: { onyomi: ["ツイ"], kunyomi: ["お"] },
    strokes: 9,
    examples: [
      { word: "追う", reading: "おう", sentence: "ボールを□う。", blankIndex: 4 },
      { word: "追加", reading: "ついか", sentence: "□加で注文した。", blankIndex: 0 },
    ],
  },
  {
    character: "定",
    readings: { onyomi: ["テイ", "ジョウ"], kunyomi: ["さだ"] },
    strokes: 8,
    examples: [
      { word: "決定", reading: "けってい", sentence: "決□した。", blankIndex: 1 },
      { word: "定規", reading: "じょうぎ", sentence: "□規で線を引く。", blankIndex: 0 },
    ],
  },
  {
    character: "庭",
    readings: { onyomi: ["テイ"], kunyomi: ["にわ"] },
    strokes: 10,
    examples: [
      { word: "庭", reading: "にわ", sentence: "家の□で遊ぶ。", blankIndex: 2 },
      { word: "庭園", reading: "ていえん", sentence: "美しい□園を見た。", blankIndex: 0 },
    ],
  },
  {
    character: "転",
    readings: { onyomi: ["テン"], kunyomi: ["ころ"] },
    strokes: 11,
    examples: [
      { word: "転ぶ", reading: "ころぶ", sentence: "道で□んだ。", blankIndex: 1 },
      { word: "自転車", reading: "じてんしゃ", sentence: "自□車で行く。", blankIndex: 1 },
    ],
  },
  {
    character: "都",
    readings: { onyomi: ["ト", "ツ"], kunyomi: ["みやこ"] },
    strokes: 11,
    examples: [
      { word: "首都", reading: "しゅと", sentence: "首□に住む。", blankIndex: 1 },
      { word: "東京都", reading: "とうきょうと", sentence: "東京□に行った。", blankIndex: 2 },
    ],
  },
  {
    character: "度",
    readings: { onyomi: ["ド", "ト", "タク"], kunyomi: ["たび"] },
    strokes: 9,
    examples: [
      { word: "温度", reading: "おんど", sentence: "温□を測る。", blankIndex: 1 },
      { word: "今度", reading: "こんど", sentence: "今□また遊ぼう。", blankIndex: 1 },
    ],
  },
  {
    character: "投",
    readings: { onyomi: ["トウ"], kunyomi: ["な"] },
    strokes: 7,
    examples: [
      { word: "投げる", reading: "なげる", sentence: "ボールを□げる。", blankIndex: 4 },
      { word: "投票", reading: "とうひょう", sentence: "□票した。", blankIndex: 0 },
    ],
  },
  {
    character: "豆",
    readings: { onyomi: ["ズ", "トウ"], kunyomi: ["まめ"] },
    strokes: 7,
    examples: [
      { word: "豆腐", reading: "とうふ", sentence: "□腐のみそ汁だ。", blankIndex: 0 },
      { word: "豆腐", reading: "とうふ", sentence: "□腐のみそ汁だ。", blankIndex: 0 },
    ],
  },
  {
    character: "動",
    readings: { onyomi: ["ドウ"], kunyomi: ["うご"] },
    strokes: 11,
    examples: [
      { word: "動く", reading: "うごく", sentence: "体を□く。", blankIndex: 2 },
      { word: "運動", reading: "うんどう", sentence: "運□をした。", blankIndex: 1 },
    ],
  },
  {
    character: "波",
    readings: { onyomi: ["ハ"], kunyomi: ["なみ"] },
    strokes: 8,
    examples: [
      { word: "波", reading: "なみ", sentence: "大きな□が来た。", blankIndex: 3 },
      { word: "波紋", reading: "はもん", sentence: "□紋が広がった。", blankIndex: 0 },
    ],
  },
  {
    character: "配",
    readings: { onyomi: ["ハイ"], kunyomi: ["くば"] },
    strokes: 10,
    examples: [
      { word: "配る", reading: "くばる", sentence: "プリントを□る。", blankIndex: 3 },
      { word: "配る", reading: "くばる", sentence: "プリントを□る。", blankIndex: 5 },
    ],
  },
  {
    character: "発",
    readings: { onyomi: ["ハツ", "ホツ"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "発音", reading: "はつおん", sentence: "□音をれんしゅうした。", blankIndex: 0 },
      { word: "発明", reading: "はつめい", sentence: "新しい□明をかんがえた。", blankIndex: 3 },
    ],
  },
  {
    character: "反",
    readings: { onyomi: ["ハン", "タン"], kunyomi: ["そ"] },
    strokes: 4,
    examples: [
      { word: "反対", reading: "はんたい", sentence: "□対の意見だ。", blankIndex: 0 },
      { word: "反省", reading: "はんせい", sentence: "□省した。", blankIndex: 0 },
    ],
  },
  {
    character: "坂",
    readings: { onyomi: ["ハン", "バン"], kunyomi: ["さか"] },
    strokes: 7,
    examples: [
      { word: "坂道", reading: "さかみち", sentence: "急な□道を下った。", blankIndex: 0 },
      { word: "坂道", reading: "さかみち", sentence: "急な□道を下った。", blankIndex: 2 },
    ],
  },
  {
    character: "皮",
    readings: { onyomi: ["ヒ"], kunyomi: ["かわ"] },
    strokes: 5,
    examples: [
      { word: "皮", reading: "かわ", sentence: "りんごの□をむく。", blankIndex: 4 },
      { word: "皮膚", reading: "ひふ", sentence: "□膚の手入れをする。", blankIndex: 0 },
    ],
  },
  {
    character: "悲",
    readings: { onyomi: ["ヒ"], kunyomi: ["かな"] },
    strokes: 12,
    examples: [
      { word: "悲しい", reading: "かなしい", sentence: "□しい話だ。", blankIndex: 0 },
      { word: "悲劇", reading: "ひげき", sentence: "□劇を見た。", blankIndex: 0 },
    ],
  },
  {
    character: "鼻",
    readings: { onyomi: ["ビ"], kunyomi: ["はな"] },
    strokes: 14,
    examples: [
      { word: "鼻", reading: "はな", sentence: "□をかむ。", blankIndex: 0 },
      { word: "耳鼻科", reading: "じびか", sentence: "耳□科に行った。", blankIndex: 1 },
    ],
  },
  {
    character: "筆",
    readings: { onyomi: ["ヒツ"], kunyomi: ["ふで"] },
    strokes: 12,
    examples: [
      { word: "筆", reading: "ふで", sentence: "□で字を書く。", blankIndex: 0 },
      { word: "筆", reading: "ふで", sentence: "□で字を書く。", blankIndex: 0 },
    ],
  },
  {
    character: "氷",
    readings: { onyomi: ["ヒョウ"], kunyomi: ["こおり"] },
    strokes: 5,
    examples: [
      { word: "氷", reading: "こおり", sentence: "□の上を滑る。", blankIndex: 0 },
      { word: "氷山", reading: "ひょうざん", sentence: "大きな□山を見た。", blankIndex: 0 },
    ],
  },
  {
    character: "表",
    readings: { onyomi: ["ヒョウ"], kunyomi: ["おもて", "あらわ"] },
    strokes: 8,
    examples: [
      { word: "表", reading: "おもて", sentence: "紙の□に書く。", blankIndex: 2 },
      { word: "表", reading: "おもて", sentence: "紙の□に書く。", blankIndex: 2 },
    ],
  },
  {
    character: "品",
    readings: { onyomi: ["ヒン", "ホン"], kunyomi: ["しな"] },
    strokes: 9,
    examples: [
      { word: "品物", reading: "しなもの", sentence: "□物を買った。", blankIndex: 0 },
      { word: "作品", reading: "さくひん", sentence: "作□を展示した。", blankIndex: 1 },
    ],
  },
  {
    character: "不",
    readings: { onyomi: ["フ", "ブ"], kunyomi: [] },
    strokes: 4,
    examples: [
      { word: "不思議", reading: "ふしぎ", sentence: "□思議なことが起きた。", blankIndex: 0 },
      { word: "不安", reading: "ふあん", sentence: "□安に思った。", blankIndex: 0 },
    ],
  },
  {
    character: "負",
    readings: { onyomi: ["フ"], kunyomi: ["ま", "お"] },
    strokes: 9,
    examples: [
      { word: "負ける", reading: "まける", sentence: "試合で□けた。", blankIndex: 3 },
      { word: "負ける", reading: "まける", sentence: "試合で□けた。", blankIndex: 3 },
    ],
  },
  {
    character: "部",
    readings: { onyomi: ["ブ", "ホ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "部活", reading: "ぶかつ", sentence: "□活を頑張る。", blankIndex: 0 },
      { word: "部活", reading: "ぶかつ", sentence: "□活を頑張る。", blankIndex: 0 },
    ],
  },
  {
    character: "服",
    readings: { onyomi: ["フク"], kunyomi: [] },
    strokes: 8,
    examples: [
      { word: "服", reading: "ふく", sentence: "新しい□を着た。", blankIndex: 3 },
      { word: "制服", reading: "せいふく", sentence: "学校の制□だ。", blankIndex: 2 },
    ],
  },
  {
    character: "物",
    readings: { onyomi: ["ブツ", "モツ"], kunyomi: ["もの"] },
    strokes: 8,
    examples: [
      { word: "物語", reading: "ものがたり", sentence: "□語を読んだ。", blankIndex: 0 },
      { word: "荷物", reading: "にもつ", sentence: "荷□を運んだ。", blankIndex: 1 },
    ],
  },
  {
    character: "文",
    readings: { onyomi: ["ブン", "モン"], kunyomi: ["ふみ"] },
    strokes: 4,
    examples: [
      { word: "文章", reading: "ぶんしょう", sentence: "長い□章を書いた。", blankIndex: 0 },
      { word: "作文", reading: "さくぶん", sentence: "作□を書いた。", blankIndex: 1 },
    ],
  },
  {
    character: "平",
    readings: { onyomi: ["ヘイ", "ビョウ"], kunyomi: ["たい", "ひら"] },
    strokes: 5,
    examples: [
      { word: "平和", reading: "へいわ", sentence: "□和な世界にしたい。", blankIndex: 0 },
      { word: "平ら", reading: "たいら", sentence: "□らな土地に住む。", blankIndex: 0 },
    ],
  },
  {
    character: "返",
    readings: { onyomi: ["ヘン"], kunyomi: ["かえ"] },
    strokes: 7,
    examples: [
      { word: "返す", reading: "かえす", sentence: "本を□す。", blankIndex: 2 },
      { word: "返事", reading: "へんじ", sentence: "□事を書いた。", blankIndex: 0 },
    ],
  },
  {
    character: "勉",
    readings: { onyomi: ["ベン"], kunyomi: [] },
    strokes: 10,
    examples: [
      { word: "勉強", reading: "べんきょう", sentence: "□強している。", blankIndex: 0 },
      { word: "勉学", reading: "べんがく", sentence: "□学に励む。", blankIndex: 0 },
    ],
  },
  {
    character: "放",
    readings: { onyomi: ["ホウ"], kunyomi: ["はな", "はな"] },
    strokes: 8,
    examples: [
      { word: "放す", reading: "はなす", sentence: "鳥を□した。", blankIndex: 3 },
      { word: "放送", reading: "ほうそう", sentence: "テレビで□送された。", blankIndex: 2 },
    ],
  },
  {
    character: "味",
    readings: { onyomi: ["ミ"], kunyomi: ["あじ"] },
    strokes: 8,
    examples: [
      { word: "味", reading: "あじ", sentence: "いい□がする。", blankIndex: 2 },
      { word: "興味", reading: "きょうみ", sentence: "興□を持った。", blankIndex: 1 },
    ],
  },
  {
    character: "命",
    readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["いのち"] },
    strokes: 8,
    examples: [
      { word: "命", reading: "いのち", sentence: "□を大切に。", blankIndex: 0 },
      { word: "懸命", reading: "けんめい", sentence: "一生懸□に頑張った。", blankIndex: 3 },
    ],
  },
  {
    character: "面",
    readings: { onyomi: ["メン", "ベン"], kunyomi: ["おも", "つら"] },
    strokes: 9,
    examples: [
      { word: "面白い", reading: "おもしろい", sentence: "□白い話だ。", blankIndex: 0 },
      { word: "場面", reading: "ばめん", sentence: "感動の場□だ。", blankIndex: 2 },
    ],
  },
  {
    character: "問",
    readings: { onyomi: ["モン"], kunyomi: ["と"] },
    strokes: 11,
    examples: [
      { word: "問題", reading: "もんだい", sentence: "難しい□題だ。", blankIndex: 0 },
      { word: "質問", reading: "しつもん", sentence: "質□した。", blankIndex: 1 },
    ],
  },
  {
    character: "薬",
    readings: { onyomi: ["ヤク"], kunyomi: ["くすり"] },
    strokes: 16,
    examples: [
      { word: "薬", reading: "くすり", sentence: "□を飲んだ。", blankIndex: 0 },
      { word: "薬", reading: "くすり", sentence: "□を飲んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "由",
    readings: { onyomi: ["ユ", "ユウ", "ユイ"], kunyomi: ["よし"] },
    strokes: 5,
    examples: [
      { word: "自由", reading: "じゆう", sentence: "自□に遊ぶ。", blankIndex: 1 },
      { word: "理由", reading: "りゆう", sentence: "理□を言う。", blankIndex: 1 },
    ],
  },
  {
    character: "油",
    readings: { onyomi: ["ユ"], kunyomi: ["あぶら"] },
    strokes: 8,
    examples: [
      { word: "石油", reading: "せきゆ", sentence: "石□を燃やした。", blankIndex: 1 },
      { word: "油絵", reading: "あぶらえ", sentence: "□絵を描いた。", blankIndex: 0 },
    ],
  },
  {
    character: "有",
    readings: { onyomi: ["ユウ", "ウ"], kunyomi: ["あ"] },
    strokes: 6,
    examples: [
      { word: "有名", reading: "ゆうめい", sentence: "□名な人だ。", blankIndex: 0 },
      { word: "有利", reading: "ゆうり", sentence: "□利な立場だ。", blankIndex: 0 },
    ],
  },
  {
    character: "予",
    readings: { onyomi: ["ヨ"], kunyomi: ["あらかじ"] },
    strokes: 4,
    examples: [
      { word: "予定", reading: "よてい", sentence: "□定を立てた。", blankIndex: 0 },
      { word: "予習", reading: "よしゅう", sentence: "明日の授業を□習した。", blankIndex: 6 },
    ],
  },
  {
    character: "葉",
    readings: { onyomi: ["ヨウ"], kunyomi: ["は"] },
    strokes: 12,
    examples: [
      { word: "葉っぱ", reading: "はっぱ", sentence: "緑の□っぱだ。", blankIndex: 0 },
      { word: "紅葉", reading: "こうよう", sentence: "紅□がきれいだ。", blankIndex: 1 },
    ],
  },
  {
    character: "様",
    readings: { onyomi: ["ヨウ"], kunyomi: ["さま"] },
    strokes: 14,
    examples: [
      { word: "様子", reading: "ようす", sentence: "□子を見た。", blankIndex: 0 },
      { word: "お客様", reading: "おきゃくさま", sentence: "お客□がいらした。", blankIndex: 3 },
    ],
  },
  {
    character: "落",
    readings: { onyomi: ["ラク"], kunyomi: ["お"] },
    strokes: 12,
    examples: [
      { word: "落ちる", reading: "おちる", sentence: "木から□ちた。", blankIndex: 2 },
      { word: "落葉", reading: "らくよう", sentence: "□葉が風に舞う。", blankIndex: 0 },
    ],
  },
  {
    character: "流",
    readings: { onyomi: ["リュウ", "ル"], kunyomi: ["なが"] },
    strokes: 10,
    examples: [
      { word: "流れる", reading: "ながれる", sentence: "川が□れる。", blankIndex: 1 },
      { word: "流行", reading: "りゅうこう", sentence: "□行の曲だ。", blankIndex: 0 },
    ],
  },
  {
    character: "旅",
    readings: { onyomi: ["リョ"], kunyomi: ["たび"] },
    strokes: 10,
    examples: [
      { word: "旅行", reading: "りょこう", sentence: "□行に行く。", blankIndex: 0 },
      { word: "旅", reading: "たび", sentence: "長い□に出た。", blankIndex: 3 },
    ],
  },
  {
    character: "緑",
    readings: { onyomi: ["リョク", "ロク"], kunyomi: ["みどり"] },
    strokes: 14,
    examples: [
      { word: "緑", reading: "みどり", sentence: "□の葉が茂る。", blankIndex: 0 },
      { word: "緑地", reading: "りょくち", sentence: "□地を守る。", blankIndex: 0 },
    ],
  },
  {
    character: "礼",
    readings: { onyomi: ["レイ", "ライ"], kunyomi: [] },
    strokes: 5,
    examples: [
      { word: "礼", reading: "れい", sentence: "□を言った。", blankIndex: 0 },
      { word: "失礼", reading: "しつれい", sentence: "失□しました。", blankIndex: 1 },
    ],
  },
  {
    character: "列",
    readings: { onyomi: ["レツ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "列", reading: "れつ", sentence: "□に並んだ。", blankIndex: 0 },
      { word: "行列", reading: "ぎょうれつ", sentence: "長い行□だ。", blankIndex: 2 },
    ],
  },
  {
    character: "練",
    readings: { onyomi: ["レン"], kunyomi: ["ね"] },
    strokes: 14,
    examples: [
      { word: "練習", reading: "れんしゅう", sentence: "毎日□習する。", blankIndex: 0 },
      { word: "練る", reading: "ねる", sentence: "計画を□る。", blankIndex: 3 },
    ],
  },
  {
    character: "路",
    readings: { onyomi: ["ロ"], kunyomi: ["じ", "みち"] },
    strokes: 13,
    examples: [
      { word: "道路", reading: "どうろ", sentence: "広い道□を歩く。", blankIndex: 2 },
      { word: "線路", reading: "せんろ", sentence: "線□の近くに住む。", blankIndex: 1 },
    ],
  },
  {
    character: "和",
    readings: { onyomi: ["ワ", "オ"], kunyomi: ["やわ", "なご"] },
    strokes: 8,
    examples: [
      { word: "平和", reading: "へいわ", sentence: "平□を守る。", blankIndex: 1 },
      { word: "和食", reading: "わしょく", sentence: "□食が好きだ。", blankIndex: 0 },
    ],
  },
];
