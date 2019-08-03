const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/config/database');
const path =require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, 'tmp')));

app.listen(PORT, () => {
    console.log(`Server is on in port: ${PORT}`);
});