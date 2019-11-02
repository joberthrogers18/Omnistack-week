const Addresses = require('../models/Adresses');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const {user_id} = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'adresses' }
        });

        if(!user){
            return res.status(400).json({error: 'User not found'});
        }

        return res.status(200).json(user);
    },

    async store(req, res){
        const {user_id} = req.params;
        const {zipcode, street, number} = req.body;
        
        const user = await User.findByPk(user_id);
        
        if(!user){
            return res.status(400).json({error: 'User not found'});            
        }
        
        const addr = await Addresses.create({ 
            zipcode,
            street,
            number,
            user_id: 1
        });

        return res.json({user_id: user})

        // return res.json(addresses);
    }
}