const Mutation = {
  async createUser(parent, { data }, { prisma }, info) {
    const user = await prisma.mutation.createUser({ data });

    return user;
  },
  async createActor(parent, { data }, { prisma }, info) {
    console.log(JSON.stringify(info));
    const actor = await prisma.mutation.createActor({
      data: {
        ...data,
        movies: {
          connect: data.movies && data.movies.map(id => ({ id }))
        },
        directors: {
          connect: data.directors && data.directors.map(id => ({ id }))
        }
      }
    });

    return actor;
  },
  async createMovie(parent, { data }, { prisma }, info) {
    const movie = await prisma.mutation.createMovie({
      data: {
        ...data,
        actors: {
          connect: data.actors.map(id => ({ id }))
        }
      }
    });

    console.log(movie);

    return movie;
  },
  async createDirector(parent, { data }, { prisma }, info) {
    const director = await prisma.mutation.createDirector({
      data: {
        ...data,
        actors: {
          connect: data.actors && data.actors.map(id => ({ id }))
        }
      }
    });

    return director;
  }
};

export default Mutation;
