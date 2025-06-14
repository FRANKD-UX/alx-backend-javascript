const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('./2-read_file');

describe('countStudents (synchronous)', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should throw an error when database is not available', () => {
    expect(() => countStudents('nope.csv')).to.throw('Cannot load the database');
  });

  it('should log student information when database is available', () => {
    countStudents('database.csv');
    expect(consoleLogSpy.calledWith('Number of students: 10')).to.be.true;
    expect(consoleLogSpy.calledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.be.true;
    expect(consoleLogSpy.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;
  });

  it('should handle empty file path', () => {
    expect(() => countStudents('')).to.throw('Cannot load the database');
  });

  it('should handle null file path', () => {
    expect(() => countStudents(null)).to.throw();
  });

  it('should handle undefined file path', () => {
    expect(() => countStudents(undefined)).to.throw();
  });
});
