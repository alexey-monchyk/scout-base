import { ApolloServer, PubSub } from 'apollo-server';

import prisma from './prisma';
import typeDefs from './typeDefs';
import { resolvers } from './resolvers';

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
    pubsub,
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}.`);
})