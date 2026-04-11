import type { KanjiEntry } from "@/types/problem";

export const GRADE1_KANJI: KanjiEntry[] = [
  {
    character: "山",
    readings: { onyomi: ["サン"], kunyomi: ["やま"] },
    strokes: 3,
    examples: [
      { word: "山", reading: "やま", sentence: "高い□があります。", blankIndex: 3 },
      { word: "山川", reading: "やまかわ", sentence: "□川さんはやさしい。", blankIndex: 0 },
    ],
  },
  {
    character: "川",
    readings: { onyomi: ["セン"], kunyomi: ["かわ"] },
    strokes: 3,
    examples: [
      { word: "川", reading: "かわ", sentence: "きれいな□で魚が泳いでいる。", blankIndex: 5 },
      { word: "川口", reading: "かわぐち", sentence: "□口さんと遊んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "田",
    readings: { onyomi: ["デン"], kunyomi: ["た"] },
    strokes: 5,
    examples: [
      { word: "田", reading: "た", sentence: "お□んぼに水が入った。", blankIndex: 1 },
      { word: "田中", reading: "たなか", sentence: "□中先生がいる。", blankIndex: 0 },
    ],
  },
  {
    character: "木",
    readings: { onyomi: ["モク", "ボク"], kunyomi: ["き", "こ"] },
    strokes: 4,
    examples: [
      { word: "木", reading: "き", sentence: "大きな□の下で休む。", blankIndex: 4 },
      { word: "木曜日", reading: "もくようび", sentence: "今日は□曜日だ。", blankIndex: 3 },
    ],
  },
  {
    character: "火",
    readings: { onyomi: ["カ"], kunyomi: ["ひ"] },
    strokes: 4,
    examples: [
      { word: "火", reading: "ひ", sentence: "□がついている。", blankIndex: 0 },
      { word: "火曜日", reading: "かようび", sentence: "□曜日に体育がある。", blankIndex: 0 },
    ],
  },
  {
    character: "水",
    readings: { onyomi: ["スイ"], kunyomi: ["みず"] },
    strokes: 4,
    examples: [
      { word: "水", reading: "みず", sentence: "冷たい□を飲んだ。", blankIndex: 4 },
      { word: "水曜日", reading: "すいようび", sentence: "□曜日はプールだ。", blankIndex: 0 },
    ],
  },
  {
    character: "土",
    readings: { onyomi: ["ド", "ト"], kunyomi: ["つち"] },
    strokes: 3,
    examples: [
      { word: "土", reading: "つち", sentence: "□をほって虫を見つけた。", blankIndex: 0 },
      { word: "土曜日", reading: "どようび", sentence: "□曜日に野球をした。", blankIndex: 0 },
    ],
  },
  {
    character: "日",
    readings: { onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"] },
    strokes: 4,
    examples: [
      { word: "日", reading: "ひ", sentence: "朝、□がのぼる。", blankIndex: 2 },
      { word: "日曜日", reading: "にちようび", sentence: "□曜日に家族と出かけた。", blankIndex: 0 },
    ],
  },
  {
    character: "月",
    readings: { onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"] },
    strokes: 4,
    examples: [
      { word: "月", reading: "つき", sentence: "夜に□を見た。", blankIndex: 3 },
      { word: "月曜日", reading: "げつようび", sentence: "□曜日に学校が始まる。", blankIndex: 0 },
    ],
  },
  {
    character: "年",
    readings: { onyomi: ["ネン"], kunyomi: ["とし"] },
    strokes: 6,
    examples: [
      { word: "今年", reading: "ことし", sentence: "今□も元気でいたい。", blankIndex: 1 },
      { word: "一年生", reading: "いちねんせい", sentence: "私は一□生です。", blankIndex: 1 },
    ],
  },
  {
    character: "一",
    readings: { onyomi: ["イチ", "イツ"], kunyomi: ["ひと"] },
    strokes: 1,
    examples: [
      { word: "一つ", reading: "ひとつ", sentence: "りんごが□つある。", blankIndex: 4 },
      { word: "一番", reading: "いちばん", sentence: "□番好きな食べ物はカレーだ。", blankIndex: 0 },
    ],
  },
  {
    character: "二",
    readings: { onyomi: ["ニ"], kunyomi: ["ふた"] },
    strokes: 2,
    examples: [
      { word: "二つ", reading: "ふたつ", sentence: "みかんが□つある。", blankIndex: 4 },
      { word: "二年生", reading: "にねんせい", sentence: "お姉ちゃんは□年生だ。", blankIndex: 0 },
    ],
  },
  {
    character: "三",
    readings: { onyomi: ["サン"], kunyomi: ["み"] },
    strokes: 3,
    examples: [
      { word: "三角", reading: "さんかく", sentence: "□角形を書いた。", blankIndex: 0 },
      { word: "三角", reading: "さんかく", sentence: "□角形を書いた。", blankIndex: 0 },
    ],
  },
  {
    character: "四",
    readings: { onyomi: ["シ"], kunyomi: ["よん", "よ"] },
    strokes: 5,
    examples: [
      { word: "四角", reading: "しかく", sentence: "□角い紙を折った。", blankIndex: 0 },
      { word: "四角", reading: "しかく", sentence: "□角い紙を折った。", blankIndex: 0 },
    ],
  },
  {
    character: "五",
    readings: { onyomi: ["ゴ"], kunyomi: ["いつ"] },
    strokes: 4,
    examples: [
      { word: "五月", reading: "ごがつ", sentence: "□月に運動会がある。", blankIndex: 0 },
      { word: "五月", reading: "ごがつ", sentence: "□月に運動会がある。", blankIndex: 0 },
    ],
  },
  {
    character: "六",
    readings: { onyomi: ["ロク"], kunyomi: ["む"] },
    strokes: 4,
    examples: [
      { word: "六月", reading: "ろくがつ", sentence: "□月は梅雨だ。", blankIndex: 0 },
      { word: "六月", reading: "ろくがつ", sentence: "□月は梅雨だ。", blankIndex: 0 },
    ],
  },
  {
    character: "七",
    readings: { onyomi: ["シチ"], kunyomi: ["なな"] },
    strokes: 2,
    examples: [
      { word: "七つ", reading: "ななつ", sentence: "星が□つある。", blankIndex: 2 },
      { word: "七月", reading: "しちがつ", sentence: "□月は海に行く。", blankIndex: 0 },
    ],
  },
  {
    character: "八",
    readings: { onyomi: ["ハチ"], kunyomi: ["や"] },
    strokes: 2,
    examples: [
      { word: "八月", reading: "はちがつ", sentence: "□月は夏休みだ。", blankIndex: 0 },
      { word: "八月", reading: "はちがつ", sentence: "□月は夏休みだ。", blankIndex: 0 },
    ],
  },
  {
    character: "九",
    readings: { onyomi: ["キュウ", "ク"], kunyomi: ["ここの"] },
    strokes: 2,
    examples: [
      { word: "九つ", reading: "ここのつ", sentence: "ぶどうが□つある。", blankIndex: 4 },
      { word: "九月", reading: "くがつ", sentence: "□月に学校が始まる。", blankIndex: 0 },
    ],
  },
  {
    character: "十",
    readings: { onyomi: ["ジュウ"], kunyomi: ["とお"] },
    strokes: 2,
    examples: [
      { word: "十", reading: "じゅう", sentence: "あめが□こある。", blankIndex: 2 },
      { word: "十月", reading: "じゅうがつ", sentence: "□月は紅葉がきれいだ。", blankIndex: 0 },
    ],
  },
  {
    character: "百",
    readings: { onyomi: ["ヒャク"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "百", reading: "ひゃく", sentence: "□円のあめを買った。", blankIndex: 0 },
      { word: "百点", reading: "ひゃくてん", sentence: "テストで□点とった。", blankIndex: 4 },
    ],
  },
  {
    character: "千",
    readings: { onyomi: ["セン"], kunyomi: ["ち"] },
    strokes: 3,
    examples: [
      { word: "千", reading: "せん", sentence: "□円もっている。", blankIndex: 0 },
      { word: "千羽鶴", reading: "せんばづる", sentence: "□羽鶴を折った。", blankIndex: 0 },
    ],
  },
  {
    character: "人",
    readings: { onyomi: ["ジン", "ニン"], kunyomi: ["ひと"] },
    strokes: 2,
    examples: [
      { word: "人", reading: "ひと", sentence: "親切な□がいる。", blankIndex: 4 },
      { word: "人気", reading: "にんき", sentence: "□気のあるアイスを買った。", blankIndex: 0 },
    ],
  },
  {
    character: "子",
    readings: { onyomi: ["シ"], kunyomi: ["こ"] },
    strokes: 3,
    examples: [
      { word: "子ども", reading: "こども", sentence: "□どもが公園で遊ぶ。", blankIndex: 0 },
      { word: "女子", reading: "じょし", sentence: "女□がにこにこしている。", blankIndex: 1 },
    ],
  },
  {
    character: "女",
    readings: { onyomi: ["ジョ"], kunyomi: ["おんな"] },
    strokes: 3,
    examples: [
      { word: "女", reading: "おんな", sentence: "□の子が歌っている。", blankIndex: 0 },
      { word: "女王", reading: "じょおう", sentence: "□王様が来た。", blankIndex: 0 },
      { word: "女", reading: "おんな", sentence: "□の子のキャラクターをえらんだ。", blankIndex: 0 },
    ],
  },
  {
    character: "男",
    readings: { onyomi: ["ダン"], kunyomi: ["おとこ"] },
    strokes: 7,
    examples: [
      { word: "男", reading: "おとこ", sentence: "□の子が走っている。", blankIndex: 0 },
      { word: "男子", reading: "だんし", sentence: "□子がサッカーをしている。", blankIndex: 0 },
      { word: "男", reading: "おとこ", sentence: "□の子のキャラクターでゲームをした。", blankIndex: 0 },
    ],
  },
  {
    character: "学",
    readings: { onyomi: ["ガク"], kunyomi: ["まな"] },
    strokes: 8,
    examples: [
      { word: "学ぶ", reading: "まなぶ", sentence: "毎日一生けんめい□ぶ。", blankIndex: 8 },
      { word: "学ぶ", reading: "まなぶ", sentence: "毎日一生けんめい□ぶ。", blankIndex: 5 },
    ],
  },
  {
    character: "校",
    readings: { onyomi: ["コウ"], kunyomi: [] },
    strokes: 10,
    examples: [
      { word: "学校", reading: "がっこう", sentence: "学□は楽しい。", blankIndex: 1 },
      { word: "校長", reading: "こうちょう", sentence: "□長先生に会った。", blankIndex: 0 },
      { word: "学校", reading: "がっこう", sentence: "学□は楽しい。", blankIndex: 1 },
    ],
  },
  {
    character: "先",
    readings: { onyomi: ["セン"], kunyomi: ["さき"] },
    strokes: 6,
    examples: [
      { word: "先生", reading: "せんせい", sentence: "□生に質問した。", blankIndex: 0 },
      { word: "先", reading: "さき", sentence: "この道の□に公園がある。", blankIndex: 4 },
    ],
  },
  {
    character: "生",
    readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["い", "う", "なま"] },
    strokes: 5,
    examples: [
      { word: "先生", reading: "せんせい", sentence: "先□と話した。", blankIndex: 1 },
      { word: "生きる", reading: "いきる", sentence: "元気に□きたい。", blankIndex: 3 },
    ],
  },
  {
    character: "花",
    readings: { onyomi: ["カ"], kunyomi: ["はな"] },
    strokes: 7,
    examples: [
      { word: "花", reading: "はな", sentence: "きれいな□が咲いた。", blankIndex: 4 },
      { word: "花火", reading: "はなび", sentence: "夏に□火を見た。", blankIndex: 0 },
    ],
  },
  {
    character: "草",
    readings: { onyomi: ["ソウ"], kunyomi: ["くさ"] },
    strokes: 9,
    examples: [
      { word: "草", reading: "くさ", sentence: "野原に□が生えている。", blankIndex: 4 },
      { word: "草原", reading: "そうげん", sentence: "広い□原を走る。", blankIndex: 0 },
    ],
  },
  {
    character: "森",
    readings: { onyomi: ["シン"], kunyomi: ["もり"] },
    strokes: 12,
    examples: [
      { word: "森", reading: "もり", sentence: "深い□の中を歩く。", blankIndex: 3 },
      { word: "森林", reading: "しんりん", sentence: "□林を守ろう。", blankIndex: 0 },
    ],
  },
  {
    character: "林",
    readings: { onyomi: ["リン"], kunyomi: ["はやし"] },
    strokes: 8,
    examples: [
      { word: "林", reading: "はやし", sentence: "近くの□に行った。", blankIndex: 3 },
      { word: "林道", reading: "りんどう", sentence: "□道を自転車で走る。", blankIndex: 0 },
    ],
  },
  {
    character: "空",
    readings: { onyomi: ["クウ"], kunyomi: ["そら", "あ"] },
    strokes: 8,
    examples: [
      { word: "空", reading: "そら", sentence: "青い□を見上げた。", blankIndex: 3 },
      { word: "空気", reading: "くうき", sentence: "新鮮な□気を吸う。", blankIndex: 0 },
    ],
  },
  {
    character: "雨",
    readings: { onyomi: ["ウ"], kunyomi: ["あめ"] },
    strokes: 8,
    examples: [
      { word: "雨", reading: "あめ", sentence: "□が降ってきた。", blankIndex: 0 },
      { word: "雨天", reading: "うてん", sentence: "□天の場合は中止だ。", blankIndex: 0 },
    ],
  },
  {
    character: "気",
    readings: { onyomi: ["キ", "ケ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "元気", reading: "げんき", sentence: "今日も元□だ。", blankIndex: 2 },
      { word: "天気", reading: "てんき", sentence: "今日の天□はいい。", blankIndex: 3 },
    ],
  },
  {
    character: "天",
    readings: { onyomi: ["テン"], kunyomi: ["あめ", "あま"] },
    strokes: 4,
    examples: [
      { word: "天気", reading: "てんき", sentence: "□気がいい日だ。", blankIndex: 0 },
      { word: "天国", reading: "てんごく", sentence: "まるで□国みたいだ。", blankIndex: 2 },
    ],
  },
  {
    character: "石",
    readings: { onyomi: ["セキ"], kunyomi: ["いし"] },
    strokes: 5,
    examples: [
      { word: "石", reading: "いし", sentence: "きれいな□を拾った。", blankIndex: 4 },
      { word: "石", reading: "いし", sentence: "きれいな□を拾った。", blankIndex: 4 },
    ],
  },
  {
    character: "貝",
    readings: { onyomi: ["バイ"], kunyomi: ["かい"] },
    strokes: 7,
    examples: [
      { word: "貝", reading: "かい", sentence: "海で□を拾った。", blankIndex: 2 },
      { word: "貝殻", reading: "かいがら", sentence: "白い□殻だ。", blankIndex: 0 },
    ],
  },
  {
    character: "虫",
    readings: { onyomi: ["チュウ"], kunyomi: ["むし"] },
    strokes: 6,
    examples: [
      { word: "虫", reading: "むし", sentence: "草の中に□がいる。", blankIndex: 4 },
      { word: "虫眼鏡", reading: "むしめがね", sentence: "□眼鏡で見る。", blankIndex: 0 },
    ],
  },
  {
    character: "犬",
    readings: { onyomi: ["ケン"], kunyomi: ["いぬ"] },
    strokes: 4,
    examples: [
      { word: "犬", reading: "いぬ", sentence: "白い□が走っている。", blankIndex: 3 },
      { word: "子犬", reading: "こいぬ", sentence: "子□がかわいい。", blankIndex: 1 },
    ],
  },
  {
    character: "魚",
    readings: { onyomi: ["ギョ"], kunyomi: ["さかな", "うお"] },
    strokes: 11,
    examples: [
      { word: "魚", reading: "さかな", sentence: "川で□を釣った。", blankIndex: 2 },
      { word: "金魚", reading: "きんぎょ", sentence: "金□を飼っている。", blankIndex: 1 },
    ],
  },
  {
    character: "大",
    readings: { onyomi: ["ダイ", "タイ"], kunyomi: ["おお"] },
    strokes: 3,
    examples: [
      { word: "大きい", reading: "おおきい", sentence: "□きな木がある。", blankIndex: 0 },
      { word: "大切", reading: "たいせつ", sentence: "友達は□切だ。", blankIndex: 2 },
    ],
  },
  {
    character: "小",
    readings: { onyomi: ["ショウ"], kunyomi: ["ちい", "こ"] },
    strokes: 3,
    examples: [
      { word: "小さい", reading: "ちいさい", sentence: "□さな花が咲いた。", blankIndex: 0 },
      { word: "小学校", reading: "しょうがっこう", sentence: "□学校に入った。", blankIndex: 0 },
    ],
  },
  {
    character: "中",
    readings: { onyomi: ["チュウ"], kunyomi: ["なか"] },
    strokes: 4,
    examples: [
      { word: "中", reading: "なか", sentence: "箱の□に入れた。", blankIndex: 2 },
      { word: "中学校", reading: "ちゅうがっこう", sentence: "□学校の勉強は難しい。", blankIndex: 0 },
    ],
  },
  {
    character: "上",
    readings: { onyomi: ["ジョウ"], kunyomi: ["うえ", "あ"] },
    strokes: 3,
    examples: [
      { word: "上", reading: "うえ", sentence: "棚の□に本がある。", blankIndex: 2 },
      { word: "上手", reading: "じょうず", sentence: "絵が□手だね。", blankIndex: 1 },
    ],
  },
  {
    character: "下",
    readings: { onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ"] },
    strokes: 3,
    examples: [
      { word: "下", reading: "した", sentence: "机の□に入れた。", blankIndex: 2 },
      { word: "下", reading: "した", sentence: "机の□に入れた。", blankIndex: 2 },
    ],
  },
  {
    character: "右",
    readings: { onyomi: ["ウ", "ユウ"], kunyomi: ["みぎ"] },
    strokes: 5,
    examples: [
      { word: "右", reading: "みぎ", sentence: "□に曲がってください。", blankIndex: 0 },
      { word: "右手", reading: "みぎて", sentence: "□手でボールを投げる。", blankIndex: 0 },
    ],
  },
  {
    character: "左",
    readings: { onyomi: ["サ"], kunyomi: ["ひだり"] },
    strokes: 5,
    examples: [
      { word: "左", reading: "ひだり", sentence: "□に本がある。", blankIndex: 0 },
      { word: "左手", reading: "ひだりて", sentence: "□手で書いている。", blankIndex: 0 },
    ],
  },
  {
    character: "口",
    readings: { onyomi: ["コウ", "ク"], kunyomi: ["くち"] },
    strokes: 3,
    examples: [
      { word: "口", reading: "くち", sentence: "□を大きく開ける。", blankIndex: 0 },
      { word: "口", reading: "くち", sentence: "□を大きく開ける。", blankIndex: 0 },
    ],
  },
  {
    character: "手",
    readings: { onyomi: ["シュ"], kunyomi: ["て"] },
    strokes: 4,
    examples: [
      { word: "手", reading: "て", sentence: "□を洗う。", blankIndex: 0 },
      { word: "手紙", reading: "てがみ", sentence: "□紙を書いた。", blankIndex: 0 },
    ],
  },
  {
    character: "足",
    readings: { onyomi: ["ソク"], kunyomi: ["あし", "た"] },
    strokes: 7,
    examples: [
      { word: "足", reading: "あし", sentence: "□が速い子だ。", blankIndex: 0 },
      { word: "足し算", reading: "たしざん", sentence: "□し算をする。", blankIndex: 0 },
    ],
  },
  {
    character: "目",
    readings: { onyomi: ["モク", "ボク"], kunyomi: ["め"] },
    strokes: 5,
    examples: [
      { word: "目", reading: "め", sentence: "□を細めて見る。", blankIndex: 0 },
      { word: "目標", reading: "もくひょう", sentence: "□標を決めた。", blankIndex: 0 },
    ],
  },
  {
    character: "耳",
    readings: { onyomi: ["ジ"], kunyomi: ["みみ"] },
    strokes: 6,
    examples: [
      { word: "耳", reading: "みみ", sentence: "□をすまして聞く。", blankIndex: 0 },
      { word: "耳鼻科", reading: "じびか", sentence: "□鼻科に行った。", blankIndex: 0 },
    ],
  },
  {
    character: "力",
    readings: { onyomi: ["リョク", "リキ"], kunyomi: ["ちから"] },
    strokes: 2,
    examples: [
      { word: "力", reading: "ちから", sentence: "□いっぱい走った。", blankIndex: 0 },
      { word: "力持ち", reading: "ちからもち", sentence: "□持ちのお兄さんだ。", blankIndex: 0 },
    ],
  },
  {
    character: "見",
    readings: { onyomi: ["ケン"], kunyomi: ["み"] },
    strokes: 7,
    examples: [
      { word: "見る", reading: "みる", sentence: "テレビを□る。", blankIndex: 4 },
      { word: "見物", reading: "けんぶつ", sentence: "お祭りを□物した。", blankIndex: 5 },
    ],
  },
  {
    character: "村",
    readings: { onyomi: ["ソン"], kunyomi: ["むら"] },
    strokes: 7,
    examples: [
      { word: "村", reading: "むら", sentence: "山の中の□に住む。", blankIndex: 4 },
      { word: "農村", reading: "のうそん", sentence: "農□で育った。", blankIndex: 1 },
    ],
  },
  {
    character: "町",
    readings: { onyomi: ["チョウ"], kunyomi: ["まち"] },
    strokes: 7,
    examples: [
      { word: "町", reading: "まち", sentence: "にぎやかな□に住んでいる。", blankIndex: 6 },
      { word: "下町", reading: "したまち", sentence: "下□を歩いた。", blankIndex: 1 },
    ],
  },
  {
    character: "車",
    readings: { onyomi: ["シャ"], kunyomi: ["くるま"] },
    strokes: 7,
    examples: [
      { word: "車", reading: "くるま", sentence: "赤い□が走っている。", blankIndex: 3 },
      { word: "電車", reading: "でんしゃ", sentence: "電□で学校に行く。", blankIndex: 1 },
    ],
  },
  {
    character: "金",
    readings: { onyomi: ["キン", "コン"], kunyomi: ["かね", "かな"] },
    strokes: 8,
    examples: [
      { word: "金", reading: "かね", sentence: "お□を大切に使う。", blankIndex: 1 },
      { word: "金色", reading: "きんいろ", sentence: "□色の星が光る。", blankIndex: 0 },
    ],
  },
  {
    character: "白",
    readings: { onyomi: ["ハク", "ビャク"], kunyomi: ["しろ", "しら"] },
    strokes: 5,
    examples: [
      { word: "白", reading: "しろ", sentence: "□いうさぎがいる。", blankIndex: 0 },
      { word: "白紙", reading: "はくし", sentence: "□紙に絵を描く。", blankIndex: 0 },
    ],
  },
  {
    character: "赤",
    readings: { onyomi: ["セキ"], kunyomi: ["あか"] },
    strokes: 7,
    examples: [
      { word: "赤", reading: "あか", sentence: "□いリンゴを食べた。", blankIndex: 0 },
      { word: "赤ちゃん", reading: "あかちゃん", sentence: "□ちゃんがにっこり笑う。", blankIndex: 0 },
    ],
  },
  {
    character: "青",
    readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["あお"] },
    strokes: 8,
    examples: [
      { word: "青", reading: "あお", sentence: "□い空が広がる。", blankIndex: 0 },
      { word: "青信号", reading: "あおしんごう", sentence: "□信号で渡る。", blankIndex: 0 },
    ],
  },
  {
    character: "雪",
    readings: { onyomi: ["セツ"], kunyomi: ["ゆき"] },
    strokes: 11,
    examples: [
      { word: "雪", reading: "ゆき", sentence: "白い□が降ってきた。", blankIndex: 3 },
      { word: "雪だるま", reading: "ゆきだるま", sentence: "□だるまを作った。", blankIndex: 0 },
    ],
  },
  {
    character: "王",
    readings: { onyomi: ["オウ"], kunyomi: ["おう"] },
    strokes: 4,
    examples: [
      { word: "王様", reading: "おうさま", sentence: "□様が命令した。", blankIndex: 0 },
      { word: "女王", reading: "じょおう", sentence: "女□が登場した。", blankIndex: 1 },
    ],
  },
  {
    character: "玉",
    readings: { onyomi: ["ギョク"], kunyomi: ["たま"] },
    strokes: 5,
    examples: [
      { word: "玉", reading: "たま", sentence: "きれいな□を拾った。", blankIndex: 4 },
      { word: "水玉", reading: "みずたま", sentence: "水□もようのシャツだ。", blankIndex: 1 },
    ],
  },
  {
    character: "正",
    readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["ただ", "まさ"] },
    strokes: 5,
    examples: [
      { word: "正しい", reading: "ただしい", sentence: "□しい答えを書く。", blankIndex: 0 },
      { word: "正解", reading: "せいかい", sentence: "□解できた！", blankIndex: 0 },
    ],
  },
  {
    character: "本",
    readings: { onyomi: ["ホン"], kunyomi: ["もと"] },
    strokes: 5,
    examples: [
      { word: "本", reading: "ほん", sentence: "図書館で□を読む。", blankIndex: 4 },
      { word: "本当", reading: "ほんとう", sentence: "□当のことを話す。", blankIndex: 0 },
    ],
  },
  {
    character: "文",
    readings: { onyomi: ["ブン", "モン"], kunyomi: ["ふみ"] },
    strokes: 4,
    examples: [
      { word: "作文", reading: "さくぶん", sentence: "作□を書いた。", blankIndex: 1 },
      { word: "作文", reading: "さくぶん", sentence: "作□を書いた。", blankIndex: 1 },
    ],
  },
  {
    character: "字",
    readings: { onyomi: ["ジ"], kunyomi: ["あざ"] },
    strokes: 6,
    examples: [
      { word: "文字", reading: "もじ", sentence: "文□を丁寧に書く。", blankIndex: 1 },
      { word: "漢字", reading: "かんじ", sentence: "漢□を覚えた。", blankIndex: 1 },
    ],
  },
  {
    character: "竹",
    readings: { onyomi: ["チク"], kunyomi: ["たけ"] },
    strokes: 6,
    examples: [
      { word: "竹", reading: "たけ", sentence: "高い□が生えている。", blankIndex: 3 },
      { word: "竹馬", reading: "たけうま", sentence: "□馬で遊んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "糸",
    readings: { onyomi: ["シ"], kunyomi: ["いと"] },
    strokes: 6,
    examples: [
      { word: "糸", reading: "いと", sentence: "□で縫い合わせた。", blankIndex: 0 },
      { word: "毛糸", reading: "けいと", sentence: "毛□でマフラーを作る。", blankIndex: 1 },
    ],
  },
  {
    character: "音",
    readings: { onyomi: ["オン", "イン"], kunyomi: ["おと", "ね"] },
    strokes: 9,
    examples: [
      { word: "音楽", reading: "おんがく", sentence: "□楽が好きだ。", blankIndex: 0 },
      { word: "音", reading: "おと", sentence: "不思議な□が聞こえた。", blankIndex: 5 },
    ],
  },
  {
    character: "名",
    readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["な"] },
    strokes: 6,
    examples: [
      { word: "名前", reading: "なまえ", sentence: "□前を教えてください。", blankIndex: 0 },
      { word: "有名", reading: "ゆうめい", sentence: "有□な歌手だ。", blankIndex: 1 },
    ],
  },
  {
    character: "早",
    readings: { onyomi: ["ソウ"], kunyomi: ["はや"] },
    strokes: 6,
    examples: [
      { word: "早い", reading: "はやい", sentence: "□く起きた。", blankIndex: 0 },
      { word: "早起き", reading: "はやおき", sentence: "□起きは三文の得だ。", blankIndex: 0 },
    ],
  },
  {
    character: "立",
    readings: { onyomi: ["リツ", "リュウ"], kunyomi: ["た"] },
    strokes: 5,
    examples: [
      { word: "立つ", reading: "たつ", sentence: "椅子から□って挨拶した。", blankIndex: 6 },
      { word: "立場", reading: "たちば", sentence: "自分の□場を守る。", blankIndex: 2 },
    ],
  },
  {
    character: "出",
    readings: { onyomi: ["シュツ", "スイ"], kunyomi: ["で", "だ"] },
    strokes: 5,
    examples: [
      { word: "出る", reading: "でる", sentence: "家から□る。", blankIndex: 2 },
      { word: "出口", reading: "でぐち", sentence: "□口から外へ出た。", blankIndex: 0 },
    ],
  },
  {
    character: "入",
    readings: { onyomi: ["ニュウ"], kunyomi: ["い", "はい"] },
    strokes: 2,
    examples: [
      { word: "入る", reading: "はいる", sentence: "部屋に□る。", blankIndex: 3 },
      { word: "入る", reading: "はいる", sentence: "部屋に□る。", blankIndex: 3 },
    ],
  },
];
