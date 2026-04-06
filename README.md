# きっずらぼ (kid-lab)

小学 1〜3 年生向けの漢字・算数学習 Web アプリです。

## 目的・背景

子供が楽しみながら漢字と算数を自主的に学べる環境を提供します。正答状況に応じた適応学習アルゴリズムを採用し、得意・不得意に合わせた問題が出題されます。進捗は localStorage に保存されるため、アカウント登録なしで使えます。

## 機能

- **漢字**: 穴あき問題・4 択問題（1〜3 年生配当漢字）
- **算数**: 計算問題・文章題・単元別テスト・まとめテスト
- **適応学習**: 習熟度レベルに応じた出題（Leitner 法ベース）
- **成績確認**: セッション履歴・習熟度・バッジ・星の獲得数

## 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 16 (App Router) + TypeScript |
| スタイリング | Tailwind CSS v4 |
| アニメーション | framer-motion |
| データ保存 | localStorage (`kid-lab:progress`) |
| 状態管理 | React useState / カスタム hooks |

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router ページ
│   ├── page.tsx            # トップ (学年選択)
│   ├── grade/[grade]/      # 学年別ページ
│   │   ├── page.tsx        # 教科選択
│   │   ├── kanji/          # 漢字 (fill / choice)
│   │   └── math/           # 算数 (calc / word / unit-test / summary-test)
│   └── progress/page.tsx   # 成績確認
├── components/
│   ├── ui/                 # Button, Card, ProgressBar, StarRating, Badge
│   ├── layout/             # Header, PageWrapper
│   ├── problem/            # ProblemShell, FillInBlank, MultipleChoice, CalcInput, WordProblem
│   └── feedback/           # AnswerFeedback, SessionSummary, StarBurst
├── data/
│   ├── kanji/              # grade1-3.ts + generator.ts
│   └── math/               # generators.ts
├── hooks/                  # useProgress, useProblemSession, useLocalStorage
├── lib/                    # adaptive.ts, storage.ts, scoring.ts, utils.ts
└── types/                  # problem.ts, progress.ts, common.ts
```

## セットアップ・使い方

### 依存関係インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くとトップページが表示されます。

### 本番ビルド

```bash
npm run build
npm start
```

## 適応学習の仕組み

習熟度は 5 段階で管理されます。

| レベル | 遷移条件 |
|---|---|
| new → learning | 初回回答時 |
| learning → developing | 正答率 60% 超 |
| developing → mastered | 正答率 80% 以上 かつ 3 回連続正解 |
| mastered → review | 最終回答から 3 日以上経過 |
| review → mastered | 復習で正解 |

10 問セッションの出題配分は `new: 2 問 / learning: 4 問 / developing: 2 問 / mastered: 1 問 / review: 1 問` です。

## 検証方法

1. `npm run dev` でローカル起動し、全ページ遷移を確認します。
2. 各問題形式で正解・不正解の両パターンを操作確認します。
3. DevTools > Application > localStorage で `kid-lab:progress` の保存・更新を確認します。
4. ブラウザリロード後にデータが保持されていることを確認します。

---

## 更新履歴

### v1.0.0 (2026-04-06)

- 初回リリース
- 漢字穴あき問題・4 択問題 (1〜3 年生)
- 算数計算問題・文章題・単元別テスト・まとめテスト (1〜3 年生)
- 適応学習アルゴリズム実装 (Leitner 法ベース)
- 成績確認ページ (セッション履歴・バッジ・星)
- framer-motion による正解時アニメーション
