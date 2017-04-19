exports.seed = (knex, Promise) => {
  return knex('spells').del()
  .then(() => {
    return Promise.join(
      knex('spells').insert({
        id: 1
      })
    );
  });
};
