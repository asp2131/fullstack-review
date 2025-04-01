const mongoose = require('mongoose');

const DATABASE = `fullstack`;
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
  name: String, // String is shorthand for {type: String}
  alias: String,
  url: String,
  sex: String,
  image: String
});

const Pony = mongoose.model('Pony', ponySchema);

const savePony = async (pony) => {
  // TODO: Your code here
  // This function should save ONE pony to the MongoDB
  const newPony = new Pony(pony);

  await newPony.save();
};

const getPonies = () => {
  // TODO: Your code here
  // This function should get the ponies from mongo
  return Pony.find();
};

module.exports = {
  savePony,
  getPonies,
  SORTING_BY_FIELD,
};
