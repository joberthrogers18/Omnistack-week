const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer.js');

const route = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

route.get("/boxes", BoxController.show);
route.post("/boxes", BoxController.store);
// No upload pode ser single ou array caso queira dar mais upload
// 'file' é o nome do atributo do post que o multer irá pegar para fazer o upload do arquivo
route.post("/files", multer(multerConfig).single('file') ,FileController.store)

module.exports = route;