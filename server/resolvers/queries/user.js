const userQueries = {
  async users(parent, args, { prisma }, info) {
    return await prisma.query.users();
  },
};

export default userQueries;
