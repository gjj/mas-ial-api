const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json({ strict: false }));

app.get('/ialsearch', function (req, res) {
  res.send('IAL search');
});

module.exports.handler = serverless(app);
