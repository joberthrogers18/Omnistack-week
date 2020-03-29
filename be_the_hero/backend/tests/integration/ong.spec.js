// lib to make request to this api
// recommend to test, instead the axios
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database');

describe('ONG', () => {
  beforeEach(async () => {
    // rollback if exists migrations executed before and run migration again
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    // It look like the tear down method
    await connection.destroy();
  });

  it('should be able to create an new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Casa Santo André',
        email: "joberth.rogers18@gmail.com",
        whatsapp: "1111111111",
        city: "gama",
        uf: "df"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});