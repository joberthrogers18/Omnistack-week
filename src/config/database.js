const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joberth:j123456@cluster0-prjv9.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log('Database is connect now!');
    }).catch(error => {
        console.log(`Error mongo: ${error}`)
    });

