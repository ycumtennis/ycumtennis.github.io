# 横浜市立大学医学部硬式テニス部 GitHub Pages

## 公開方法
1. GitHubで新しいPublic repositoryを作成（例: `ycu-tennis`）
2. このフォルダ内のファイルをすべてrepository直下へアップロード
3. GitHub → Settings → Pages
4. Build and deployment: `Deploy from a branch`
5. Branch: `main` / folder: `/ (root)` → Save
6. 数分後、`https://ユーザー名.github.io/ycu-tennis/` で公開

## 最初に変更する場所
- `index.html`: トップの文章、NEWS、最近の試合結果
- `members.html`: スタッフ・部員
- `results.html`: 戦績
- `schedule.html`: 年間予定
- `history.html`: 沿革
- `contact.html`: 問い合わせ先
- `assets/style.css`: 色・余白・文字サイズ

## 写真について
Web用は 1枚 150–400KB 程度のWebP推奨。
`assets/images/` フォルダを作り、画像を保存してHTMLから参照してください。

## 次の改良候補
- NEWSをMarkdown更新方式にする（Jekyll）
- 部員データを1つのデータファイルから自動生成
- Google Calendar連携
- Google Forms埋め込み
- Instagram / YouTube導線
