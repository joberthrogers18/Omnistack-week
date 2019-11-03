const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res){

    },

    async store(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            res.status(404).json({error: 'User was not found'});
        }

        const [ tech, created ] = await Tech.findOrCreate({
            where:{ name }
        })

        // addTech is create when the table N-M was created
        // user_tech, i need pass the object and not only the id of tech
        await user.addTech(tech);

        return res.json(tech);
    }
}