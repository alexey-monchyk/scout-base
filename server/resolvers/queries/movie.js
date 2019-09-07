import { getUserId } from '../services/auth.service';

const movieQueries = {
  async movies(parent, args, { prisma, request }, info) {
    return await prisma.query.movies(null, info);
  },
};

export default movieQueries;
