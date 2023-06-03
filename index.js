const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
