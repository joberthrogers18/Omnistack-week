const crypto = require('crypto');

const connection = require('../database');

module.exports = {
  async create(req, res) {
    const { 
      name,
      email, 
      whatsapp, 
      city, 
      uf
    } = req.body;
    
    // Generate 4 bytes heaxadecimals
    const id = crypto.randomBytes(4).toString('HEX');

    const ong = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}