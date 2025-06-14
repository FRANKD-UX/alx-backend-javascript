const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('./0-console');

describe('displayMessage', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should display the correct message', () => {
    const message = 'Hello NodeJS!';
    displayMessage(message);
    expect(consoleLogSpy.calledWith(message)).to.be.true;
  });

  it('should display another message', () => {
    const message = 'Testing display function';
    displayMessage(message);
    expect(consoleLogSpy.calledWith(message)).to.be.true;
  });

  it('should handle empty string', () => {
    const message = '';
    displayMessage(message);
    expect(consoleLogSpy.calledWith(message)).to.be.true;
  });
});
