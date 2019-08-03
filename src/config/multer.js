const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// "dest" destino para a pasta tmp na raiz
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            // gerar número randomico de bytes
            crypto.randomBytes(16, (error, hash) => {
                if(error) cb(error);

                //criou um nome original para um nome de um file
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};