const Box = require('../models/Box');

class BoxController {
    store(req, res){
        Box.create({title: 'RocketSeat'})
            .then(() => {
                res.status(200).json({msg: 'Create sucessfuly!'});
            }).catch(error => {
                res.status(500).json({error: error});
            });
    }

    show(req, res){
        Box.find()
            .then((error, result) => {
                if (error){
                    return res.status(500).json({error: error});
                }
                return res.status(200).json(result);
            })
            .catch(error => {
                return res.status(500).json({error: error});
            })
            
    }
}

module.exports = new BoxController();