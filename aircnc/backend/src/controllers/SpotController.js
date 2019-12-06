const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        // procura tech dentro de um array de techs
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){
        const { company, price, techs } = req.body;
        const thumbnail = req.file.filename;

        let arrayTechs = techs.split(',');

        arrayTechs.map(tech => {
            tech.trim();
        });

        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "User does not exists!!"});
        }
 
        const spot = await Spot.create({
            thumbnail, 
            company,
            price,
            techs: arrayTechs,
            user: user_id
        }); 

        return res.json(spot);
    }
}