import userMutations from './user';
import actorMutations from './actor';
import directorMutations from './director';
import movieMutations from './movie';

const Mutation = {
  ...userMutations,
  ...actorMutations,
  ...directorMutations,
  ...movieMutations,
};

export default Mutation;
