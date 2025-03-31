const { Router } = require('express');
const { savePony, getPonies } = require('../database');
const Ponies = Router();

Ponies.get('/', (req, res) => {
  // TODO - your code here!
  // This route should send back the ponies
});

Ponies.post('/', (req, res) => {
  // TODO - your code here!
  // This route should take the pony name provided
  // and get the repo information from the My Little Pony API, then
  // save the pony information in the database
});

module.exports = {
  Ponies,
};
