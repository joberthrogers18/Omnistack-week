const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

// Não vai para a base de dados, apenas virtual, é necessário
// colocar as opções abaixo do timestamp para que permita essa função de virtuals
FileSchema.virtual('url').get(function () {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', FileSchema);