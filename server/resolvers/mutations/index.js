const userMutations = require('./user');
const actorMutations = require('./actor');
const directorMutations = require('./director');
const movieMutations = require('./movie');

const Mutation = {
  ...userMutations,
  ...actorMutations,
  ...directorMutations,
  ...movieMutations,
};

module.exports = Mutation;
