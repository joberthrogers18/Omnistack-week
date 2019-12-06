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
        type: Number,
        required: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);