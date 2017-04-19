exports.seed = (knex, Promise) => {
  return knex('inventory').del()
  .then(() => {
    return Promise.join(
      knex('inventory').insert({
        id: 1
      })
    );
  });
};
