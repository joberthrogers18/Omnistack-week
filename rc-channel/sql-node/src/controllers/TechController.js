const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { user_id }= req.params;
        
        // its like a join in tables get all the techs
        // return the attributes from user and the list of techs in json
        const user = await User.findByPk(user_id,{
            include: {association: 'techs', through: {attributes: []}}
        });

        if( !user ){
            return res.status(400).json({error: 'User was not found'});
        }

        res.json(user);

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
    },

    async destroy(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            res.status(400).json({error: 'User not found'});
        }

        const tech = await Tech.findOne({ where: {name}});

        // removeTech is created automaticly when n-m relationship is created
        // table user_tech
        await user.removeTech(tech);

        return res.json();
    }
}