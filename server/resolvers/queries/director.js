const directorQueries = {
  async directors(parent, args, { prisma }, info) {
    return await prisma.query.directors();
  }
};

export default directorQueries;
