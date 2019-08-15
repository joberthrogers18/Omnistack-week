const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (req, res){

        const { username } = req.body;

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