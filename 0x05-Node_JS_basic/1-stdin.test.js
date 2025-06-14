const { spawn } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should display welcome message and handle input', (done) => {
    const child = spawn('node', ['1-stdin.js']);
    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', () => {
      expect(output).to.include('Welcome to ALX, what is your name?');
      expect(output).to.include('Your name is: Test');
      expect(output).to.include('This important software is now closing');
      done();
    });

    // Simulate user input
    setTimeout(() => {
      child.stdin.write('Test\n');
      child.stdin.end();
    }, 100);
  });

  it('should handle piped input', (done) => {
    const echo = spawn('echo', ['John']);
    const child = spawn('node', ['1-stdin.js']);
    let output = '';

    echo.stdout.pipe(child.stdin);

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', () => {
      expect(output).to.include('Welcome to ALX, what is your name?');
      expect(output).to.include('Your name is: John');
      expect(output).to.include('This important software is now closing');
      done();
    });
  });

  it('should handle multiple character names', (done) => {
    const child = spawn('node', ['1-stdin.js']);
    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', () => {
      expect(output).to.include('Welcome to ALX, what is your name?');
      expect(output).to.include('Your name is: Alice Smith');
      expect(output).to.include('This important software is now closing');
      done();
    });

    setTimeout(() => {
      child.stdin.write('Alice Smith\n');
      child.stdin.end();
    }, 100);
  });
});
