const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const dotenv = require('dotenv');

const prisma = require('./prisma');
const typeDefs = require('./typeDefs');
const { resolvers } = require('./resolvers');
require('./seedDB')();

const app = express();
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (request) => ({
    request,
    prisma,
  }),
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

module.exports = app;