const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedUser = await Dev.findById(user);
        const targetUser = await Dev.findById(devId);

        if(!targetUser){
            res.status(400).json({ error: 'User not exists' });
        }

        loggedUser.dislikes.push(targetUser._id);
        loggedUser.save();

        res.json(loggedUser);

    }
}