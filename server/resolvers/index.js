const { extractFragmentReplacements } = require('prisma-binding');

const Mutation = require('./mutations');
const Query = require('./queries');
const DateTime = require('./DateTime');
const Movie = require('./Movie');

const resolvers = {
  Mutation,
  Query,
  DateTime,
  Movie,
};

exports.fragmentReplacements = extractFragmentReplacements(resolvers);
exports.resolvers = resolvers;
