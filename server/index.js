const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
