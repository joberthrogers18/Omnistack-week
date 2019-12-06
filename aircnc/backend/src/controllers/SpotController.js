const Spot = require('../models/Spot');

module.exports = {
    async store(req, res){
        const { company, price, techs } = req.body;
        const thumbnail = req.file.filename;

        let arrayTechs = techs.split(',');

        arrayTechs.map(tech => {
            tech.trim();
        });

        console.log(arrayTechs);

        const { user_id } = req.headers;

        console.log(thumbnail);
        
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