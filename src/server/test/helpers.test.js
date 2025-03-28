const { assert } = require('chai');
const { describe, it } = require('mocha');
const mongoose = require('mongoose');

const { saveRepo, getTop25Repos, SORTING_BY_FIELD } = require('../database');
const fakeData = require('./test-data.json');

/** @param {mongoose.Connection} db */
const tests = (db) => {
  describe('Database helpers', () => {
    describe('saveRepo()', () => {
      it('should save ONE repo to the database', async () => {
        const [repo] = fakeData;
        await saveRepo(repo);
        const repos = await db.collection('repos').find({}).toArray();

        assert.lengthOf(repos, 1);
      });

      it('should not save repo already saved to the database (No duplicates)', async () => {
        const [repo] = fakeData;

        await saveRepo(repo); // First save
        await saveRepo(repo); // Second save -- should not add duplicate

        const repos = await db.collection('repos').find({}).toArray();

        assert.lengthOf(repos, 1);
      });
    });

    describe('getTop25Repos()', () => {
      beforeEach(async () => {
        // Save the repos using `saveRepo`
        await Promise.all(fakeData.map(saveRepo));
      });

      it('should return 25 results from the database', async () => {
        const repos = await getTop25Repos();
        assert.isAtMost(repos.length, 25);
      });

      it('should return the results sorted by some field the database', async () => {
        const repos = await getTop25Repos();

        // Sorting the repos manually here to check if they match the provided repos
        const sortedRepos = repos.sort((repo1, repo2) => {
          const repoField1 = repo1[SORTING_BY_FIELD] ?? 0;
          const repoField2 = repo2[SORTING_BY_FIELD] ?? 0;

          if (repoField1 === repoField2) {
            return 0;
          }
          return repoField1 > repoField2 ? 1 : -1;
        });

        assert.deepEqual(repos, sortedRepos);
      });
    });
  });
};

module.exports = tests;
