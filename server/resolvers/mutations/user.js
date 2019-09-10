const { generateJWT } = require('../services/jwt.service');

const userMutations = {
  async createUser(parent, { data }, { prisma }, info) {
    const user = await prisma.mutation.createUser({ data });

    const token = generateJWT(user.id);

    return {
      user,
      token,
    };
  },
  async login(parent, { data }, { prisma }, info) {
    const user = await prisma.query.user({ where: { username: data.username } });

    if (!user) throw new Error('User with this username wasn\'t found');

    if (user.password !== data.password) throw new Error('Incorrect password');

    const token = generateJWT(user.id);

    return {
      token,
      user,
    };
  },
};

module.exports = userMutations;
