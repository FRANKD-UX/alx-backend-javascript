const request = require('supertest');
const { expect } = require('chai');
const app = require('./4-http');

describe('4-http.js', () => {
  it('should return "Hello ALX!" for root endpoint', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return "Hello ALX!" for any endpoint', (done) => {
    request(app)
      .get('/any_endpoint')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return "Hello ALX!" for another random endpoint', (done) => {
    request(app)
      .get('/random/path')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return "Hello ALX!" for deep nested path', (done) => {
    request(app)
      .get('/very/deep/nested/path/test')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should handle POST requests', (done) => {
    request(app)
      .post('/test')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should handle PUT requests', (done) => {
    request(app)
      .put('/test')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return content-type text/plain', (done) => {
    request(app)
      .get('/test')
      .expect('Content-Type', /text\/plain/)
      .expect(200)
      .end(done);
  });
});
