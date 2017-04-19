exports.seed = (knex, Promise) => {
  return knex('features').del()
  .then(() => {
    return Promise.join(
      knex('features').insert({
        id: 1
      })
    );
  });
};
