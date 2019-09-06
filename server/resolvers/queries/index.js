import userQueries from './user';
import actorQueries from './actor';
import directorQueries from './director';
import movieQueries from './movie';

const Query = {
  ...userQueries,
  ...actorQueries,
  ...directorQueries,
  ...movieQueries,
};

export default Query;
