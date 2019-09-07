import prisma from './prisma';
import mutations from './resolvers/mutations';
import query from './resolvers/queries';
import seedData from './seedData';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

(async function() {
  const actorsIds = {};
  const checkSeedUser = await query.user(null, { where: { username: 'seed' } }, { prisma }, '{ id, name }');
  
  if (checkSeedUser) return;

  try {
    await mutations.createUser(null, { data: seedData.seedUser }, { prisma }, '{ id }');

    await asyncForEach(seedData.movies, async (movie) => {
      await mutations.createMovie(null, { data: movie }, { prisma }, '{ id }');
    });
  
    await asyncForEach(seedData.actors, async (actor) => {
      const actorData = await mutations.createActor(null, { data: actor }, { prisma }, '{ id, name }');
  
      actorsIds[actorData.name] = actorData.id;
    });

    await asyncForEach(seedData.directors, async (director) => {
      const directorActorsIds = director.actors.map(actor => actorsIds[actor]);

      director.actors = directorActorsIds;

      await mutations.createDirector(null, { data: director }, { prisma }, '{ id }');
    });
  } catch (err) {
    console.log(err);
  }
})();