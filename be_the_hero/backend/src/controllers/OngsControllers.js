const crypto = require('crypto');

const connection = require('../database');

module.exports = {
  async create (req, res) {
    const { 
      name,
      email, 
      whatsapp, 
      city, 
      uf
    } = req.body;
    
    // Generate 4 bytes heaxadecimals
    const id = crypto.randomBytes(4).toString('HEX');

    try {
      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });
    } catch (e) {
      res.json(e);
    }

    return res.json({ id });
  },

  async show (req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }
}