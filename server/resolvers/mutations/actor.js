const actorMutations = {
  async createActor(parent, { data }, { prisma }, info) {
    const actor = await prisma.mutation.createActor({
      data: {
        ...data,
        movies: {
          connect: data.movies && data.movies.map(title => ({ title }))
        },
        directors: {
          connect: data.directors && data.directors.map(id => ({ id }))
        }
      }
    }, info);

    return actor;
  },
};

export default actorMutations;
