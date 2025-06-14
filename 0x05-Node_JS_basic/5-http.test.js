const request = require('supertest');
const { expect } = require('chai');
const { spawn } = require('child_process');

describe('5-http.js', () => {
  let server;
  const baseURL = 'http://localhost:1245';

  before((done) => {
    server = spawn('node', ['5-http.js', 'database.csv']);
    // Wait for server to start
    setTimeout(done, 1500);
  });

  after(() => {
    if (server) {
      server.kill('SIGTERM');
      setTimeout(() => {
        if (server.killed === false) {
          server.kill('SIGKILL');
        }
      }, 1000);
    }
  });

  it('should return "Hello ALX!" for root endpoint', (done) => {
    request(baseURL)
      .get('/')
      .expect(200)
      .expect('Hello ALX!')
      .end(done);
  });

  it('should return student list for /students endpoint', (done) => {
    request(baseURL)
      .get('/students')
      .expect(200)
      .expect((res) => {
        expect(res.text).to.include('This is the list of our students');
        expect(res.text).to.include('Number of students: 10');
        expect(res.text).to.include('Number of students in CS: 6');
        expect(res.text).to.include('Number of students in SWE: 4');
        expect(res.text).to.include('List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
        expect(res.text).to.include('List: Guillaume, Joseph, Paul, Tommy');
      })
      .end(done);
  });

  it('should handle invalid database file', (done) => {
    // Kill current server
    if (server) {
      server.kill();
    }
    
    // Start server with invalid database
    server = spawn('node', ['5-http.js', 'invalid.csv']);
    
    setTimeout(() => {
      request(baseURL)
        .get('/students')
        .expect(200)
        .expect((res) => {
          expect(res.text).to.include('This is the list of our students');
          expect(res.text).to.include('Cannot load the database');
        })
        .end(() => {
          // Restart server with valid database for other tests
          if (server) {
            server.kill();
          }
          server = spawn('node', ['5-http.js', 'database.csv']);
          setTimeout(done, 1000);
        });
    }, 1000);
  });

  it('should return plain text content type', (done) => {
    request(baseURL)
      .get('/')
      .expect('Content-Type', /text\/plain/)
      .end(done);
  });
});
