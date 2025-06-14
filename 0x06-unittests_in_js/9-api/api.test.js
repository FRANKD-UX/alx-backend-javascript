const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET /cart/:id returns correct response for valid id', (done) => {
    request.get(`${API_URL}/cart/12`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id returns 404 for invalid id', (done) => {
    request.get(`${API_URL}/cart/hello`, (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
