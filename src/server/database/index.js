const mongoose = require('mongoose');
const {getPoniesByName} = require('../helpers/ponyapi')

const DATABASE = `?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8`;
const DB_URI = process.env.MONGO_URI ?? `mongodb://localhost:27017/${DATABASE}`;
// TODO: Put the field you are gonna use to sort the repos by.
// Your schema should have this field.
const SORTING_BY_FIELD = '';

mongoose
  .connect(DB_URI)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Failed to connect to database', err));

const ponySchema = new mongoose.Schema({
  // TODO: your schema here!
});

const Pony = mongoose.model('Pony', ponySchema);

const savePony = () => {
  // TODO: Your code here
  // This function should save ONE pony to the MongoDB
};

const getPonies = () => {
  // TODO: Your code here
  // This function should get the ponies from mongo
};

module.exports = {
  savePony,
  getPonies,
  SORTING_BY_FIELD,
};
