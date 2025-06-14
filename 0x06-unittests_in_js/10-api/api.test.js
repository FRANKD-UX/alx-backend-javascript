const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET /available_payments returns payment methods', (done) => {
    request.get(`${API_URL}/available_payments`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('POST /login returns welcome message', (done) => {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: { userName: 'Betty' }
    };
    request(options, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
