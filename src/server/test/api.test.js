const { assert } = require('chai');
const { describe, it, before, beforeEach, afterEach, after } = require('mocha');
const nock = require('nock');
const axios = require('axios').default;
const mongoose = require('mongoose');

const { app } = require('../app');
const fakeData = require('./test-data.json');

const PORT = 8081;

const api = axios.create({
  baseURL: `http://127.0.0.1:${PORT}/api`,
});

/** @param {mongoose.Connection} db */
const tests = (db) => {
  describe('API', () => {
    /** @type {import('http').Server} */
    let server;

    before(async () => {
      if (!nock.isActive()) {
        nock.activate();
      }
    });

    beforeEach(async () => {
      // Start server and connect to db
      server = app.listen(PORT);

      await db.dropDatabase();
    });

    afterEach(async () => {
      nock.cleanAll();
      server.close();
    });

    after(() => {
      nock.restore();
    });

    describe('GET /repos', () => {
      it('should send back a 200 with JSON array in body', async () => {
        const { status, headers, data } = await api.get('/repos');

        assert.equal(status, 200);
        assert.include(headers['content-type'], 'application/json');
        assert.isArray(data);
      });

      it('should send back a 500 if the database fails', async () => {
        await db.close(true);
        const { status } = await api.get('/repos', {
          validateStatus: () => true,
        });

        assert.equal(status, 500);
      });
    });

    describe('POST /repos', () => {
      beforeEach(() => {
        // Stub request made to Github
        nock(/github/gi)
          .get(/.*/)
          .reply(200, fakeData);
      });

      it('should send back a 201 when sent `{ "username": "twbs" }` in body', async () => {
        const body = { username: 'twbs' };

        const { status } = await api.post('/repos', body);

        assert.equal(status, 201);
      });

      it('should save repos from Github when', async () => {
        const body = { username: 'twbs' };

        await api.post('/repos', body);
        const repos = await db.collection('repos').find().toArray();

        assert.lengthOf(repos, fakeData.length);
      });

      it('should send back a 500 if the database fails', async () => {
        const body = { username: 'twbs' };

        await db.close(true);

        const { status } = await api.post('/repos', body, {
          validateStatus: () => true,
        });

        assert.equal(status, 500);
      });
    });
  }).timeout(5000);
};

module.exports = tests;
