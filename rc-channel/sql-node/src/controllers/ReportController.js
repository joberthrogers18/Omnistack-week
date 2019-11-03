const User = require('../models/User');
const { Op } = require('sequelize'); 

module.exports = {
    async show(req, res){
        // FInd all users which there is the final gmail.com 
        // From of all this users i wanna search live in street x
        // From this users i wanna all the techs which start with React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%gmail.com%'
                }
            },
            include: [
                { association: 'adresses', where: {street: 'x'}}, // addresses
                { association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: '%React%'
                        }
                    }   
                } // techs
            ]
        });

        return res.json(users);
    }
 };