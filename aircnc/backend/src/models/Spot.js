const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    techs: [String], 
    price:{
        type: Number
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    },
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);