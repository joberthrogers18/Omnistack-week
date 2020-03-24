

const connection = require('../database');

module.exports = {
  async create (req, res) {
    const {
      title,
      description,
      value
    } = req.body;

    const ong_id = req.headers.authorization;
  
    const incident = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    }) 

    return res.json({ id: incident[0] });
  },

  async show (req, res) {
    const ongs = await connection('incidents').select('*');

    return res.json(ongs);
  }
}