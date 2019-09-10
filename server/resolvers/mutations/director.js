const directorMutations = {
  async createDirector(parent, { data }, { prisma }, info) {
    const director = await prisma.mutation.createDirector({
      data: {
        ...data,
        actors: {
          connect: data.actors && data.actors.map(id => ({ id }))
        }
      }
    }, info);

    return director;
  }
};

module.exports = directorMutations;
