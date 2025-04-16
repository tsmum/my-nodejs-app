import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! これはNode.js 20を使用したAzure App Serviceにデプロイされたアプリです。');
});

app.listen(port, () => {
  console.log(`アプリが http://localhost:${port} で実行中`);
});