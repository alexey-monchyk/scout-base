import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import prisma from './prisma';
import typeDefs from './typeDefs';
import { resolvers } from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

export default app;