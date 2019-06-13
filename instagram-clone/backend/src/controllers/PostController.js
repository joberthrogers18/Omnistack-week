const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
//filesyatem biblioteca
const fs = require('fs');

    module.exports = {
        async index(req, res) {
            res.json(await Post.find().sort('-createdAt'));
        },

        async store(req, res) {
            const { author, place, description, hashtags } = req.body;
            // pega o filename da imagem e transforma na variável image
            const { filename: image } = req.file;

            const [name, ext] = image.split('.');
            const fileName = `${name}.jpg`;

            //resize as imagens para se adequar ao react native
            await sharp(req.file.path)
                .resize(500)
                .jpeg({ quality: 70 })
                .toFile(
                    path.resolve(req.file.destination, 'resized', fileName)
                );
            
            //apagar as imagens que não foram redimendionadas
            fs.unlinkSync(req.file.path);

            const post = await Post.create({
                author,
                place,
                description,
                hashtags,
                image: fileName
            })

            // emitir no socket
            req.io.emit('post', post)

            res.json(post);
        }
    }