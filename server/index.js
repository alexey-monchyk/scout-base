import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';

import prisma from './prisma';
import typeDefs from './typeDefs';
import { resolvers } from './resolvers';
import './seedDB';

const app = express();
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (request) => {
    return {
      request,
      prisma,
    };
  },
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

export default app;