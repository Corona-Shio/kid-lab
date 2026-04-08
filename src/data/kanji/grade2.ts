import type { KanjiEntry } from "@/types/problem";

// 2年生配当漢字（160字）から代表的な字を収録
export const GRADE2_KANJI: KanjiEntry[] = [
  {
    character: "回",
    readings: { onyomi: ["カイ", "エ"], kunyomi: ["まわ"] },
    strokes: 6,
    examples: [
      { word: "回る", reading: "まわる", sentence: "コマが□る。", blankIndex: 2 },
      { word: "回数", reading: "かいすう", sentence: "□数を数える。", blankIndex: 0 },
      { word: "回る", reading: "まわる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "海",
    readings: { onyomi: ["カイ"], kunyomi: ["うみ"] },
    strokes: 9,
    examples: [
      { word: "海", reading: "うみ", sentence: "夏に□へ行った。", blankIndex: 3 },
      { word: "海外", reading: "かいがい", sentence: "□外旅行が夢だ。", blankIndex: 0 },
      { word: "海外", reading: "かいがい", sentence: "マインクラフトで□外をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "絵",
    readings: { onyomi: ["カイ", "エ"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "絵", reading: "え", sentence: "きれいな□を描いた。", blankIndex: 4 },
      { word: "絵本", reading: "えほん", sentence: "□本を読んだ。", blankIndex: 0 },
      { word: "絵本", reading: "えほん", sentence: "ロブロックスで□本をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "歌",
    readings: { onyomi: ["カ"], kunyomi: ["うた"] },
    strokes: 14,
    examples: [
      { word: "歌う", reading: "うたう", sentence: "大きな声で□う。", blankIndex: 7 },
      { word: "歌手", reading: "かしゅ", sentence: "有名な□手になりたい。", blankIndex: 0 },
      { word: "歌う", reading: "うたう", sentence: "カービィのれーすで□うをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "家",
    readings: { onyomi: ["カ", "ケ"], kunyomi: ["いえ", "うち"] },
    strokes: 10,
    examples: [
      { word: "家", reading: "いえ", sentence: "大きな□に住んでいる。", blankIndex: 3 },
      { word: "家族", reading: "かぞく", sentence: "□族でピクニックに行く。", blankIndex: 0 },
      { word: "家族", reading: "かぞく", sentence: "マインクラフトで□族をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "科",
    readings: { onyomi: ["カ"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "理科", reading: "りか", sentence: "理□の実験は楽しい。", blankIndex: 1 },
      { word: "科目", reading: "かもく", sentence: "好きな□目は算数だ。", blankIndex: 0 },
      { word: "理科", reading: "りか", sentence: "ロブロックスで理□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "夏",
    readings: { onyomi: ["カ", "ゲ"], kunyomi: ["なつ"] },
    strokes: 10,
    examples: [
      { word: "夏", reading: "なつ", sentence: "□は暑い。", blankIndex: 0 },
      { word: "夏休み", reading: "なつやすみ", sentence: "□休みが楽しみだ。", blankIndex: 0 },
      { word: "夏休み", reading: "なつやすみ", sentence: "カービィのれーすで□休みをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "活",
    readings: { onyomi: ["カツ"], kunyomi: ["い"] },
    strokes: 9,
    examples: [
      { word: "生活", reading: "せいかつ", sentence: "毎日の生□を大切に。", blankIndex: 2 },
      { word: "活動", reading: "かつどう", sentence: "クラブ□動をする。", blankIndex: 2 },
      { word: "生活", reading: "せいかつ", sentence: "マインクラフトで生□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "間",
    readings: { onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"] },
    strokes: 12,
    examples: [
      { word: "時間", reading: "じかん", sentence: "時□があれば遊ぼう。", blankIndex: 1 },
      { word: "間", reading: "あいだ", sentence: "木と木の□に入る。", blankIndex: 6 },
      { word: "時間", reading: "じかん", sentence: "ロブロックスで時□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "丸",
    readings: { onyomi: ["ガン"], kunyomi: ["まる"] },
    strokes: 3,
    examples: [
      { word: "丸い", reading: "まるい", sentence: "□いボールを投げた。", blankIndex: 0 },
      { word: "丸", reading: "まる", sentence: "○を□という。", blankIndex: 1 },
      { word: "丸い", reading: "まるい", sentence: "カービィのれーすで□いをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "岩",
    readings: { onyomi: ["ガン"], kunyomi: ["いわ"] },
    strokes: 8,
    examples: [
      { word: "岩", reading: "いわ", sentence: "大きな□の上に乗った。", blankIndex: 4 },
      { word: "岩山", reading: "いわやま", sentence: "□山を登った。", blankIndex: 0 },
      { word: "岩山", reading: "いわやま", sentence: "マインクラフトで□山をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "記",
    readings: { onyomi: ["キ"], kunyomi: ["しる"] },
    strokes: 10,
    examples: [
      { word: "日記", reading: "にっき", sentence: "毎日日□をつける。", blankIndex: 2 },
      { word: "記念", reading: "きねん", sentence: "□念写真を撮った。", blankIndex: 0 },
      { word: "日記", reading: "にっき", sentence: "ロブロックスで日□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "帰",
    readings: { onyomi: ["キ"], kunyomi: ["かえ"] },
    strokes: 10,
    examples: [
      { word: "帰る", reading: "かえる", sentence: "早く家に□る。", blankIndex: 4 },
      { word: "帰国", reading: "きこく", sentence: "□国して家族に会う。", blankIndex: 0 },
      { word: "帰る", reading: "かえる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "牛",
    readings: { onyomi: ["ギュウ"], kunyomi: ["うし"] },
    strokes: 4,
    examples: [
      { word: "牛", reading: "うし", sentence: "□が草を食べている。", blankIndex: 0 },
      { word: "牛乳", reading: "ぎゅうにゅう", sentence: "毎朝□乳を飲む。", blankIndex: 0 },
      { word: "牛乳", reading: "ぎゅうにゅう", sentence: "マインクラフトで□乳をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "強",
    readings: { onyomi: ["キョウ"], kunyomi: ["つよ"] },
    strokes: 11,
    examples: [
      { word: "強い", reading: "つよい", sentence: "□い風が吹いた。", blankIndex: 0 },
      { word: "勉強", reading: "べんきょう", sentence: "毎日勉□している。", blankIndex: 2 },
      { word: "強い", reading: "つよい", sentence: "ロブロックスで□いをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "教",
    readings: { onyomi: ["キョウ"], kunyomi: ["おし", "おそ"] },
    strokes: 11,
    examples: [
      { word: "教える", reading: "おしえる", sentence: "友達に□えてあげた。", blankIndex: 2 },
      { word: "教室", reading: "きょうしつ", sentence: "□室に戻った。", blankIndex: 0 },
      { word: "教える", reading: "おしえる", sentence: "カービィのれーすで□えるをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "近",
    readings: { onyomi: ["キン"], kunyomi: ["ちか"] },
    strokes: 7,
    examples: [
      { word: "近い", reading: "ちかい", sentence: "駅が□い場所に住む。", blankIndex: 2 },
      { word: "近所", reading: "きんじょ", sentence: "□所の人と仲良くする。", blankIndex: 0 },
      { word: "近い", reading: "ちかい", sentence: "マインクラフトで□いをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "兄",
    readings: { onyomi: ["ケイ", "キョウ"], kunyomi: ["あに"] },
    strokes: 5,
    examples: [
      { word: "兄弟", reading: "きょうだい", sentence: "□弟で仲良くする。", blankIndex: 0 },
      { word: "兄弟", reading: "きょうだい", sentence: "□弟で仲良くする。", blankIndex: 0 },
      { word: "兄弟", reading: "きょうだい", sentence: "ロブロックスで□弟をれんしゅうした。", blankIndex: 7 },
    ],
  },
  {
    character: "形",
    readings: { onyomi: ["ケイ", "ギョウ"], kunyomi: ["かたち"] },
    strokes: 7,
    examples: [
      { word: "形", reading: "かたち", sentence: "丸い□の石を拾った。", blankIndex: 3 },
      { word: "人形", reading: "にんぎょう", sentence: "かわいい人□を買った。", blankIndex: 2 },
      { word: "人形", reading: "にんぎょう", sentence: "カービィのれーすで人□をつかった。", blankIndex: 10 },
    ],
  },
  {
    character: "計",
    readings: { onyomi: ["ケイ"], kunyomi: ["はか"] },
    strokes: 9,
    examples: [
      { word: "時計", reading: "とけい", sentence: "時□を見て時間を確認する。", blankIndex: 1 },
      { word: "計算", reading: "けいさん", sentence: "□算が得意だ。", blankIndex: 0 },
      { word: "時計", reading: "とけい", sentence: "マインクラフトで時□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "元",
    readings: { onyomi: ["ゲン", "ガン"], kunyomi: ["もと"] },
    strokes: 4,
    examples: [
      { word: "元気", reading: "げんき", sentence: "今日も□気だ。", blankIndex: 2 },
      { word: "元", reading: "もと", sentence: "□の場所に戻した。", blankIndex: 0 },
      { word: "元気", reading: "げんき", sentence: "ロブロックスで□気をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "言",
    readings: { onyomi: ["ゲン", "ゴン"], kunyomi: ["い", "こと"] },
    strokes: 7,
    examples: [
      { word: "言葉", reading: "ことば", sentence: "やさしい□葉をかけた。", blankIndex: 0 },
      { word: "言う", reading: "いう", sentence: "ありがとうと□う。", blankIndex: 6 },
      { word: "言葉", reading: "ことば", sentence: "カービィのれーすで□葉をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "古",
    readings: { onyomi: ["コ"], kunyomi: ["ふる"] },
    strokes: 5,
    examples: [
      { word: "古い", reading: "ふるい", sentence: "□い本が出てきた。", blankIndex: 0 },
      { word: "古代", reading: "こだい", sentence: "□代の遺跡を見た。", blankIndex: 0 },
      { word: "古い", reading: "ふるい", sentence: "マインクラフトで□いをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "語",
    readings: { onyomi: ["ゴ"], kunyomi: ["かた"] },
    strokes: 14,
    examples: [
      { word: "国語", reading: "こくご", sentence: "国□のテストがある。", blankIndex: 1 },
      { word: "国語", reading: "こくご", sentence: "国□のテストがある。", blankIndex: 1 },
      { word: "国語", reading: "こくご", sentence: "ロブロックスで国□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "工",
    readings: { onyomi: ["コウ", "ク"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "工作", reading: "こうさく", sentence: "□作でおもちゃを作った。", blankIndex: 0 },
      { word: "工場", reading: "こうじょう", sentence: "車の□場に行った。", blankIndex: 1 },
      { word: "工作", reading: "こうさく", sentence: "カービィのれーすで□作をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "公",
    readings: { onyomi: ["コウ"], kunyomi: ["おおやけ"] },
    strokes: 4,
    examples: [
      { word: "公園", reading: "こうえん", sentence: "□園で遊んだ。", blankIndex: 0 },
      { word: "公共", reading: "こうきょう", sentence: "□共の場所を大切に。", blankIndex: 0 },
      { word: "公園", reading: "こうえん", sentence: "マインクラフトで□園をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "今",
    readings: { onyomi: ["コン", "キン"], kunyomi: ["いま"] },
    strokes: 4,
    examples: [
      { word: "今", reading: "いま", sentence: "□ははれるかな。", blankIndex: 0 },
      { word: "今", reading: "いま", sentence: "□から始めよう。", blankIndex: 0 },
      { word: "今", reading: "いま", sentence: "ロブロックスで□からすたーとした。", blankIndex: 8 },
    ],
  },
  {
    character: "才",
    readings: { onyomi: ["サイ"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "七才", reading: "ななさい", sentence: "七□になった。", blankIndex: 1 },
      { word: "天才", reading: "てんさい", sentence: "天□だとほめられた。", blankIndex: 1 },
      { word: "七才", reading: "ななさい", sentence: "カービィのれーすで七□をつかった。", blankIndex: 10 },
    ],
  },
  {
    character: "作",
    readings: { onyomi: ["サク", "サ"], kunyomi: ["つく"] },
    strokes: 7,
    examples: [
      { word: "作る", reading: "つくる", sentence: "ケーキを□る。", blankIndex: 4 },
      { word: "作品", reading: "さくひん", sentence: "すてきな□品が完成した。", blankIndex: 0 },
      { word: "作る", reading: "つくる", sentence: "マインクラフトで□るをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "算",
    readings: { onyomi: ["サン"], kunyomi: [] },
    strokes: 14,
    examples: [
      { word: "算数", reading: "さんすう", sentence: "□数が好きだ。", blankIndex: 0 },
      { word: "計算", reading: "けいさん", sentence: "計□が得意だ。", blankIndex: 1 },
      { word: "算数", reading: "さんすう", sentence: "ロブロックスで□数をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "思",
    readings: { onyomi: ["シ"], kunyomi: ["おも"] },
    strokes: 9,
    examples: [
      { word: "思う", reading: "おもう", sentence: "楽しいと□う。", blankIndex: 4 },
      { word: "思い出", reading: "おもいで", sentence: "大切な□い出がある。", blankIndex: 0 },
      { word: "思う", reading: "おもう", sentence: "カービィのれーすで□うをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "紙",
    readings: { onyomi: ["シ"], kunyomi: ["かみ"] },
    strokes: 10,
    examples: [
      { word: "紙", reading: "かみ", sentence: "白い□に絵を描く。", blankIndex: 3 },
      { word: "紙", reading: "かみ", sentence: "白い□に絵を描く。", blankIndex: 2 },
      { word: "紙", reading: "かみ", sentence: "マインクラフトで□をれんしゅうした。", blankIndex: 8 },
    ],
  },
  {
    character: "寺",
    readings: { onyomi: ["ジ"], kunyomi: ["てら"] },
    strokes: 6,
    examples: [
      { word: "お寺", reading: "おてら", sentence: "古いお□に行った。", blankIndex: 2 },
      { word: "寺院", reading: "じいん", sentence: "有名な□院を見学した。", blankIndex: 0 },
      { word: "お寺", reading: "おてら", sentence: "ロブロックスでお□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "時",
    readings: { onyomi: ["ジ"], kunyomi: ["とき"] },
    strokes: 10,
    examples: [
      { word: "時間", reading: "じかん", sentence: "□間を守る。", blankIndex: 0 },
      { word: "時間", reading: "じかん", sentence: "□間を守る。", blankIndex: 0 },
      { word: "時間", reading: "じかん", sentence: "カービィのれーすで□間をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "自",
    readings: { onyomi: ["ジ", "シ"], kunyomi: ["みずか"] },
    strokes: 6,
    examples: [
      { word: "自分", reading: "じぶん", sentence: "□分でやってみる。", blankIndex: 0 },
      { word: "自由", reading: "じゆう", sentence: "□由に遊ぶ。", blankIndex: 0 },
      { word: "自分", reading: "じぶん", sentence: "マインクラフトで□分をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "室",
    readings: { onyomi: ["シツ"], kunyomi: ["むろ"] },
    strokes: 9,
    examples: [
      { word: "教室", reading: "きょうしつ", sentence: "教□に入る。", blankIndex: 1 },
      { word: "図書室", reading: "としょしつ", sentence: "図書□で本を借りた。", blankIndex: 2 },
      { word: "教室", reading: "きょうしつ", sentence: "ロブロックスで教□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "社",
    readings: { onyomi: ["シャ"], kunyomi: ["やしろ"] },
    strokes: 7,
    examples: [
      { word: "会社", reading: "かいしゃ", sentence: "お父さんは会□で働く。", blankIndex: 2 },
      { word: "会社", reading: "かいしゃ", sentence: "お父さんは会□で働く。", blankIndex: 6 },
      { word: "会社", reading: "かいしゃ", sentence: "カービィのれーすで会□をつかった。", blankIndex: 10 },
    ],
  },
  {
    character: "弱",
    readings: { onyomi: ["ジャク"], kunyomi: ["よわ"] },
    strokes: 10,
    examples: [
      { word: "弱い", reading: "よわい", sentence: "体が□い時は休む。", blankIndex: 2 },
      { word: "弱点", reading: "じゃくてん", sentence: "□点を克服する。", blankIndex: 0 },
      { word: "弱い", reading: "よわい", sentence: "マインクラフトで□いをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "首",
    readings: { onyomi: ["シュ"], kunyomi: ["くび"] },
    strokes: 9,
    examples: [
      { word: "首", reading: "くび", sentence: "□を長くして待つ。", blankIndex: 0 },
      { word: "首都", reading: "しゅと", sentence: "日本の□都は東京だ。", blankIndex: 0 },
      { word: "首都", reading: "しゅと", sentence: "ロブロックスで□都をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "春",
    readings: { onyomi: ["シュン"], kunyomi: ["はる"] },
    strokes: 9,
    examples: [
      { word: "春", reading: "はる", sentence: "□になると花が咲く。", blankIndex: 0 },
      { word: "春休み", reading: "はるやすみ", sentence: "□休みに旅行した。", blankIndex: 0 },
      { word: "春休み", reading: "はるやすみ", sentence: "カービィのれーすで□休みをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "書",
    readings: { onyomi: ["ショ"], kunyomi: ["か"] },
    strokes: 10,
    examples: [
      { word: "書く", reading: "かく", sentence: "日記を□く。", blankIndex: 3 },
      { word: "図書館", reading: "としょかん", sentence: "図□館で勉強する。", blankIndex: 1 },
      { word: "書く", reading: "かく", sentence: "マインクラフトで□くをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "少",
    readings: { onyomi: ["ショウ"], kunyomi: ["すく", "すこ"] },
    strokes: 4,
    examples: [
      { word: "少ない", reading: "すくない", sentence: "時間が□ない。", blankIndex: 3 },
      { word: "少し", reading: "すこし", sentence: "□し待ってください。", blankIndex: 0 },
      { word: "少ない", reading: "すくない", sentence: "ロブロックスで□ないをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "食",
    readings: { onyomi: ["ショク"], kunyomi: ["た", "く"] },
    strokes: 9,
    examples: [
      { word: "食べる", reading: "たべる", sentence: "ごはんを□べる。", blankIndex: 4 },
      { word: "食事", reading: "しょくじ", sentence: "楽しい□事の時間だ。", blankIndex: 0 },
      { word: "食べる", reading: "たべる", sentence: "カービィのれーすで□べるをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "新",
    readings: { onyomi: ["シン"], kunyomi: ["あたら", "あら"] },
    strokes: 13,
    examples: [
      { word: "新しい", reading: "あたらしい", sentence: "□しい本を買った。", blankIndex: 0 },
      { word: "新幹線", reading: "しんかんせん", sentence: "□幹線に乗った。", blankIndex: 0 },
      { word: "新しい", reading: "あたらしい", sentence: "マインクラフトで□しいをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "親",
    readings: { onyomi: ["シン"], kunyomi: ["おや", "した"] },
    strokes: 16,
    examples: [
      { word: "親", reading: "おや", sentence: "□を大切にする。", blankIndex: 0 },
      { word: "親切", reading: "しんせつ", sentence: "□切にしてくれた。", blankIndex: 0 },
      { word: "親切", reading: "しんせつ", sentence: "ロブロックスで□切をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "数",
    readings: { onyomi: ["スウ", "ス"], kunyomi: ["かず", "かぞ"] },
    strokes: 13,
    examples: [
      { word: "数える", reading: "かぞえる", sentence: "豆を□える。", blankIndex: 1 },
      { word: "算数", reading: "さんすう", sentence: "算□が好きだ。", blankIndex: 1 },
      { word: "数える", reading: "かぞえる", sentence: "カービィのれーすで□えるをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "晴",
    readings: { onyomi: ["セイ"], kunyomi: ["は"] },
    strokes: 12,
    examples: [
      { word: "晴れ", reading: "はれ", sentence: "今日は□れだ。", blankIndex: 3 },
      { word: "晴天", reading: "せいてん", sentence: "□天の運動会だった。", blankIndex: 0 },
      { word: "晴れ", reading: "はれ", sentence: "マインクラフトで□れをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "切",
    readings: { onyomi: ["セツ"], kunyomi: ["き", "きれ"] },
    strokes: 4,
    examples: [
      { word: "切る", reading: "きる", sentence: "はさみで□る。", blankIndex: 5 },
      { word: "大切", reading: "たいせつ", sentence: "友達は大□だ。", blankIndex: 2 },
      { word: "切る", reading: "きる", sentence: "ロブロックスで□るをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "雪",
    readings: { onyomi: ["セツ"], kunyomi: ["ゆき"] },
    strokes: 11,
    examples: [
      { word: "雪", reading: "ゆき", sentence: "白い□が降った。", blankIndex: 3 },
      { word: "雪だるま", reading: "ゆきだるま", sentence: "□だるまを作った。", blankIndex: 0 },
      { word: "雪だるま", reading: "ゆきだるま", sentence: "カービィのれーすで□だるまをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "線",
    readings: { onyomi: ["セン"], kunyomi: ["すじ"] },
    strokes: 15,
    examples: [
      { word: "直線", reading: "ちょくせん", sentence: "直□を引いた。", blankIndex: 1 },
      { word: "線路", reading: "せんろ", sentence: "□路の近くに住む。", blankIndex: 0 },
      { word: "直線", reading: "ちょくせん", sentence: "マインクラフトで直□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "船",
    readings: { onyomi: ["セン"], kunyomi: ["ふね"] },
    strokes: 11,
    examples: [
      { word: "船", reading: "ふね", sentence: "大きな□に乗った。", blankIndex: 3 },
      { word: "船", reading: "ふね", sentence: "大きな□に乗った。", blankIndex: 3 },
      { word: "船", reading: "ふね", sentence: "ロブロックスで□をれんしゅうした。", blankIndex: 7 },
    ],
  },
  {
    character: "走",
    readings: { onyomi: ["ソウ"], kunyomi: ["はし"] },
    strokes: 7,
    examples: [
      { word: "走る", reading: "はしる", sentence: "全力で□る。", blankIndex: 3 },
      { word: "走行", reading: "そうこう", sentence: "電車が□行している。", blankIndex: 0 },
      { word: "走る", reading: "はしる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "体",
    readings: { onyomi: ["タイ", "テイ"], kunyomi: ["からだ"] },
    strokes: 7,
    examples: [
      { word: "体", reading: "からだ", sentence: "□を動かして遊ぶ。", blankIndex: 0 },
      { word: "体育", reading: "たいいく", sentence: "□育の授業が好きだ。", blankIndex: 0 },
      { word: "体育", reading: "たいいく", sentence: "マインクラフトで□育をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "台",
    readings: { onyomi: ["ダイ", "タイ"], kunyomi: [] },
    strokes: 5,
    examples: [
      { word: "台所", reading: "だいどころ", sentence: "□所でお母さんが料理する。", blankIndex: 0 },
      { word: "台風", reading: "たいふう", sentence: "大きな□風が来た。", blankIndex: 0 },
      { word: "台所", reading: "だいどころ", sentence: "ロブロックスで□所をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "地",
    readings: { onyomi: ["チ", "ジ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "地図", reading: "ちず", sentence: "□図を見て道を確認した。", blankIndex: 0 },
      { word: "地球", reading: "ちきゅう", sentence: "□球は丸い。", blankIndex: 0 },
      { word: "地図", reading: "ちず", sentence: "カービィのれーすで□図をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "池",
    readings: { onyomi: ["チ"], kunyomi: ["いけ"] },
    strokes: 6,
    examples: [
      { word: "池", reading: "いけ", sentence: "□に魚がいる。", blankIndex: 0 },
      { word: "電池", reading: "でんち", sentence: "電□が切れた。", blankIndex: 1 },
      { word: "電池", reading: "でんち", sentence: "マインクラフトで電□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "知",
    readings: { onyomi: ["チ"], kunyomi: ["し"] },
    strokes: 8,
    examples: [
      { word: "知る", reading: "しる", sentence: "答えを□っている。", blankIndex: 3 },
      { word: "知識", reading: "ちしき", sentence: "□識を増やす。", blankIndex: 0 },
      { word: "知る", reading: "しる", sentence: "ロブロックスで□るをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "昼",
    readings: { onyomi: ["チュウ"], kunyomi: ["ひる"] },
    strokes: 9,
    examples: [
      { word: "昼", reading: "ひる", sentence: "□ごはんはカレーだ。", blankIndex: 0 },
      { word: "昼食", reading: "ちゅうしょく", sentence: "□食を食べた。", blankIndex: 0 },
      { word: "昼食", reading: "ちゅうしょく", sentence: "カービィのれーすで□食をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "長",
    readings: { onyomi: ["チョウ"], kunyomi: ["なが"] },
    strokes: 8,
    examples: [
      { word: "長い", reading: "ながい", sentence: "□い道を歩いた。", blankIndex: 0 },
      { word: "身長", reading: "しんちょう", sentence: "身□が伸びた。", blankIndex: 1 },
      { word: "長い", reading: "ながい", sentence: "マインクラフトで□いをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "朝",
    readings: { onyomi: ["チョウ"], kunyomi: ["あさ"] },
    strokes: 12,
    examples: [
      { word: "朝", reading: "あさ", sentence: "□早く起きた。", blankIndex: 0 },
      { word: "朝", reading: "あさ", sentence: "□早く起きた。", blankIndex: 0 },
      { word: "朝", reading: "あさ", sentence: "ロブロックスで□をれんしゅうした。", blankIndex: 7 },
    ],
  },
  {
    character: "通",
    readings: { onyomi: ["ツウ", "ツ"], kunyomi: ["とお", "かよ"] },
    strokes: 10,
    examples: [
      { word: "通る", reading: "とおる", sentence: "橋を□る。", blankIndex: 2 },
      { word: "交通", reading: "こうつう", sentence: "交□ルールを守る。", blankIndex: 1 },
      { word: "通る", reading: "とおる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "電",
    readings: { onyomi: ["デン"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "電車", reading: "でんしゃ", sentence: "□車に乗る。", blankIndex: 0 },
      { word: "電話", reading: "でんわ", sentence: "□話をかけた。", blankIndex: 0 },
      { word: "電車", reading: "でんしゃ", sentence: "マインクラフトで□車をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "読",
    readings: { onyomi: ["ドク", "トク"], kunyomi: ["よ"] },
    strokes: 14,
    examples: [
      { word: "読む", reading: "よむ", sentence: "本を□む。", blankIndex: 2 },
      { word: "読書", reading: "どくしょ", sentence: "□書が好きだ。", blankIndex: 0 },
      { word: "読む", reading: "よむ", sentence: "ロブロックスで□むをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "冬",
    readings: { onyomi: ["トウ"], kunyomi: ["ふゆ"] },
    strokes: 5,
    examples: [
      { word: "冬", reading: "ふゆ", sentence: "□は寒い。", blankIndex: 0 },
      { word: "冬休み", reading: "ふゆやすみ", sentence: "□休みに雪遊びをした。", blankIndex: 0 },
      { word: "冬休み", reading: "ふゆやすみ", sentence: "カービィのれーすで□休みをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "当",
    readings: { onyomi: ["トウ"], kunyomi: ["あ"] },
    strokes: 6,
    examples: [
      { word: "本当", reading: "ほんとう", sentence: "本□のことを言う。", blankIndex: 1 },
      { word: "当たる", reading: "あたる", sentence: "くじが□たった。", blankIndex: 2 },
      { word: "本当", reading: "ほんとう", sentence: "マインクラフトで本□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "答",
    readings: { onyomi: ["トウ"], kunyomi: ["こた"] },
    strokes: 12,
    examples: [
      { word: "答える", reading: "こたえる", sentence: "質問に□える。", blankIndex: 2 },
      { word: "答え", reading: "こたえ", sentence: "正しい□えを書く。", blankIndex: 2 },
      { word: "答える", reading: "こたえる", sentence: "ロブロックスで□えるをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "道",
    readings: { onyomi: ["ドウ"], kunyomi: ["みち"] },
    strokes: 12,
    examples: [
      { word: "道", reading: "みち", sentence: "広い□を歩く。", blankIndex: 3 },
      { word: "道路", reading: "どうろ", sentence: "□路を車が走る。", blankIndex: 0 },
      { word: "道路", reading: "どうろ", sentence: "カービィのれーすで□路をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "内",
    readings: { onyomi: ["ナイ", "ダイ"], kunyomi: ["うち"] },
    strokes: 4,
    examples: [
      { word: "内側", reading: "うちがわ", sentence: "□側から見る。", blankIndex: 0 },
      { word: "国内", reading: "こくない", sentence: "国□旅行をした。", blankIndex: 1 },
      { word: "内側", reading: "うちがわ", sentence: "マインクラフトで□側をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "南",
    readings: { onyomi: ["ナン", "ナ"], kunyomi: ["みなみ"] },
    strokes: 9,
    examples: [
      { word: "南", reading: "みなみ", sentence: "□の方角へ進む。", blankIndex: 0 },
      { word: "南極", reading: "なんきょく", sentence: "□極は寒い。", blankIndex: 0 },
      { word: "南極", reading: "なんきょく", sentence: "ロブロックスで□極をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "肉",
    readings: { onyomi: ["ニク"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "肉", reading: "にく", sentence: "おいしい□を食べた。", blankIndex: 4 },
      { word: "牛肉", reading: "ぎゅうにく", sentence: "牛□のステーキだ。", blankIndex: 1 },
      { word: "牛肉", reading: "ぎゅうにく", sentence: "カービィのれーすで牛□をつかった。", blankIndex: 10 },
    ],
  },
  {
    character: "馬",
    readings: { onyomi: ["バ"], kunyomi: ["うま"] },
    strokes: 10,
    examples: [
      { word: "馬", reading: "うま", sentence: "白い□に乗った。", blankIndex: 3 },
      { word: "馬力", reading: "ばりき", sentence: "□力のある車だ。", blankIndex: 0 },
      { word: "馬力", reading: "ばりき", sentence: "マインクラフトで□力をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "買",
    readings: { onyomi: ["バイ"], kunyomi: ["か"] },
    strokes: 12,
    examples: [
      { word: "買う", reading: "かう", sentence: "おかしを□う。", blankIndex: 4 },
      { word: "買い物", reading: "かいもの", sentence: "□い物に行く。", blankIndex: 0 },
      { word: "買う", reading: "かう", sentence: "ロブロックスで□うをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "売",
    readings: { onyomi: ["バイ"], kunyomi: ["う"] },
    strokes: 7,
    examples: [
      { word: "売る", reading: "うる", sentence: "お店で本を□る。", blankIndex: 4 },
      { word: "売り場", reading: "うりば", sentence: "お菓子の□り場に行く。", blankIndex: 0 },
      { word: "売る", reading: "うる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "麦",
    readings: { onyomi: ["バク"], kunyomi: ["むぎ"] },
    strokes: 7,
    examples: [
      { word: "麦", reading: "むぎ", sentence: "黄色い□畑が広がる。", blankIndex: 3 },
      { word: "小麦", reading: "こむぎ", sentence: "小□からパンを作る。", blankIndex: 1 },
      { word: "小麦", reading: "こむぎ", sentence: "マインクラフトで小□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "半",
    readings: { onyomi: ["ハン"], kunyomi: ["なか"] },
    strokes: 5,
    examples: [
      { word: "半分", reading: "はんぶん", sentence: "ケーキを□分にした。", blankIndex: 0 },
      { word: "半年", reading: "はんとし", sentence: "□年が過ぎた。", blankIndex: 0 },
      { word: "半分", reading: "はんぶん", sentence: "ロブロックスで□分をえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "番",
    readings: { onyomi: ["バン"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "一番", reading: "いちばん", sentence: "□番好きな色は青だ。", blankIndex: 0 },
      { word: "番号", reading: "ばんごう", sentence: "□号を言ってください。", blankIndex: 0 },
      { word: "一番", reading: "いちばん", sentence: "カービィのれーすで一□をつかった。", blankIndex: 10 },
    ],
  },
  {
    character: "友",
    readings: { onyomi: ["ユウ"], kunyomi: ["とも"] },
    strokes: 4,
    examples: [
      { word: "友達", reading: "ともだち", sentence: "□達と遊んだ。", blankIndex: 0 },
      { word: "友人", reading: "ゆうじん", sentence: "□人に電話した。", blankIndex: 0 },
      { word: "友達", reading: "ともだち", sentence: "マインクラフトで□達をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "用",
    readings: { onyomi: ["ヨウ"], kunyomi: ["もち"] },
    strokes: 5,
    examples: [
      { word: "使用", reading: "しよう", sentence: "道具を使□する。", blankIndex: 2 },
      { word: "用事", reading: "ようじ", sentence: "□事があって帰る。", blankIndex: 0 },
      { word: "使用", reading: "しよう", sentence: "ロブロックスで使□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "来",
    readings: { onyomi: ["ライ"], kunyomi: ["く", "き"] },
    strokes: 7,
    examples: [
      { word: "来る", reading: "くる", sentence: "友達が□る。", blankIndex: 3 },
      { word: "来年", reading: "らいねん", sentence: "□年も頑張ろう。", blankIndex: 0 },
      { word: "来る", reading: "くる", sentence: "カービィのれーすで□るをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "理",
    readings: { onyomi: ["リ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "理科", reading: "りか", sentence: "□科が好きだ。", blankIndex: 0 },
      { word: "料理", reading: "りょうり", sentence: "料□を作った。", blankIndex: 1 },
      { word: "理科", reading: "りか", sentence: "マインクラフトで□科をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "里",
    readings: { onyomi: ["リ"], kunyomi: ["さと"] },
    strokes: 7,
    examples: [
      { word: "里", reading: "さと", sentence: "田□に帰った。", blankIndex: 1 },
      { word: "郷里", reading: "きょうり", sentence: "郷□に戻った。", blankIndex: 1 },
      { word: "郷里", reading: "きょうり", sentence: "ロブロックスで郷□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "話",
    readings: { onyomi: ["ワ"], kunyomi: ["はな", "はなし"] },
    strokes: 13,
    examples: [
      { word: "話す", reading: "はなす", sentence: "先生に□す。", blankIndex: 3 },
      { word: "電話", reading: "でんわ", sentence: "電□で連絡した。", blankIndex: 1 },
      { word: "話す", reading: "はなす", sentence: "カービィのれーすで□すをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "野",
    readings: { onyomi: ["ヤ"], kunyomi: ["の"] },
    strokes: 11,
    examples: [
      { word: "野原", reading: "のはら", sentence: "広い□原を走る。", blankIndex: 0 },
      { word: "野球", reading: "やきゅう", sentence: "□球が好きだ。", blankIndex: 0 },
      { word: "野原", reading: "のはら", sentence: "マインクラフトで□原をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "夜",
    readings: { onyomi: ["ヤ"], kunyomi: ["よ", "よる"] },
    strokes: 8,
    examples: [
      { word: "夜", reading: "よる", sentence: "□になると星が見える。", blankIndex: 0 },
      { word: "今夜", reading: "こんや", sentence: "今□は花火大会だ。", blankIndex: 1 },
      { word: "今夜", reading: "こんや", sentence: "ロブロックスで今□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "矢",
    readings: { onyomi: ["シ"], kunyomi: ["や"] },
    strokes: 5,
    examples: [
      { word: "矢", reading: "や", sentence: "□を放った。", blankIndex: 0 },
      { word: "矢印", reading: "やじるし", sentence: "□印の方向へ進む。", blankIndex: 0 },
      { word: "矢印", reading: "やじるし", sentence: "カービィのれーすで□印をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "毎",
    readings: { onyomi: ["マイ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "毎日", reading: "まいにち", sentence: "□日練習する。", blankIndex: 0 },
      { word: "毎朝", reading: "まいあさ", sentence: "□朝ラジオ体操をする。", blankIndex: 0 },
      { word: "毎日", reading: "まいにち", sentence: "マインクラフトで□日をつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "万",
    readings: { onyomi: ["マン", "バン"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "一万", reading: "いちまん", sentence: "一□円を貯めた。", blankIndex: 1 },
      { word: "万全", reading: "ばんぜん", sentence: "□全の準備をした。", blankIndex: 0 },
      { word: "一万", reading: "いちまん", sentence: "ロブロックスで一□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "鳴",
    readings: { onyomi: ["メイ"], kunyomi: ["な"] },
    strokes: 14,
    examples: [
      { word: "鳴く", reading: "なく", sentence: "犬が□く。", blankIndex: 1 },
      { word: "鳴る", reading: "なる", sentence: "鈴が□る。", blankIndex: 2 },
      { word: "鳴く", reading: "なく", sentence: "カービィのれーすで□くをつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "明",
    readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["あか", "あき"] },
    strokes: 8,
    examples: [
      { word: "明るい", reading: "あかるい", sentence: "□るい部屋が好きだ。", blankIndex: 0 },
      { word: "明るい", reading: "あかるい", sentence: "□るい部屋が好きだ。", blankIndex: 0 },
      { word: "明るい", reading: "あかるい", sentence: "マインクラフトで□るいをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "門",
    readings: { onyomi: ["モン"], kunyomi: ["かど"] },
    strokes: 8,
    examples: [
      { word: "門", reading: "かど", sentence: "学校の□を入る。", blankIndex: 3 },
      { word: "校門", reading: "こうもん", sentence: "校□の前に集まる。", blankIndex: 1 },
      { word: "校門", reading: "こうもん", sentence: "ロブロックスで校□をえらんだ。", blankIndex: 8 },
    ],
  },
  {
    character: "問",
    readings: { onyomi: ["モン"], kunyomi: ["と"] },
    strokes: 11,
    examples: [
      { word: "問題", reading: "もんだい", sentence: "難しい□題だ。", blankIndex: 0 },
      { word: "質問", reading: "しつもん", sentence: "先生に質□した。", blankIndex: 2 },
      { word: "問題", reading: "もんだい", sentence: "カービィのれーすで□題をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "北",
    readings: { onyomi: ["ホク"], kunyomi: ["きた"] },
    strokes: 5,
    examples: [
      { word: "北", reading: "きた", sentence: "□に向かって歩く。", blankIndex: 0 },
      { word: "北", reading: "きた", sentence: "□に向かって歩く。", blankIndex: 0 },
      { word: "北", reading: "きた", sentence: "マインクラフトで□をれんしゅうした。", blankIndex: 8 },
    ],
  },
  {
    character: "母",
    readings: { onyomi: ["ボ"], kunyomi: ["はは"] },
    strokes: 5,
    examples: [
      { word: "母国", reading: "ぼこく", sentence: "□国語を大切にする。", blankIndex: 0 },
      { word: "母国", reading: "ぼこく", sentence: "□国語を大切にする。", blankIndex: 0 },
      { word: "母国", reading: "ぼこく", sentence: "ロブロックスで□国をれんしゅうした。", blankIndex: 7 },
    ],
  },
  {
    character: "父",
    readings: { onyomi: ["フ"], kunyomi: ["ちち"] },
    strokes: 4,
    examples: [
      { word: "父親", reading: "ちちおや", sentence: "□親に似ている。", blankIndex: 0 },
      { word: "父親", reading: "ちちおや", sentence: "□親に似ている。", blankIndex: 0 },
      { word: "父親", reading: "ちちおや", sentence: "カービィのれーすで□親をれんしゅうした。", blankIndex: 9 },
    ],
  },
  {
    character: "分",
    readings: { onyomi: ["ブン", "フン", "ブ"], kunyomi: ["わ"] },
    strokes: 4,
    examples: [
      { word: "自分", reading: "じぶん", sentence: "自□でできた。", blankIndex: 1 },
      { word: "分かる", reading: "わかる", sentence: "答えが□かる。", blankIndex: 2 },
      { word: "自分", reading: "じぶん", sentence: "マインクラフトで自□をつくった。", blankIndex: 9 },
    ],
  },
  {
    character: "平",
    readings: { onyomi: ["ヘイ", "ビョウ"], kunyomi: ["たい", "ひら"] },
    strokes: 5,
    examples: [
      { word: "平ら", reading: "たいら", sentence: "□らな道を歩く。", blankIndex: 0 },
      { word: "平和", reading: "へいわ", sentence: "□和な毎日を送る。", blankIndex: 0 },
      { word: "平ら", reading: "たいら", sentence: "ロブロックスで□らをえらんだ。", blankIndex: 7 },
    ],
  },
  {
    character: "方",
    readings: { onyomi: ["ホウ"], kunyomi: ["かた"] },
    strokes: 4,
    examples: [
      { word: "方向", reading: "ほうこう", sentence: "□向を確認した。", blankIndex: 0 },
      { word: "仕方", reading: "しかた", sentence: "やり□がある。", blankIndex: 2 },
      { word: "方向", reading: "ほうこう", sentence: "カービィのれーすで□向をつかった。", blankIndex: 9 },
    ],
  },
  {
    character: "行",
    readings: { onyomi: ["コウ", "ギョウ"], kunyomi: ["い", "ゆ"] },
    strokes: 6,
    examples: [
      { word: "行く", reading: "いく", sentence: "学校に□く。", blankIndex: 4 },
      { word: "旅行", reading: "りょこう", sentence: "旅□に出かけた。", blankIndex: 1 },
      { word: "行く", reading: "いく", sentence: "マインクラフトで□くをつくった。", blankIndex: 8 },
    ],
  },
  {
    character: "国",
    readings: { onyomi: ["コク"], kunyomi: ["くに"] },
    strokes: 8,
    examples: [
      { word: "国", reading: "くに", sentence: "日本という□に住む。", blankIndex: 5 },
      { word: "外国", reading: "がいこく", sentence: "外□から来た人と話した。", blankIndex: 1 },
      { word: "外国", reading: "がいこく", sentence: "ロブロックスで外□をえらんだ。", blankIndex: 8 },
    ],
  },
];
