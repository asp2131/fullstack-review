const { describe, before, after, beforeEach } = require('mocha');
const mongoose = require('mongoose');

const DB_URI = 'mongodb://127.0.0.1:27017/fetcher-test';

const reconnect = async () => {
  await mongoose.disconnect();
  return (await mongoose.connect(DB_URI)).connection;
};

describe('Fullstack Review', () => {
  /** @type {mongoose.Connection} */
  let db = mongoose.connection;
  before(async () => {
    await mongoose.disconnect();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    db = await reconnect();
  });

  require('./helpers.test')(db);
  require('./api.test')(db);
});
