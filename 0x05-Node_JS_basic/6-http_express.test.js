const request = require('supertest');
const { expect } = require('chai');
const app = require('./6-http_express');

describe('6-http_express.js', () => {
  it('should return "Hello ALX!" for root endpoint', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return 404 for unknown endpoints', (done) => {
    request(app)
      .get('/unknown_endpoint')
      .expect(404)
      .end(done);
  });

  it('should return HTML error page for 404', (done) => {
    request(app)
      .get('/nonexistent')
      .expect(404)
      .expect('Content-Type', /text\/html/)
      .expect((res) => {
        expect(res.text).to.include('Cannot GET');
      })
      .end(done);
  });

  it('should handle different HTTP methods on root', (done) => {
    request(app)
      .post('/')
      .expect(404) // Express doesn't handle POST on / by default
      .end(done);
  });

  it('should return text content type for root endpoint', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/) // Express defaults to text/html
      .expect(200)
      .end(done);
  });

  it('should handle query parameters on root', (done) => {
    request(app)
      .get('/?test=value')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should handle multiple slashes', (done) => {
    request(app)
      .get('///')
      .expect(404) // Express treats /// differently from /
      .end(done);
  });
});
