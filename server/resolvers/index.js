import { extractFragmentReplacements } from 'prisma-binding';

import Mutation from './Mutation';
import Query from './Query';

const resolvers = {
  Mutation,
  Query,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
