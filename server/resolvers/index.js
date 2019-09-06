import { extractFragmentReplacements } from 'prisma-binding';

import Mutation from './mutations';
import Query from './queries';

const resolvers = {
  Mutation,
  Query,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
