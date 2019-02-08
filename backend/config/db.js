const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://joberth:j123456@ds221115.mlab.com:21115/oministack", 
    {useNewUrlParser: true}
    )
    .then(() => {
        console.log("Mongodb is on");
    }).catch(err => {
        console.log("Error in connect mongo: " + err);
    });

module.exports = mongoose;
