GitHub RESULTS 修正版

今回の修正:
- results.xlsx に Rubbers シートを追加
- match.html は MENS2026/WOMENS2026/NURSING2026 のセル位置を解析しません
- FULL RESULT は Rubbers の MatchID を直接検索します

これにより、詳細シートの左右配置や試合順に依存しません。

GitHubで上書きする3ファイル:
1. results.html
2. match.html
3. results.xlsx

style.css / site.js は変更不要です。

今後Excelを更新するとき:
- 通常の管理用シートを編集しただけでは Rubbers は自動生成されません。
- 現在のサイト用 results.xlsx では Rubbers が詳細ページの参照元です。
