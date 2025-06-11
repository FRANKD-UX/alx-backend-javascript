const express = require('express');

/**
 * Creates a small HTTP server using Express.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(1245);

module.exports = app;
