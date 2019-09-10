const root = require('./root');
const user = require('./user');
const actor = require('./actor');
const director = require('./director');
const movie = require('./movie');

const schemaArray = [root, user, actor, director, movie];

module.exports = schemaArray;
