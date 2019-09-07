import { extractFragmentReplacements } from 'prisma-binding';

import Mutation from './mutations';
import Query from './queries';
import DateTime from './DateTime';
import Movie from './Movie';

const resolvers = {
  Mutation,
  Query,
  DateTime,
  Movie,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
