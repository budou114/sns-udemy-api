## インストール手順
1. Docker と Docker Compose がインストールされていることを確認する。
2. [sns-udemy-infra](https://github.com/budou114/sns-udemy-infra)の環境構築が完了していることを確認する。
3. リポジトリをクローンまたはダウンロードする。
4. .env.exampleをコピーして、.envのファイルを作り編集する。
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/sns-udemy?schema=public"  # DBのURLを変更する
SECRET_KEY="SECRET_KEY"                                                               # SECRET_KEYを変更する
PORT=5050                                                                             # ポート番号を変更する
```
5. プロジェクトディレクトリで下記コマンドを実行する。
```
# 依存関係のインストールを実行する。
npm install

# prismaのマイグレーションコマンドを実行する、
npx prisma migrate dev

# サーバーを起動する。
npm run dev
```
