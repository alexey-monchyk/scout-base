const userQueries = {
  async users(parent, args, { prisma }, info) {
    return await prisma.query.users(null, info);
  },
  async user(parent, { where }, { prisma }, info) {
    return await prisma.query.user({ where }, info);
  }
};

module.exports = userQueries;
