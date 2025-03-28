const mongoose = require('mongoose');

const DATABASE = 'fetcher';
const DB_URI = process.env.MONGO_URI ?? `mongodb://localhost:27017/${DATABASE}`;
// TODO: Put the field you are gonna use to sort the repos by.
// Your schema should have this field.
const SORTING_BY_FIELD = '';

mongoose
  .connect(DB_URI)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Failed to connect to database', err));

const repoSchema = new mongoose.Schema({
  // TODO: your schema here!
});

const Repo = mongoose.model('Repo', repoSchema);

const saveRepo = () => {
  // TODO: Your code here
  // This function should save ONE repo to the MongoDB
};

const getTop25Repos = () => {
  // TODO: Your code here
  // This function should get the repos from mongo
};

module.exports = {
  saveRepo,
  getTop25Repos,
  SORTING_BY_FIELD,
};
