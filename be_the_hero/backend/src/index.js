const express = require('express');
const app = express();
const routes = require('./routes'); 
const cors = require('cors');

const PORT = process.env.PORT || 3333;

app.use(cors());

app.use(express.json())
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running in ther port ${PORT}`);
})