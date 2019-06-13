const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
    .then(() => {
        console.log('Database is connect');
    }).catch(error => {
        console.log(`Error to connect ${error}`);
    });