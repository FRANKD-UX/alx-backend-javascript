const http = require('http');
const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object
          .values(studentGroups)
          .reduce((pre, cur) => (pre || []).length + cur.length);
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            `List: ${group.map((student) => student.firstname).join(', ')}`,
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

/**
 * Creates a small HTTP server.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello ALX!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv.length > 2 ? process.argv[2] : '')
      .then((report) => {
        res.end(report);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err instanceof Error ? err.message : err.toString());
      });
  }
});

app.listen(1245);

module.exports = app;
