const movieMutations = {
  async createMovie(parent, { data }, { prisma }, info) {
    const movie = await prisma.mutation.createMovie({
      data: {
        ...data,
        actors: {
          connect: data.actors && data.actors.map(id => ({ id }))
        }
      }
    }, info);

    return movie;
  },
};

module.exports = movieMutations;