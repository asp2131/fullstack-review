const path = require('path');
const express = require('express');

const { Ponies } = require('./api/stable');

const CLIENT_PATH = path.resolve(__dirname, '../../dist/client');
const app = express();

app.use(express.static(CLIENT_PATH));
app.use('/api/repos', Ponies);

module.exports = {
  app
};
