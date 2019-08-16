const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./src/routes');
require('./src/services/database');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`The server is on in port ${PORT}`);
});
