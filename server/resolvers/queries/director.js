const directorQueries = {
  async directors(parent, args, { prisma }, info) {
    return await prisma.query.directors();
  }
};

module.exports = directorQueries;
