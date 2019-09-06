const actorQueries = {
  async actors(parent, args, { prisma }, info) {
    return await prisma.query.actors();
  },
};

export default actorQueries;
