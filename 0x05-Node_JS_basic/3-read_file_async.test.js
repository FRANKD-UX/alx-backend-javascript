const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('./3-read_file_async');

describe('countStudents (asynchronous)', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should reject with error when database is not available', async () => {
    try {
      await countStudents('nope.csv');
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.equal('Cannot load the database');
    }
  });

  it('should resolve and log student information when database is available', async () => {
    await countStudents('database.csv');
    expect(consoleLogSpy.calledWith('Number of students: 10')).to.be.true;
    expect(consoleLogSpy.calledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.be.true;
    expect(consoleLogSpy.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;
  });

  it('should return a promise', () => {
    const result = countStudents('database.csv');
    expect(result).to.be.instanceof(Promise);
  });

  it('should handle empty file path', async () => {
    try {
      await countStudents('');
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.equal('Cannot load the database');
    }
  });

  it('should handle invalid file path', async () => {
    try {
      await countStudents('invalid/path/file.csv');
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.equal('Cannot load the database');
    }
  });
});
