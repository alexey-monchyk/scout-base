const actorQueries = {
  async actors(parent, args, { prisma }, info) {
    return await prisma.query.actors();
  },
};

module.exports = actorQueries;
