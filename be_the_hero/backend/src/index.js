const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({hello: 'world'});
});

app.listen(PORT, () => {
  console.log(`Server is running in ther port ${PORT}`);
})