exports.seed = (knex, Promise) => {
  return knex('player').del()
  .then(() => {
    return Promise.join(
      knex('player').insert({
        username: 'raukusbaukus',
        password: 'dragons'
      })
    );
  });
};
