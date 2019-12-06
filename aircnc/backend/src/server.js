const express = require('express');
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

require('./config/dbConfig');

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});