const express = require('express');
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();

require('./config/dbConfig');

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// esse endpoint carrega agora os arquivos estaticos presentes em upload e assime
// é possível acessar eles pelo front
app.use('/files', express.static(path.resolve( __dirname, '..', 'uploads')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});