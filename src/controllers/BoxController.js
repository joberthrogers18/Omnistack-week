const Box = require('../models/Box');

class BoxController {
    store(req, res){
        Box.create(req.body)
            .then(result => {
                res.status(200).json(result);
            }).catch(error => {
                res.status(500).json({error: error});
            });
    }

    show(req, res){
        Box.find()
            .then((result) => {
                return res.status(200).json(result);
            })
            .catch(error => {
                return res.status(500).json({error: error});
            })
            
    }

    showUnique(req, res){
        Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        }).then((box) => {
                return res.status(200).json(box);
            }).catch(error => {
                return res.status(500).json(error);
            });
    }
}

module.exports = new BoxController();