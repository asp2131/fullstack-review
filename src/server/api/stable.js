const { Router } = require('express');
const { savePony, getPonies } = require('../database');
const {getPoniesByName} = require('../helpers/ponyapi');

const Ponies = Router();

Ponies.get('/', async (req, res) => {
  // TODO - your code here!
  // This route should send back the ponies
  const ponies = await getPonies();

  res.send(JSON.stringify(ponies));
});

Ponies.post('/', async (req, res) => {
  // TODO - your code here!
  const {pony: ponyName} = req.body;
  const ponyResp = await getPoniesByName(ponyName);
  const {data: [ pony ]} = ponyResp;
  const {name, alias, sex, image: images} = pony;
  await savePony({
    name,
    alias,
    sex,
    image: images[0]
  });
  // This route should take the pony name provided
  // and get the repo information from the My Little Pony API, then
  // save the pony information in the database
  const ponies = await getPonies();

  res.send(JSON.stringify(ponies));
});

module.exports = {
  Ponies,
};
