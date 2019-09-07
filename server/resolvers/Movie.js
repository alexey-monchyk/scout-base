import { getUserId } from './services/auth.service';

const Movie = {
  scoutbase_rating(parent, args, { request }, info) {
    const userId = getUserId(request);

    if (!userId) return null;

    return parent.scoutbase_rating;
  }
};

export default Movie;
