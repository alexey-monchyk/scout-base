const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: './server/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
});

module.exports = prisma;
