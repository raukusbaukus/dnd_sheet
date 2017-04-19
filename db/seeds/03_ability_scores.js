exports.seed = (knex, Promise) => {
  return knex('ability_scores').del()
  .then(() => {
    return Promise.join(
      knex('ability_scores').insert({
        id: 1,
        strBase: 16,
        dexBase: 10,
        conBase: 14,
        intBase: 16,
        wisBase: 11,
        chaBase: 9,
        strASI: 2,
        dexASI: 0,
        conASI: 0,
        intASI: 0,
        wisASI: 0,
        chaASI: 0,
        strBonus: 2,
        dexBonus: 0,
        conBonus: 1,
        intBonus: 0,
        wisBonus: 0,
        chaBonus: 0
      })
    );
  });
};
