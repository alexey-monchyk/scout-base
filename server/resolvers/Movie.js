const { getUserId } = require('./services/auth.service');

const Movie = {
  scoutbase_rating(parent, args, { request }, info) {
    const userId = getUserId(request);

    if (!userId) return null;

    return parent.scoutbase_rating;
  }
};

module.exports = Movie;
