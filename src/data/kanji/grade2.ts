import type { KanjiEntry } from "@/types/problem";

// 2年生配当漢字（160字）を収録中
export const GRADE2_KANJI: KanjiEntry[] = [
  {
    character: "回",
    readings: { onyomi: ["カイ", "エ"], kunyomi: ["まわ"] },
    strokes: 6,
    examples: [
      { word: "回る", reading: "まわる", sentence: "コマが□る。", blankIndex: 2 },
      { word: "回数", reading: "かいすう", sentence: "□数を数える。", blankIndex: 0 },
    ],
  },
  {
    character: "海",
    readings: { onyomi: ["カイ"], kunyomi: ["うみ"] },
    strokes: 9,
    examples: [
      { word: "海", reading: "うみ", sentence: "夏に□へ行った。", blankIndex: 3 },
      { word: "海外", reading: "かいがい", sentence: "□外旅行が夢だ。", blankIndex: 0 },
    ],
  },
  {
    character: "絵",
    readings: { onyomi: ["カイ", "エ"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "絵", reading: "え", sentence: "きれいな□を描いた。", blankIndex: 4 },
      { word: "絵本", reading: "えほん", sentence: "□本を読んだ。", blankIndex: 0 },
    ],
  },
  {
    character: "歌",
    readings: { onyomi: ["カ"], kunyomi: ["うた"] },
    strokes: 14,
    examples: [
      { word: "歌う", reading: "うたう", sentence: "大きな声で□う。", blankIndex: 7 },
      { word: "歌手", reading: "かしゅ", sentence: "有名な□手になりたい。", blankIndex: 0 },
    ],
  },
  {
    character: "家",
    readings: { onyomi: ["カ", "ケ"], kunyomi: ["いえ", "うち"] },
    strokes: 10,
    examples: [
      { word: "家", reading: "いえ", sentence: "大きな□に住んでいる。", blankIndex: 3 },
      { word: "家族", reading: "かぞく", sentence: "□族でピクニックに行く。", blankIndex: 0 },
    ],
  },
  {
    character: "科",
    readings: { onyomi: ["カ"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "理科", reading: "りか", sentence: "理□の実験は楽しい。", blankIndex: 1 },
      { word: "科目", reading: "かもく", sentence: "好きな□目は算数だ。", blankIndex: 0 },
    ],
  },
  {
    character: "夏",
    readings: { onyomi: ["カ", "ゲ"], kunyomi: ["なつ"] },
    strokes: 10,
    examples: [
      { word: "夏", reading: "なつ", sentence: "□は暑い。", blankIndex: 0 },
      { word: "夏休み", reading: "なつやすみ", sentence: "□休みが楽しみだ。", blankIndex: 0 },
    ],
  },
  {
    character: "活",
    readings: { onyomi: ["カツ"], kunyomi: ["い"] },
    strokes: 9,
    examples: [
      { word: "生活", reading: "せいかつ", sentence: "毎日の生□を大切に。", blankIndex: 2 },
      { word: "活動", reading: "かつどう", sentence: "クラブ□動をする。", blankIndex: 2 },
    ],
  },
  {
    character: "間",
    readings: { onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"] },
    strokes: 12,
    examples: [
      { word: "時間", reading: "じかん", sentence: "時□があれば遊ぼう。", blankIndex: 1 },
      { word: "間", reading: "あいだ", sentence: "木と木の□に入る。", blankIndex: 6 },
    ],
  },
  {
    character: "丸",
    readings: { onyomi: ["ガン"], kunyomi: ["まる"] },
    strokes: 3,
    examples: [
      { word: "丸い", reading: "まるい", sentence: "□いボールを投げた。", blankIndex: 0 },
      { word: "丸", reading: "まる", sentence: "○を□という。", blankIndex: 1 },
    ],
  },
  {
    character: "岩",
    readings: { onyomi: ["ガン"], kunyomi: ["いわ"] },
    strokes: 8,
    examples: [
      { word: "岩", reading: "いわ", sentence: "大きな□の上に乗った。", blankIndex: 4 },
      { word: "岩山", reading: "いわやま", sentence: "□山を登った。", blankIndex: 0 },
    ],
  },
  {
    character: "記",
    readings: { onyomi: ["キ"], kunyomi: ["しる"] },
    strokes: 10,
    examples: [
      { word: "日記", reading: "にっき", sentence: "毎日日□をつける。", blankIndex: 2 },
      { word: "記念", reading: "きねん", sentence: "□念写真を撮った。", blankIndex: 0 },
    ],
  },
  {
    character: "帰",
    readings: { onyomi: ["キ"], kunyomi: ["かえ"] },
    strokes: 10,
    examples: [
      { word: "帰る", reading: "かえる", sentence: "早く家に□る。", blankIndex: 4 },
      { word: "帰国", reading: "きこく", sentence: "□国して家族に会う。", blankIndex: 0 },
    ],
  },
  {
    character: "牛",
    readings: { onyomi: ["ギュウ"], kunyomi: ["うし"] },
    strokes: 4,
    examples: [
      { word: "牛", reading: "うし", sentence: "□が草を食べている。", blankIndex: 0 },
      { word: "牛乳", reading: "ぎゅうにゅう", sentence: "毎朝□乳を飲む。", blankIndex: 0 },
    ],
  },
  {
    character: "強",
    readings: { onyomi: ["キョウ"], kunyomi: ["つよ"] },
    strokes: 11,
    examples: [
      { word: "強い", reading: "つよい", sentence: "□い風が吹いた。", blankIndex: 0 },
      { word: "勉強", reading: "べんきょう", sentence: "毎日勉□している。", blankIndex: 2 },
    ],
  },
  {
    character: "教",
    readings: { onyomi: ["キョウ"], kunyomi: ["おし", "おそ"] },
    strokes: 11,
    examples: [
      { word: "教える", reading: "おしえる", sentence: "友達に□えてあげた。", blankIndex: 2 },
      { word: "教室", reading: "きょうしつ", sentence: "□室に戻った。", blankIndex: 0 },
    ],
  },
  {
    character: "近",
    readings: { onyomi: ["キン"], kunyomi: ["ちか"] },
    strokes: 7,
    examples: [
      { word: "近い", reading: "ちかい", sentence: "駅が□い場所に住む。", blankIndex: 2 },
      { word: "近所", reading: "きんじょ", sentence: "□所の人と仲良くする。", blankIndex: 0 },
    ],
  },
  {
    character: "兄",
    readings: { onyomi: ["ケイ", "キョウ"], kunyomi: ["あに"] },
    strokes: 5,
    examples: [
      { word: "兄弟", reading: "きょうだい", sentence: "□弟で仲良くする。", blankIndex: 0 },
      { word: "兄弟", reading: "きょうだい", sentence: "□弟で仲良くする。", blankIndex: 0 },
    ],
  },
  {
    character: "形",
    readings: { onyomi: ["ケイ", "ギョウ"], kunyomi: ["かたち"] },
    strokes: 7,
    examples: [
      { word: "形", reading: "かたち", sentence: "丸い□の石を拾った。", blankIndex: 3 },
      { word: "人形", reading: "にんぎょう", sentence: "かわいい人□を買った。", blankIndex: 2 },
    ],
  },
  {
    character: "計",
    readings: { onyomi: ["ケイ"], kunyomi: ["はか"] },
    strokes: 9,
    examples: [
      { word: "時計", reading: "とけい", sentence: "時□を見て時間を確認する。", blankIndex: 1 },
      { word: "計算", reading: "けいさん", sentence: "□算が得意だ。", blankIndex: 0 },
    ],
  },
  {
    character: "元",
    readings: { onyomi: ["ゲン", "ガン"], kunyomi: ["もと"] },
    strokes: 4,
    examples: [
      { word: "元気", reading: "げんき", sentence: "今日も□気だ。", blankIndex: 2 },
      { word: "元", reading: "もと", sentence: "□の場所に戻した。", blankIndex: 0 },
    ],
  },
  {
    character: "言",
    readings: { onyomi: ["ゲン", "ゴン"], kunyomi: ["い", "こと"] },
    strokes: 7,
    examples: [
      { word: "言葉", reading: "ことば", sentence: "やさしい□葉をかけた。", blankIndex: 0 },
      { word: "言う", reading: "いう", sentence: "ありがとうと□う。", blankIndex: 6 },
    ],
  },
  {
    character: "古",
    readings: { onyomi: ["コ"], kunyomi: ["ふる"] },
    strokes: 5,
    examples: [
      { word: "古い", reading: "ふるい", sentence: "□い本が出てきた。", blankIndex: 0 },
      { word: "古代", reading: "こだい", sentence: "□代の遺跡を見た。", blankIndex: 0 },
    ],
  },
  {
    character: "語",
    readings: { onyomi: ["ゴ"], kunyomi: ["かた"] },
    strokes: 14,
    examples: [
      { word: "国語", reading: "こくご", sentence: "国□のテストがある。", blankIndex: 1 },
      { word: "国語", reading: "こくご", sentence: "国□のテストがある。", blankIndex: 1 },
    ],
  },
  {
    character: "工",
    readings: { onyomi: ["コウ", "ク"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "工作", reading: "こうさく", sentence: "□作でおもちゃを作った。", blankIndex: 0 },
      { word: "工場", reading: "こうじょう", sentence: "車の□場に行った。", blankIndex: 1 },
    ],
  },
  {
    character: "公",
    readings: { onyomi: ["コウ"], kunyomi: ["おおやけ"] },
    strokes: 4,
    examples: [
      { word: "公園", reading: "こうえん", sentence: "□園で遊んだ。", blankIndex: 0 },
      { word: "公共", reading: "こうきょう", sentence: "□共の場所を大切に。", blankIndex: 0 },
    ],
  },
  {
    character: "今",
    readings: { onyomi: ["コン", "キン"], kunyomi: ["いま"] },
    strokes: 4,
    examples: [
      { word: "今", reading: "いま", sentence: "□ははれるかな。", blankIndex: 0 },
      { word: "今", reading: "いま", sentence: "□から始めよう。", blankIndex: 0 },
    ],
  },
  {
    character: "才",
    readings: { onyomi: ["サイ"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "七才", reading: "ななさい", sentence: "七□になった。", blankIndex: 1 },
      { word: "天才", reading: "てんさい", sentence: "天□だとほめられた。", blankIndex: 1 },
    ],
  },
  {
    character: "作",
    readings: { onyomi: ["サク", "サ"], kunyomi: ["つく"] },
    strokes: 7,
    examples: [
      { word: "作る", reading: "つくる", sentence: "ケーキを□る。", blankIndex: 4 },
      { word: "作品", reading: "さくひん", sentence: "すてきな□品が完成した。", blankIndex: 0 },
    ],
  },
  {
    character: "算",
    readings: { onyomi: ["サン"], kunyomi: [] },
    strokes: 14,
    examples: [
      { word: "算数", reading: "さんすう", sentence: "□数が好きだ。", blankIndex: 0 },
      { word: "計算", reading: "けいさん", sentence: "計□が得意だ。", blankIndex: 1 },
    ],
  },
  {
    character: "思",
    readings: { onyomi: ["シ"], kunyomi: ["おも"] },
    strokes: 9,
    examples: [
      { word: "思う", reading: "おもう", sentence: "楽しいと□う。", blankIndex: 4 },
      { word: "思い出", reading: "おもいで", sentence: "大切な□い出がある。", blankIndex: 0 },
    ],
  },
  {
    character: "紙",
    readings: { onyomi: ["シ"], kunyomi: ["かみ"] },
    strokes: 10,
    examples: [
      { word: "紙", reading: "かみ", sentence: "白い□に絵を描く。", blankIndex: 3 },
      { word: "紙", reading: "かみ", sentence: "白い□に絵を描く。", blankIndex: 2 },
    ],
  },
  {
    character: "寺",
    readings: { onyomi: ["ジ"], kunyomi: ["てら"] },
    strokes: 6,
    examples: [
      { word: "お寺", reading: "おてら", sentence: "古いお□に行った。", blankIndex: 2 },
      { word: "寺院", reading: "じいん", sentence: "有名な□院を見学した。", blankIndex: 0 },
    ],
  },
  {
    character: "時",
    readings: { onyomi: ["ジ"], kunyomi: ["とき"] },
    strokes: 10,
    examples: [
      { word: "時間", reading: "じかん", sentence: "□間を守る。", blankIndex: 0 },
      { word: "時間", reading: "じかん", sentence: "□間を守る。", blankIndex: 0 },
    ],
  },
  {
    character: "自",
    readings: { onyomi: ["ジ", "シ"], kunyomi: ["みずか"] },
    strokes: 6,
    examples: [
      { word: "自分", reading: "じぶん", sentence: "□分でやってみる。", blankIndex: 0 },
      { word: "自由", reading: "じゆう", sentence: "□由に遊ぶ。", blankIndex: 0 },
    ],
  },
  {
    character: "室",
    readings: { onyomi: ["シツ"], kunyomi: ["むろ"] },
    strokes: 9,
    examples: [
      { word: "教室", reading: "きょうしつ", sentence: "教□に入る。", blankIndex: 1 },
      { word: "図書室", reading: "としょしつ", sentence: "図書□で本を借りた。", blankIndex: 2 },
    ],
  },
  {
    character: "社",
    readings: { onyomi: ["シャ"], kunyomi: ["やしろ"] },
    strokes: 7,
    examples: [
      { word: "会社", reading: "かいしゃ", sentence: "お父さんは会□で働く。", blankIndex: 2 },
      { word: "会社", reading: "かいしゃ", sentence: "お父さんは会□で働く。", blankIndex: 6 },
    ],
  },
  {
    character: "弱",
    readings: { onyomi: ["ジャク"], kunyomi: ["よわ"] },
    strokes: 10,
    examples: [
      { word: "弱い", reading: "よわい", sentence: "体が□い時は休む。", blankIndex: 2 },
      { word: "弱点", reading: "じゃくてん", sentence: "□点を克服する。", blankIndex: 0 },
    ],
  },
  {
    character: "首",
    readings: { onyomi: ["シュ"], kunyomi: ["くび"] },
    strokes: 9,
    examples: [
      { word: "首", reading: "くび", sentence: "□を長くして待つ。", blankIndex: 0 },
      { word: "首都", reading: "しゅと", sentence: "日本の□都は東京だ。", blankIndex: 0 },
    ],
  },
  {
    character: "春",
    readings: { onyomi: ["シュン"], kunyomi: ["はる"] },
    strokes: 9,
    examples: [
      { word: "春", reading: "はる", sentence: "□になると花が咲く。", blankIndex: 0 },
      { word: "春休み", reading: "はるやすみ", sentence: "□休みに旅行した。", blankIndex: 0 },
    ],
  },
  {
    character: "書",
    readings: { onyomi: ["ショ"], kunyomi: ["か"] },
    strokes: 10,
    examples: [
      { word: "書く", reading: "かく", sentence: "日記を□く。", blankIndex: 3 },
      { word: "図書館", reading: "としょかん", sentence: "図□館で勉強する。", blankIndex: 1 },
    ],
  },
  {
    character: "少",
    readings: { onyomi: ["ショウ"], kunyomi: ["すく", "すこ"] },
    strokes: 4,
    examples: [
      { word: "少ない", reading: "すくない", sentence: "時間が□ない。", blankIndex: 3 },
      { word: "少し", reading: "すこし", sentence: "□し待ってください。", blankIndex: 0 },
    ],
  },
  {
    character: "食",
    readings: { onyomi: ["ショク"], kunyomi: ["た", "く"] },
    strokes: 9,
    examples: [
      { word: "食べる", reading: "たべる", sentence: "ごはんを□べる。", blankIndex: 4 },
      { word: "食事", reading: "しょくじ", sentence: "楽しい□事の時間だ。", blankIndex: 0 },
    ],
  },
  {
    character: "新",
    readings: { onyomi: ["シン"], kunyomi: ["あたら", "あら"] },
    strokes: 13,
    examples: [
      { word: "新しい", reading: "あたらしい", sentence: "□しい本を買った。", blankIndex: 0 },
      { word: "新幹線", reading: "しんかんせん", sentence: "□幹線に乗った。", blankIndex: 0 },
    ],
  },
  {
    character: "親",
    readings: { onyomi: ["シン"], kunyomi: ["おや", "した"] },
    strokes: 16,
    examples: [
      { word: "親", reading: "おや", sentence: "□を大切にする。", blankIndex: 0 },
      { word: "親切", reading: "しんせつ", sentence: "□切にしてくれた。", blankIndex: 0 },
    ],
  },
  {
    character: "数",
    readings: { onyomi: ["スウ", "ス"], kunyomi: ["かず", "かぞ"] },
    strokes: 13,
    examples: [
      { word: "数える", reading: "かぞえる", sentence: "豆を□える。", blankIndex: 1 },
      { word: "算数", reading: "さんすう", sentence: "算□が好きだ。", blankIndex: 1 },
    ],
  },
  {
    character: "晴",
    readings: { onyomi: ["セイ"], kunyomi: ["は"] },
    strokes: 12,
    examples: [
      { word: "晴れ", reading: "はれ", sentence: "今日は□れだ。", blankIndex: 3 },
      { word: "晴天", reading: "せいてん", sentence: "□天の運動会だった。", blankIndex: 0 },
    ],
  },
  {
    character: "切",
    readings: { onyomi: ["セツ"], kunyomi: ["き", "きれ"] },
    strokes: 4,
    examples: [
      { word: "切る", reading: "きる", sentence: "はさみで□る。", blankIndex: 5 },
      { word: "大切", reading: "たいせつ", sentence: "友達は大□だ。", blankIndex: 2 },
    ],
  },
  {
    character: "雪",
    readings: { onyomi: ["セツ"], kunyomi: ["ゆき"] },
    strokes: 11,
    examples: [
      { word: "雪", reading: "ゆき", sentence: "白い□が降った。", blankIndex: 3 },
      { word: "雪だるま", reading: "ゆきだるま", sentence: "□だるまを作った。", blankIndex: 0 },
    ],
  },
  {
    character: "線",
    readings: { onyomi: ["セン"], kunyomi: ["すじ"] },
    strokes: 15,
    examples: [
      { word: "直線", reading: "ちょくせん", sentence: "直□を引いた。", blankIndex: 1 },
      { word: "線路", reading: "せんろ", sentence: "□路の近くに住む。", blankIndex: 0 },
    ],
  },
  {
    character: "船",
    readings: { onyomi: ["セン"], kunyomi: ["ふね"] },
    strokes: 11,
    examples: [
      { word: "船", reading: "ふね", sentence: "大きな□に乗った。", blankIndex: 3 },
      { word: "船", reading: "ふね", sentence: "大きな□に乗った。", blankIndex: 3 },
    ],
  },
  {
    character: "走",
    readings: { onyomi: ["ソウ"], kunyomi: ["はし"] },
    strokes: 7,
    examples: [
      { word: "走る", reading: "はしる", sentence: "全力で□る。", blankIndex: 3 },
      { word: "走行", reading: "そうこう", sentence: "電車が□行している。", blankIndex: 0 },
    ],
  },
  {
    character: "体",
    readings: { onyomi: ["タイ", "テイ"], kunyomi: ["からだ"] },
    strokes: 7,
    examples: [
      { word: "体", reading: "からだ", sentence: "□を動かして遊ぶ。", blankIndex: 0 },
      { word: "体育", reading: "たいいく", sentence: "□育の授業が好きだ。", blankIndex: 0 },
    ],
  },
  {
    character: "台",
    readings: { onyomi: ["ダイ", "タイ"], kunyomi: [] },
    strokes: 5,
    examples: [
      { word: "台所", reading: "だいどころ", sentence: "□所でお母さんが料理する。", blankIndex: 0 },
      { word: "台風", reading: "たいふう", sentence: "大きな□風が来た。", blankIndex: 0 },
    ],
  },
  {
    character: "地",
    readings: { onyomi: ["チ", "ジ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "地図", reading: "ちず", sentence: "□図を見て道を確認した。", blankIndex: 0 },
      { word: "地球", reading: "ちきゅう", sentence: "□球は丸い。", blankIndex: 0 },
    ],
  },
  {
    character: "池",
    readings: { onyomi: ["チ"], kunyomi: ["いけ"] },
    strokes: 6,
    examples: [
      { word: "池", reading: "いけ", sentence: "□に魚がいる。", blankIndex: 0 },
      { word: "電池", reading: "でんち", sentence: "電□が切れた。", blankIndex: 1 },
    ],
  },
  {
    character: "知",
    readings: { onyomi: ["チ"], kunyomi: ["し"] },
    strokes: 8,
    examples: [
      { word: "知る", reading: "しる", sentence: "答えを□っている。", blankIndex: 3 },
      { word: "知識", reading: "ちしき", sentence: "□識を増やす。", blankIndex: 0 },
    ],
  },
  {
    character: "昼",
    readings: { onyomi: ["チュウ"], kunyomi: ["ひる"] },
    strokes: 9,
    examples: [
      { word: "昼", reading: "ひる", sentence: "□ごはんはカレーだ。", blankIndex: 0 },
      { word: "昼食", reading: "ちゅうしょく", sentence: "□食を食べた。", blankIndex: 0 },
    ],
  },
  {
    character: "長",
    readings: { onyomi: ["チョウ"], kunyomi: ["なが"] },
    strokes: 8,
    examples: [
      { word: "長い", reading: "ながい", sentence: "□い道を歩いた。", blankIndex: 0 },
      { word: "身長", reading: "しんちょう", sentence: "身□が伸びた。", blankIndex: 1 },
    ],
  },
  {
    character: "朝",
    readings: { onyomi: ["チョウ"], kunyomi: ["あさ"] },
    strokes: 12,
    examples: [
      { word: "朝", reading: "あさ", sentence: "□早く起きた。", blankIndex: 0 },
      { word: "朝", reading: "あさ", sentence: "□早く起きた。", blankIndex: 0 },
    ],
  },
  {
    character: "通",
    readings: { onyomi: ["ツウ", "ツ"], kunyomi: ["とお", "かよ"] },
    strokes: 10,
    examples: [
      { word: "通る", reading: "とおる", sentence: "橋を□る。", blankIndex: 2 },
      { word: "交通", reading: "こうつう", sentence: "交□ルールを守る。", blankIndex: 1 },
    ],
  },
  {
    character: "電",
    readings: { onyomi: ["デン"], kunyomi: [] },
    strokes: 13,
    examples: [
      { word: "電車", reading: "でんしゃ", sentence: "□車に乗る。", blankIndex: 0 },
      { word: "電話", reading: "でんわ", sentence: "□話をかけた。", blankIndex: 0 },
    ],
  },
  {
    character: "読",
    readings: { onyomi: ["ドク", "トク"], kunyomi: ["よ"] },
    strokes: 14,
    examples: [
      { word: "読む", reading: "よむ", sentence: "本を□む。", blankIndex: 2 },
      { word: "読書", reading: "どくしょ", sentence: "□書が好きだ。", blankIndex: 0 },
    ],
  },
  {
    character: "冬",
    readings: { onyomi: ["トウ"], kunyomi: ["ふゆ"] },
    strokes: 5,
    examples: [
      { word: "冬", reading: "ふゆ", sentence: "□は寒い。", blankIndex: 0 },
      { word: "冬休み", reading: "ふゆやすみ", sentence: "□休みに雪遊びをした。", blankIndex: 0 },
    ],
  },
  {
    character: "当",
    readings: { onyomi: ["トウ"], kunyomi: ["あ"] },
    strokes: 6,
    examples: [
      { word: "本当", reading: "ほんとう", sentence: "本□のことを言う。", blankIndex: 1 },
      { word: "当たる", reading: "あたる", sentence: "くじが□たった。", blankIndex: 2 },
    ],
  },
  {
    character: "答",
    readings: { onyomi: ["トウ"], kunyomi: ["こた"] },
    strokes: 12,
    examples: [
      { word: "答える", reading: "こたえる", sentence: "質問に□える。", blankIndex: 2 },
      { word: "答え", reading: "こたえ", sentence: "正しい□えを書く。", blankIndex: 2 },
    ],
  },
  {
    character: "道",
    readings: { onyomi: ["ドウ"], kunyomi: ["みち"] },
    strokes: 12,
    examples: [
      { word: "道", reading: "みち", sentence: "広い□を歩く。", blankIndex: 3 },
      { word: "道路", reading: "どうろ", sentence: "□路を車が走る。", blankIndex: 0 },
    ],
  },
  {
    character: "内",
    readings: { onyomi: ["ナイ", "ダイ"], kunyomi: ["うち"] },
    strokes: 4,
    examples: [
      { word: "内側", reading: "うちがわ", sentence: "□側から見る。", blankIndex: 0 },
      { word: "国内", reading: "こくない", sentence: "国□旅行をした。", blankIndex: 1 },
    ],
  },
  {
    character: "南",
    readings: { onyomi: ["ナン", "ナ"], kunyomi: ["みなみ"] },
    strokes: 9,
    examples: [
      { word: "南", reading: "みなみ", sentence: "□の方角へ進む。", blankIndex: 0 },
      { word: "南極", reading: "なんきょく", sentence: "□極は寒い。", blankIndex: 0 },
    ],
  },
  {
    character: "肉",
    readings: { onyomi: ["ニク"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "肉", reading: "にく", sentence: "おいしい□を食べた。", blankIndex: 4 },
      { word: "牛肉", reading: "ぎゅうにく", sentence: "牛□のステーキだ。", blankIndex: 1 },
    ],
  },
  {
    character: "馬",
    readings: { onyomi: ["バ"], kunyomi: ["うま"] },
    strokes: 10,
    examples: [
      { word: "馬", reading: "うま", sentence: "白い□に乗った。", blankIndex: 3 },
      { word: "馬力", reading: "ばりき", sentence: "□力のある車だ。", blankIndex: 0 },
    ],
  },
  {
    character: "買",
    readings: { onyomi: ["バイ"], kunyomi: ["か"] },
    strokes: 12,
    examples: [
      { word: "買う", reading: "かう", sentence: "おかしを□う。", blankIndex: 4 },
      { word: "買い物", reading: "かいもの", sentence: "□い物に行く。", blankIndex: 0 },
    ],
  },
  {
    character: "売",
    readings: { onyomi: ["バイ"], kunyomi: ["う"] },
    strokes: 7,
    examples: [
      { word: "売る", reading: "うる", sentence: "お店で本を□る。", blankIndex: 4 },
      { word: "売り場", reading: "うりば", sentence: "お菓子の□り場に行く。", blankIndex: 0 },
    ],
  },
  {
    character: "麦",
    readings: { onyomi: ["バク"], kunyomi: ["むぎ"] },
    strokes: 7,
    examples: [
      { word: "麦", reading: "むぎ", sentence: "黄色い□畑が広がる。", blankIndex: 3 },
      { word: "小麦", reading: "こむぎ", sentence: "小□からパンを作る。", blankIndex: 1 },
    ],
  },
  {
    character: "半",
    readings: { onyomi: ["ハン"], kunyomi: ["なか"] },
    strokes: 5,
    examples: [
      { word: "半分", reading: "はんぶん", sentence: "ケーキを□分にした。", blankIndex: 0 },
      { word: "半年", reading: "はんとし", sentence: "□年が過ぎた。", blankIndex: 0 },
    ],
  },
  {
    character: "番",
    readings: { onyomi: ["バン"], kunyomi: [] },
    strokes: 12,
    examples: [
      { word: "一番", reading: "いちばん", sentence: "一□好きな色は青だ。", blankIndex: 1 },
      { word: "番号", reading: "ばんごう", sentence: "□号を言ってください。", blankIndex: 0 },
    ],
  },
  {
    character: "友",
    readings: { onyomi: ["ユウ"], kunyomi: ["とも"] },
    strokes: 4,
    examples: [
      { word: "友達", reading: "ともだち", sentence: "□達と遊んだ。", blankIndex: 0 },
      { word: "友人", reading: "ゆうじん", sentence: "□人に電話した。", blankIndex: 0 },
    ],
  },
  {
    character: "用",
    readings: { onyomi: ["ヨウ"], kunyomi: ["もち"] },
    strokes: 5,
    examples: [
      { word: "使用", reading: "しよう", sentence: "道具を使□する。", blankIndex: 2 },
      { word: "用事", reading: "ようじ", sentence: "□事があって帰る。", blankIndex: 0 },
    ],
  },
  {
    character: "来",
    readings: { onyomi: ["ライ"], kunyomi: ["く", "き"] },
    strokes: 7,
    examples: [
      { word: "来る", reading: "くる", sentence: "友達が□る。", blankIndex: 3 },
      { word: "来年", reading: "らいねん", sentence: "□年も頑張ろう。", blankIndex: 0 },
    ],
  },
  {
    character: "理",
    readings: { onyomi: ["リ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "理科", reading: "りか", sentence: "□科が好きだ。", blankIndex: 0 },
      { word: "料理", reading: "りょうり", sentence: "料□を作った。", blankIndex: 1 },
    ],
  },
  {
    character: "里",
    readings: { onyomi: ["リ"], kunyomi: ["さと"] },
    strokes: 7,
    examples: [
      { word: "里", reading: "さと", sentence: "田□に帰った。", blankIndex: 1 },
      { word: "郷里", reading: "きょうり", sentence: "郷□に戻った。", blankIndex: 1 },
    ],
  },
  {
    character: "話",
    readings: { onyomi: ["ワ"], kunyomi: ["はな", "はなし"] },
    strokes: 13,
    examples: [
      { word: "話す", reading: "はなす", sentence: "先生に□す。", blankIndex: 3 },
      { word: "電話", reading: "でんわ", sentence: "電□で連絡した。", blankIndex: 1 },
    ],
  },
  {
    character: "野",
    readings: { onyomi: ["ヤ"], kunyomi: ["の"] },
    strokes: 11,
    examples: [
      { word: "野原", reading: "のはら", sentence: "広い□原を走る。", blankIndex: 0 },
      { word: "野球", reading: "やきゅう", sentence: "□球が好きだ。", blankIndex: 0 },
    ],
  },
  {
    character: "夜",
    readings: { onyomi: ["ヤ"], kunyomi: ["よ", "よる"] },
    strokes: 8,
    examples: [
      { word: "夜", reading: "よる", sentence: "□になると星が見える。", blankIndex: 0 },
      { word: "今夜", reading: "こんや", sentence: "今□は花火大会だ。", blankIndex: 1 },
    ],
  },
  {
    character: "矢",
    readings: { onyomi: ["シ"], kunyomi: ["や"] },
    strokes: 5,
    examples: [
      { word: "矢", reading: "や", sentence: "□を放った。", blankIndex: 0 },
      { word: "矢印", reading: "やじるし", sentence: "□印の方向へ進む。", blankIndex: 0 },
    ],
  },
  {
    character: "毎",
    readings: { onyomi: ["マイ"], kunyomi: [] },
    strokes: 6,
    examples: [
      { word: "毎日", reading: "まいにち", sentence: "□日練習する。", blankIndex: 0 },
      { word: "毎朝", reading: "まいあさ", sentence: "□朝ラジオ体操をする。", blankIndex: 0 },
    ],
  },
  {
    character: "万",
    readings: { onyomi: ["マン", "バン"], kunyomi: [] },
    strokes: 3,
    examples: [
      { word: "一万", reading: "いちまん", sentence: "一□円を貯めた。", blankIndex: 1 },
      { word: "万全", reading: "ばんぜん", sentence: "□全の準備をした。", blankIndex: 0 },
    ],
  },
  {
    character: "鳴",
    readings: { onyomi: ["メイ"], kunyomi: ["な"] },
    strokes: 14,
    examples: [
      { word: "鳴く", reading: "なく", sentence: "犬が□く。", blankIndex: 1 },
      { word: "鳴る", reading: "なる", sentence: "鈴が□る。", blankIndex: 2 },
    ],
  },
  {
    character: "明",
    readings: { onyomi: ["メイ", "ミョウ"], kunyomi: ["あか", "あき"] },
    strokes: 8,
    examples: [
      { word: "明るい", reading: "あかるい", sentence: "□るい部屋が好きだ。", blankIndex: 0 },
      { word: "明るい", reading: "あかるい", sentence: "□るい部屋が好きだ。", blankIndex: 0 },
    ],
  },
  {
    character: "門",
    readings: { onyomi: ["モン"], kunyomi: ["かど"] },
    strokes: 8,
    examples: [
      { word: "門", reading: "もん", sentence: "学校の□を通る。", blankIndex: 3 },
      { word: "校門", reading: "こうもん", sentence: "校□の前に集まる。", blankIndex: 1 },
    ],
  },
  {
    character: "北",
    readings: { onyomi: ["ホク"], kunyomi: ["きた"] },
    strokes: 5,
    examples: [
      { word: "北", reading: "きた", sentence: "□に向かって歩く。", blankIndex: 0 },
      { word: "北", reading: "きた", sentence: "□に向かって歩く。", blankIndex: 0 },
    ],
  },
  {
    character: "母",
    readings: { onyomi: ["ボ"], kunyomi: ["はは"] },
    strokes: 5,
    examples: [
      { word: "母国", reading: "ぼこく", sentence: "□国語を大切にする。", blankIndex: 0 },
      { word: "母国", reading: "ぼこく", sentence: "□国語を大切にする。", blankIndex: 0 },
    ],
  },
  {
    character: "父",
    readings: { onyomi: ["フ"], kunyomi: ["ちち"] },
    strokes: 4,
    examples: [
      { word: "父親", reading: "ちちおや", sentence: "□親に似ている。", blankIndex: 0 },
      { word: "父親", reading: "ちちおや", sentence: "□親に似ている。", blankIndex: 0 },
    ],
  },
  {
    character: "分",
    readings: { onyomi: ["ブン", "フン", "ブ"], kunyomi: ["わ"] },
    strokes: 4,
    examples: [
      { word: "自分", reading: "じぶん", sentence: "自□でできた。", blankIndex: 1 },
      { word: "分かる", reading: "わかる", sentence: "答えが□かる。", blankIndex: 2 },
    ],
  },
  {
    character: "方",
    readings: { onyomi: ["ホウ"], kunyomi: ["かた"] },
    strokes: 4,
    examples: [
      { word: "方向", reading: "ほうこう", sentence: "□向を確認した。", blankIndex: 0 },
      { word: "やり方", reading: "やりかた", sentence: "やり□がある。", blankIndex: 2 },
    ],
  },
  {
    character: "行",
    readings: { onyomi: ["コウ", "ギョウ"], kunyomi: ["い", "ゆ"] },
    strokes: 6,
    examples: [
      { word: "行く", reading: "いく", sentence: "学校に□く。", blankIndex: 4 },
      { word: "旅行", reading: "りょこう", sentence: "旅□に出かけた。", blankIndex: 1 },
    ],
  },
  {
    character: "国",
    readings: { onyomi: ["コク"], kunyomi: ["くに"] },
    strokes: 8,
    examples: [
      { word: "国", reading: "くに", sentence: "日本という□に住む。", blankIndex: 5 },
      { word: "外国", reading: "がいこく", sentence: "外□から来た人と話した。", blankIndex: 1 },
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
    character: "引",
    readings: { onyomi: ["イン"], kunyomi: ["ひく", "ひき", "びき", "ひける"] },
    strokes: 4,
    examples: [
      { word: "引", reading: "ひ", sentence: "マイクラで弓の□き方をれんしゅうした。", blankIndex: 7, targetReading: "ひ" },
      { word: "引", reading: "ひ", sentence: "くじを□いたら当たりが出た。", blankIndex: 3, targetReading: "ひ" },
    ],
  },
  {
    character: "羽",
    readings: { onyomi: ["ウ"], kunyomi: ["は", "わ", "はね"] },
    strokes: 6,
    examples: [
      { word: "羽", reading: "はね", sentence: "カービィのコピーで大きな□がはえた。", blankIndex: 12, targetReading: "はね" },
      { word: "羽", reading: "はね", sentence: "公園で白い□をひろった。", blankIndex: 5, targetReading: "はね" },
    ],
  },
  {
    character: "雲",
    readings: { onyomi: ["ウン"], kunyomi: ["くも", "ぐも"] },
    strokes: 12,
    examples: [
      { word: "雲", reading: "くも", sentence: "エアライドの空に大きな□がうかんでいた。", blankIndex: 11, targetReading: "くも" },
      { word: "雲", reading: "くも", sentence: "マイクラの山の上に□がかかった。", blankIndex: 9, targetReading: "くも" },
    ],
  },
  {
    character: "園",
    readings: { onyomi: ["エン"], kunyomi: ["その"] },
    strokes: 13,
    examples: [
      { word: "園", reading: "えん", sentence: "どうぶつ□でペンギンを見た。", blankIndex: 4, targetReading: "えん" },
      { word: "園", reading: "えん", sentence: "ようち□の前で手をふった。", blankIndex: 3, targetReading: "えん" },
    ],
  },
  {
    character: "遠",
    readings: { onyomi: ["エン", "オン"], kunyomi: ["とおい"] },
    strokes: 13,
    examples: [
      { word: "遠", reading: "とお", sentence: "エアライドのゴールはまだ□い。", blankIndex: 12, targetReading: "とお" },
      { word: "遠", reading: "とお", sentence: "マイクラの村が□くに見えた。", blankIndex: 7, targetReading: "とお" },
    ],
  },
  {
    character: "何",
    readings: { onyomi: ["カ"], kunyomi: ["なに", "なん"] },
    strokes: 7,
    examples: [
      { word: "何", reading: "なに", sentence: "カービィがつぎに□をすいこむか見ていた。", blankIndex: 8, targetReading: "なに" },
      { word: "何", reading: "なに", sentence: "マイクラで□を作るか友だちとそうだんした。", blankIndex: 5, targetReading: "なに" },
    ],
  },
  {
    character: "画",
    readings: { onyomi: ["ガ", "カク", "エ", "カイ"], kunyomi: ["えがく", "かくする", "かぎる", "はかりごと", "はかる"] },
    strokes: 8,
    examples: [
      { word: "画", reading: "が", sentence: "このまんがは一□めからおもしろい。", blankIndex: 7, targetReading: "が" },
      { word: "画", reading: "が", sentence: "つぎの一□でえがかんせいする。", blankIndex: 4, targetReading: "が" },
    ],
  },
  {
    character: "会",
    readings: { onyomi: ["カイ", "エ"], kunyomi: ["あう", "あわせる", "あつまる"] },
    strokes: 6,
    examples: [
      { word: "会", reading: "あ", sentence: "こんど友だちに□える日がたのしみ。", blankIndex: 7, targetReading: "あ" },
      { word: "会", reading: "あ", sentence: "カービィの大会でみんなに□った。", blankIndex: 12, targetReading: "あ" },
    ],
  },
  {
    character: "外",
    readings: { onyomi: ["ガイ", "ゲ"], kunyomi: ["そと", "ほか", "はずす", "はずれる", "と"] },
    strokes: 5,
    examples: [
      { word: "外", reading: "そと", sentence: "マイクラの家の□でオオカミが待っていた。", blankIndex: 7, targetReading: "そと" },
      { word: "外", reading: "そと", sentence: "雨がやんだから□であそぼう。", blankIndex: 7, targetReading: "そと" },
    ],
  },
  {
    character: "角",
    readings: { onyomi: ["カク"], kunyomi: ["かど", "つの"] },
    strokes: 7,
    examples: [
      { word: "角", reading: "かど", sentence: "エアライドのコースの□をうまく曲がった。", blankIndex: 10, targetReading: "かど" },
      { word: "角", reading: "かど", sentence: "つくえの□にひじをぶつけた。", blankIndex: 4, targetReading: "かど" },
    ],
  },
  {
    character: "楽",
    readings: { onyomi: ["ガク", "ラク", "ゴウ"], kunyomi: ["たのしい", "たのしむ", "このむ"] },
    strokes: 13,
    examples: [
      { word: "楽", reading: "たの", sentence: "カービィのエアライドはみんなでやると□しい。", blankIndex: 18, targetReading: "たの" },
      { word: "楽", reading: "たの", sentence: "マイクラでひみつ基地を作るのは□しい。", blankIndex: 15, targetReading: "たの" },
    ],
  },
  {
    character: "顔",
    readings: { onyomi: ["ガン"], kunyomi: ["かお"] },
    strokes: 18,
    examples: [
      { word: "顔", reading: "かお", sentence: "カービィのぬいぐるみはかわいい□をしている。", blankIndex: 15, targetReading: "かお" },
      { word: "顔", reading: "かお", sentence: "うれしくて□がにこにこした。", blankIndex: 5, targetReading: "かお" },
    ],
  },
  {
    character: "汽",
    readings: { onyomi: ["キ"], kunyomi: [] },
    strokes: 7,
    examples: [
      { word: "汽", reading: "き", sentence: "□車にのる前にえきを見上げた。", blankIndex: 0, targetReading: "き" },
      { word: "汽", reading: "き", sentence: "えほんに黒い□車が出てきた。", blankIndex: 6, targetReading: "き" },
    ],
  },
  {
    character: "弓",
    readings: { onyomi: ["キュウ"], kunyomi: ["ゆみ"] },
    strokes: 3,
    examples: [
      { word: "弓", reading: "ゆみ", sentence: "マイクラで□をつかってスケルトンとたたかった。", blankIndex: 5, targetReading: "ゆみ" },
      { word: "弓", reading: "ゆみ", sentence: "おまつりでおもちゃの□をもった。", blankIndex: 10, targetReading: "ゆみ" },
    ],
  },
  {
    character: "京",
    readings: { onyomi: ["キョウ", "ケイ", "キン"], kunyomi: ["みやこ"] },
    strokes: 8,
    examples: [
      { word: "京", reading: "みやこ", sentence: "むかしの□におしろがあった。", blankIndex: 4, targetReading: "みやこ" },
      { word: "京", reading: "みやこ", sentence: "本で□のくらしを読んだ。", blankIndex: 2, targetReading: "みやこ" },
    ],
  },
  {
    character: "原",
    readings: { onyomi: ["ゲン"], kunyomi: ["はら"] },
    strokes: 10,
    examples: [
      { word: "原", reading: "はら", sentence: "マイクラの草□を馬で走った。", blankIndex: 6, targetReading: "はら" },
      { word: "原", reading: "はら", sentence: "広い□っぱで虫をさがした。", blankIndex: 2, targetReading: "はら" },
    ],
  },
  {
    character: "戸",
    readings: { onyomi: ["コ"], kunyomi: ["と"] },
    strokes: 4,
    examples: [
      { word: "戸", reading: "と", sentence: "マイクラの家の□を木で作った。", blankIndex: 7, targetReading: "と" },
      { word: "戸", reading: "と", sentence: "へやの□をそっとしめた。", blankIndex: 3, targetReading: "と" },
    ],
  },
  {
    character: "午",
    readings: { onyomi: ["ゴ"], kunyomi: ["うま"] },
    strokes: 4,
    examples: [
      { word: "午", reading: "ご", sentence: "正□になったらきゅうしょくだ。", blankIndex: 1, targetReading: "ご" },
      { word: "午", reading: "ご", sentence: "正□のチャイムがなった。", blankIndex: 1, targetReading: "ご" },
    ],
  },
  {
    character: "後",
    readings: { onyomi: ["ゴ", "コウ"], kunyomi: ["のち", "うしろ", "あと", "おくれる"] },
    strokes: 9,
    examples: [
      { word: "後", reading: "うし", sentence: "カービィの□ろを友だちが走ってきた。", blankIndex: 5, targetReading: "うし" },
      { word: "後", reading: "うし", sentence: "いすの□ろにかばんをおいた。", blankIndex: 3, targetReading: "うし" },
    ],
  },
  {
    character: "広",
    readings: { onyomi: ["コウ"], kunyomi: ["ひろい", "ひろまる", "ひろめる", "ひろがる", "ひろげる"] },
    strokes: 5,
    examples: [
      { word: "広", reading: "ひろ", sentence: "エアライドのコースは思ったより□い。", blankIndex: 15, targetReading: "ひろ" },
      { word: "広", reading: "ひろ", sentence: "マイクラのへやをもっと□くした。", blankIndex: 11, targetReading: "ひろ" },
    ],
  },
  {
    character: "交",
    readings: { onyomi: ["コウ"], kunyomi: ["まじわる", "まじえる", "まじる", "まざる", "まぜる", "かう", "かわす", "こもごも"] },
    strokes: 6,
    examples: [
      { word: "交", reading: "まじ", sentence: "赤と青を□ぜるとむらさきになる。", blankIndex: 4, targetReading: "まじ" },
      { word: "交", reading: "まじ", sentence: "人が□じるところでは走らない。", blankIndex: 2, targetReading: "まじ" },
    ],
  },
  {
    character: "光",
    readings: { onyomi: ["コウ"], kunyomi: ["ひかる", "ひかり"] },
    strokes: 6,
    examples: [
      { word: "光", reading: "ひかり", sentence: "カービィがすったスターの□がまぶしい。", blankIndex: 12, targetReading: "ひかり" },
      { word: "光", reading: "ひかり", sentence: "あさの□がまどからさした。", blankIndex: 3, targetReading: "ひかり" },
    ],
  },
  {
    character: "考",
    readings: { onyomi: ["コウ"], kunyomi: ["かんがえる", "かんがえ"] },
    strokes: 6,
    examples: [
      { word: "考", reading: "かんが", sentence: "つぎにどこをほるかマイクラで□えた。", blankIndex: 14, targetReading: "かんが" },
      { word: "考", reading: "かんが", sentence: "こたえをじっくり□えよう。", blankIndex: 8, targetReading: "かんが" },
    ],
  },
  {
    character: "高",
    readings: { onyomi: ["コウ"], kunyomi: ["たかい", "たか", "だか", "たかまる", "たかめる"] },
    strokes: 10,
    examples: [
      { word: "高", reading: "たか", sentence: "エアライドで□くジャンプできた。", blankIndex: 6, targetReading: "たか" },
      { word: "高", reading: "たか", sentence: "たなの上は□くて手がとどかない。", blankIndex: 5, targetReading: "たか" },
    ],
  },
  {
    character: "黄",
    readings: { onyomi: ["コウ", "オウ"], kunyomi: ["き", "こ"] },
    strokes: 11,
    examples: [
      { word: "黄", reading: "き", sentence: "マイクラの花の中に□い花がさいていた。", blankIndex: 9, targetReading: "き" },
      { word: "黄", reading: "き", sentence: "カービィのマシンに□い線をかいた。", blankIndex: 9, targetReading: "き" },
    ],
  },
  {
    character: "合",
    readings: { onyomi: ["ゴウ", "ガッ", "カッ"], kunyomi: ["あう", "あい", "あわす", "あわせる"] },
    strokes: 6,
    examples: [
      { word: "合", reading: "あ", sentence: "友だちとタイミングを□わせてジャンプした。", blankIndex: 10, targetReading: "あ" },
      { word: "合", reading: "あ", sentence: "いきを□わせて歌った。", blankIndex: 3, targetReading: "あ" },
    ],
  },
  {
    character: "谷",
    readings: { onyomi: ["コク"], kunyomi: ["たに", "きわまる"] },
    strokes: 7,
    examples: [
      { word: "谷", reading: "たに", sentence: "山の下に深い□が見えた。", blankIndex: 6, targetReading: "たに" },
      { word: "谷", reading: "たに", sentence: "川が□をながれている。", blankIndex: 2, targetReading: "たに" },
    ],
  },
  {
    character: "黒",
    readings: { onyomi: ["コク"], kunyomi: ["くろ", "くろずむ", "くろい"] },
    strokes: 11,
    examples: [
      { word: "黒", reading: "くろ", sentence: "エンダーマンのからだは□く見えた。", blankIndex: 11, targetReading: "くろ" },
      { word: "黒", reading: "くろ", sentence: "□いねこがみちをわたった。", blankIndex: 0, targetReading: "くろ" },
    ],
  },
  {
    character: "細",
    readings: { onyomi: ["サイ"], kunyomi: ["ほそい", "ほそる", "こまか", "こまかい"] },
    strokes: 11,
    examples: [
      { word: "細", reading: "ほそ", sentence: "□い道でもマイクラならまっすぐ歩けた。", blankIndex: 0, targetReading: "ほそ" },
      { word: "細", reading: "ほそ", sentence: "このえんぴつは□くて書きやすい。", blankIndex: 7, targetReading: "ほそ" },
    ],
  },
  {
    character: "止",
    readings: { onyomi: ["シ"], kunyomi: ["とまる", "どまり", "とめる", "どめ", "とどめる", "とどめ", "とどまる", "やめる", "やむ", "よす", "さす", "さし"] },
    strokes: 4,
    examples: [
      { word: "止", reading: "と", sentence: "赤しんごうでぴたっと□まった。", blankIndex: 10, targetReading: "と" },
      { word: "止", reading: "と", sentence: "マイクラの水を□めるために土をおいた。", blankIndex: 7, targetReading: "と" },
    ],
  },
  {
    character: "市",
    readings: { onyomi: ["シ"], kunyomi: ["いち"] },
    strokes: 5,
    examples: [
      { word: "市", reading: "いち", sentence: "あさ□でやさいを買った。", blankIndex: 2, targetReading: "いち" },
      { word: "市", reading: "いち", sentence: "おまつりの□でりんごあめを見つけた。", blankIndex: 5, targetReading: "いち" },
    ],
  },
  {
    character: "姉",
    readings: { onyomi: ["シ"], kunyomi: ["あね", "はは"] },
    strokes: 8,
    examples: [
      { word: "姉", reading: "お", sentence: "□ちゃんといっしょにカービィであそんだ。", blankIndex: 0, targetReading: "お" },
      { word: "姉", reading: "お", sentence: "□さんがしゅくだいを見てくれた。", blankIndex: 0, targetReading: "お" },
    ],
  },
  {
    character: "秋",
    readings: { onyomi: ["シュウ"], kunyomi: ["あき", "とき"] },
    strokes: 9,
    examples: [
      { word: "秋", reading: "あき", sentence: "□はどんぐりひろいがたのしい。", blankIndex: 0, targetReading: "あき" },
      { word: "秋", reading: "あき", sentence: "サンマがおいしいのは□だね。", blankIndex: 10, targetReading: "あき" },
    ],
  },
  {
    character: "週",
    readings: { onyomi: ["シュウ"], kunyomi: [] },
    strokes: 11,
    examples: [
      { word: "週", reading: "しゅう", sentence: "来□のえんそくがたのしみだ。", blankIndex: 1, targetReading: "しゅう" },
      { word: "週", reading: "しゅう", sentence: "今□はカービィを一回だけにする。", blankIndex: 1, targetReading: "しゅう" },
    ],
  },
  {
    character: "場",
    readings: { onyomi: ["ジョウ", "チョウ"], kunyomi: ["ば"] },
    strokes: 12,
    examples: [
      { word: "場", reading: "ば", sentence: "エアライドのスタート□にみんな集まった。", blankIndex: 10, targetReading: "ば" },
      { word: "場", reading: "ば", sentence: "こうえんはボールあそびの□になった。", blankIndex: 12, targetReading: "ば" },
    ],
  },
  {
    character: "色",
    readings: { onyomi: ["ショク", "シキ"], kunyomi: ["いろ"] },
    strokes: 6,
    examples: [
      { word: "色", reading: "いろ", sentence: "カービィはピンク□がよくにあう。", blankIndex: 8, targetReading: "いろ" },
      { word: "色", reading: "いろ", sentence: "マイクラで好きな□の羊毛を集めた。", blankIndex: 8, targetReading: "いろ" },
    ],
  },
  {
    character: "心",
    readings: { onyomi: ["シン"], kunyomi: ["こころ", "ごころ"] },
    strokes: 4,
    examples: [
      { word: "心", reading: "こころ", sentence: "むずかしくてもやってみようと思う□が大事だ。", blankIndex: 16, targetReading: "こころ" },
      { word: "心", reading: "こころ", sentence: "やさしいことばで□があたたかくなった。", blankIndex: 8, targetReading: "こころ" },
    ],
  },
  {
    character: "図",
    readings: { onyomi: ["ズ", "ト"], kunyomi: ["え", "はかる"] },
    strokes: 7,
    examples: [
      { word: "図", reading: "え", sentence: "たからの□をノートにかいた。", blankIndex: 4, targetReading: "え" },
      { word: "図", reading: "え", sentence: "先生がかいた□を見て作り方がわかった。", blankIndex: 6, targetReading: "え" },
    ],
  },
  {
    character: "西",
    readings: { onyomi: ["セイ", "サイ", "ス"], kunyomi: ["にし"] },
    strokes: 6,
    examples: [
      { word: "西", reading: "にし", sentence: "たいようがしずむ方は□だよ。", blankIndex: 10, targetReading: "にし" },
      { word: "西", reading: "にし", sentence: "マイクラで□がわへ歩いた。", blankIndex: 5, targetReading: "にし" },
    ],
  },
  {
    character: "声",
    readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["こえ", "こわ"] },
    strokes: 7,
    examples: [
      { word: "声", reading: "こえ", sentence: "カービィの『ぽよ』という□がかわいい。", blankIndex: 12, targetReading: "こえ" },
      { word: "声", reading: "こえ", sentence: "大きな□でへんじをした。", blankIndex: 3, targetReading: "こえ" },
    ],
  },
  {
    character: "星",
    readings: { onyomi: ["セイ", "ショウ"], kunyomi: ["ほし", "ぼし"] },
    strokes: 9,
    examples: [
      { word: "星", reading: "ほし", sentence: "夜空の□をかぞえた。", blankIndex: 3, targetReading: "ほし" },
      { word: "星", reading: "ほし", sentence: "カービィみたいな□のもようをかいた。", blankIndex: 8, targetReading: "ほし" },
    ],
  },
  {
    character: "前",
    readings: { onyomi: ["ゼン"], kunyomi: ["まえ"] },
    strokes: 9,
    examples: [
      { word: "前", reading: "まえ", sentence: "先生の□であいさつした。", blankIndex: 3, targetReading: "まえ" },
      { word: "前", reading: "まえ", sentence: "ゴールの□でころんでしまった。", blankIndex: 4, targetReading: "まえ" },
    ],
  },
  {
    character: "組",
    readings: { onyomi: ["ソ"], kunyomi: ["くむ", "くみ", "ぐみ"] },
    strokes: 11,
    examples: [
      { word: "組", reading: "くみ", sentence: "二人□でブロックをはこんだ。", blankIndex: 2, targetReading: "くみ" },
      { word: "組", reading: "くみ", sentence: "同じ□の友だちとマイクラの話をした。", blankIndex: 2, targetReading: "くみ" },
    ],
  },
  {
    character: "多",
    readings: { onyomi: ["タ"], kunyomi: ["おおい", "まさに", "まさる"] },
    strokes: 6,
    examples: [
      { word: "多", reading: "おお", sentence: "マイクラの村には人が□かった。", blankIndex: 10, targetReading: "おお" },
      { word: "多", reading: "おお", sentence: "今日はやることが□い。", blankIndex: 8, targetReading: "おお" },
    ],
  },
  {
    character: "太",
    readings: { onyomi: ["タイ", "タ"], kunyomi: ["ふとい", "ふとる"] },
    strokes: 4,
    examples: [
      { word: "太", reading: "ふと", sentence: "マイクラの木は□いみきが目立つ。", blankIndex: 7, targetReading: "ふと" },
      { word: "太", reading: "ふと", sentence: "このロープは□くてじょうぶだ。", blankIndex: 6, targetReading: "ふと" },
    ],
  },
  {
    character: "茶",
    readings: { onyomi: ["チャ", "サ"], kunyomi: [] },
    strokes: 9,
    examples: [
      { word: "茶", reading: "ちゃ", sentence: "おやつの時間にむぎ□をのんだ。", blankIndex: 9, targetReading: "ちゃ" },
      { word: "茶", reading: "ちゃ", sentence: "くまのぬいぐるみは□色だ。", blankIndex: 9, targetReading: "ちゃ" },
    ],
  },
  {
    character: "鳥",
    readings: { onyomi: ["チョウ"], kunyomi: ["とり"] },
    strokes: 11,
    examples: [
      { word: "鳥", reading: "とり", sentence: "木の上で□がないている。", blankIndex: 4, targetReading: "とり" },
      { word: "鳥", reading: "とり", sentence: "マイクラでオウムみたいな□を見つけたい。", blankIndex: 12, targetReading: "とり" },
    ],
  },
  {
    character: "直",
    readings: { onyomi: ["チョク", "ジキ", "ジカ"], kunyomi: ["ただちに", "なおす", "なおる", "なおき", "すぐ"] },
    strokes: 8,
    examples: [
      { word: "直", reading: "なお", sentence: "こわれた線路をすぐに□した。", blankIndex: 10, targetReading: "なお" },
      { word: "直", reading: "なお", sentence: "まちがえた字を□して書きなおした。", blankIndex: 7, targetReading: "なお" },
    ],
  },
  {
    character: "弟",
    readings: { onyomi: ["テイ", "ダイ", "デ"], kunyomi: ["おとうと"] },
    strokes: 7,
    examples: [
      { word: "弟", reading: "おとうと", sentence: "□がマイクラで犬に名前をつけた。", blankIndex: 0, targetReading: "おとうと" },
      { word: "弟", reading: "おとうと", sentence: "□とこうえんでおにごっこをした。", blankIndex: 0, targetReading: "おとうと" },
    ],
  },
  {
    character: "店",
    readings: { onyomi: ["テン"], kunyomi: ["みせ", "たな"] },
    strokes: 8,
    examples: [
      { word: "店", reading: "みせ", sentence: "ゲームの帰りにおかしの□へよった。", blankIndex: 11, targetReading: "みせ" },
      { word: "店", reading: "みせ", sentence: "マイクラの村の□でパンを見つけた。", blankIndex: 7, targetReading: "みせ" },
    ],
  },
  {
    character: "点",
    readings: { onyomi: ["テン"], kunyomi: ["つける", "つく", "たてる", "さす", "とぼす", "ともす", "ぼち"] },
    strokes: 9,
    examples: [
      { word: "点", reading: "つ", sentence: "テストで百□がとれた。", blankIndex: 5, targetReading: "つ" },
      { word: "点", reading: "つ", sentence: "サイコロの三□をゆびでなぞった。", blankIndex: 6, targetReading: "つ" },
    ],
  },
  {
    character: "刀",
    readings: { onyomi: ["トウ"], kunyomi: ["かたな", "そり"] },
    strokes: 2,
    examples: [
      { word: "刀", reading: "かたな", sentence: "むかしのえほんに□が出てきた。", blankIndex: 8, targetReading: "かたな" },
      { word: "刀", reading: "かたな", sentence: "おまつりのおもちゃの□をふった。", blankIndex: 10, targetReading: "かたな" },
    ],
  },
  {
    character: "東",
    readings: { onyomi: ["トウ"], kunyomi: ["ひがし"] },
    strokes: 8,
    examples: [
      { word: "東", reading: "ひがし", sentence: "あさ日がのぼる方は□だよ。", blankIndex: 9, targetReading: "ひがし" },
      { word: "東", reading: "ひがし", sentence: "マイクラの地図で□へすすんだ。", blankIndex: 8, targetReading: "ひがし" },
    ],
  },
  {
    character: "頭",
    readings: { onyomi: ["トウ", "ズ", "ト"], kunyomi: ["あたま", "かしら", "がしら", "かぶり"] },
    strokes: 16,
    examples: [
      { word: "頭", reading: "あたま", sentence: "ねる前に□をやさしくあらった。", blankIndex: 4, targetReading: "あたま" },
      { word: "頭", reading: "あたま", sentence: "カービィの人形を□の上にのせた。", blankIndex: 8, targetReading: "あたま" },
    ],
  },
  {
    character: "同",
    readings: { onyomi: ["ドウ"], kunyomi: ["おなじ"] },
    strokes: 6,
    examples: [
      { word: "同", reading: "おな", sentence: "ぼくと□じ色のぼうしだ。", blankIndex: 3, targetReading: "おな" },
      { word: "同", reading: "おな", sentence: "マイクラで□じ形の家を二こ作った。", blankIndex: 5, targetReading: "おな" },
    ],
  },
  {
    character: "風",
    readings: { onyomi: ["フウ", "フ"], kunyomi: ["かぜ", "かざ"] },
    strokes: 9,
    examples: [
      { word: "風", reading: "かぜ", sentence: "マイクラの草が□でゆれて見えた。", blankIndex: 7, targetReading: "かぜ" },
      { word: "風", reading: "かぜ", sentence: "つよい□でぼうしが飛んだ。", blankIndex: 3, targetReading: "かぜ" },
    ],
  },
  {
    character: "聞",
    readings: { onyomi: ["ブン", "モン"], kunyomi: ["きく", "きこえる"] },
    strokes: 14,
    examples: [
      { word: "聞", reading: "き", sentence: "カービィの音楽を□きながら絵をかいた。", blankIndex: 8, targetReading: "き" },
      { word: "聞", reading: "き", sentence: "先生の話をよく□こう。", blankIndex: 7, targetReading: "き" },
    ],
  },
  {
    character: "米",
    readings: { onyomi: ["ベイ", "マイ", "メエトル"], kunyomi: ["こめ", "よね"] },
    strokes: 6,
    examples: [
      { word: "米", reading: "こめ", sentence: "あたたかいごはんは□からできる。", blankIndex: 9, targetReading: "こめ" },
      { word: "米", reading: "こめ", sentence: "田んぼで□がみのっていた。", blankIndex: 4, targetReading: "こめ" },
    ],
  },
  {
    character: "歩",
    readings: { onyomi: ["ホ", "ブ", "フ"], kunyomi: ["あるく", "あゆむ"] },
    strokes: 8,
    examples: [
      { word: "歩", reading: "ある", sentence: "マイクラの村まで□いて行ってみた。", blankIndex: 8, targetReading: "ある" },
      { word: "歩", reading: "ある", sentence: "しんごうを見てゆっくり□こう。", blankIndex: 11, targetReading: "ある" },
    ],
  },
  {
    character: "妹",
    readings: { onyomi: ["マイ"], kunyomi: ["いもうと"] },
    strokes: 8,
    examples: [
      { word: "妹", reading: "いもうと", sentence: "□がカービィのえを上手にかいた。", blankIndex: 0, targetReading: "いもうと" },
      { word: "妹", reading: "いもうと", sentence: "□といっしょにブランコにのった。", blankIndex: 0, targetReading: "いもうと" },
    ],
  },
  {
    character: "毛",
    readings: { onyomi: ["モウ"], kunyomi: ["け"] },
    strokes: 4,
    examples: [
      { word: "毛", reading: "け", sentence: "ひつじの□はふわふわだ。", blankIndex: 4, targetReading: "け" },
      { word: "毛", reading: "け", sentence: "マイクラのオオカミの□なみは白い。", blankIndex: 10, targetReading: "け" },
    ],
  },
  {
    character: "曜",
    readings: { onyomi: ["ヨウ"], kunyomi: [] },
    strokes: 18,
    examples: [
      { word: "曜", reading: "よう", sentence: "日□日は家ぞくで出かける。", blankIndex: 1, targetReading: "よう" },
      { word: "曜", reading: "よう", sentence: "金□日のよるはカービィであそぶ。", blankIndex: 1, targetReading: "よう" },
    ],
  },
];
