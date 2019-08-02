const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./src/routes');
const cors = require('cors');
const database = require('./src/config/database');

app.use(routes);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is on in port: ${PORT}`);
});