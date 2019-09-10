const userQueries = require('./user');
const actorQueries = require('./actor');
const directorQueries = require('./director');
const movieQueries = require('./movie');

const Query = {
  ...userQueries,
  ...actorQueries,
  ...directorQueries,
  ...movieQueries,
};

module.exports = Query;
