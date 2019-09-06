const userMutations = {
  async createUser(parent, { data }, { prisma }, info) {
    const user = await prisma.mutation.createUser({ data });

    return user;
  },
};

export default userMutations;
