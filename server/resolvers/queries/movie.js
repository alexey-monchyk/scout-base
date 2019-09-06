const movieQueries = {
  async movies(parent, args, { prisma }, info) {
    return await prisma.query.movies();
  },
};

export default movieQueries;
