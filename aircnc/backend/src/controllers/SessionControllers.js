const User = require('../models/User');

module.exports = {
    async store(req, res) {

        let user = await User.findOne({ email: req.body.email });
        
        if(!user){
            user = await User.create({ email: req.body.email});
        }

        res.json(user);
    }
};