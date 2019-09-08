const movieQueries = {
  async movies(parent, args, { prisma }, info) {
    return await prisma.query.movies(null, info);
  },
  async movie(parent, { id }, { prisma }, info) {
    return await prisma.query.movie({
      where: { id }
    },info);
  }
};

export default movieQueries;
