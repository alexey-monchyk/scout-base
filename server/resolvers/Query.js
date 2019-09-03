const Query = {
  async users(parent, args, { prisma }, info) {
    return await prisma.query.users();
  },
  async actors(parent, args, { prisma }, info) {
    return await prisma.query.actors();
  },
  async movies(parent, args, { prisma }, info) {
    return await prisma.query.movies();
  },
  async directors(parent, args, { prisma }, info) {
    return await prisma.query.directors();
  }
};

export default Query;
