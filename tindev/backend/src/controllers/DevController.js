const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(req, res){
        const { user } = req.headers;
        
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: loggedDev._id }},
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ],
        });

        return res.json(users);
    },

    async store (req, res){

        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if(userExists) {
            console.log(userExists)
            return res.json(userExists);
        }

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            
            try {
                const { name, bio, avatar_url: avatar } = response.data;

                const dev = await Dev.create({
                    name,
                    user: username,
                    bio,
                    avatar
                });

                res.status(200).json(dev);
            }
            catch (e) {
                return res.status(406).json(e);
            }
        }
        catch (e) {
            return res.status(404).json(e);
        }

    }
};