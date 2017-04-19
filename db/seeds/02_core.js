exports.seed = (knex, Promise) => {
  return knex('core').del()
  .then(() => {
    return Promise.join(
      knex('core').insert({
        id: 1,
        charName: 'Kora',
        race: `Dwarf (Duergar)`,
        class: `Eldritch Knight`,
        level: 7,
        hitDice: 10,
        hitPoints: 74,
        speed: 25,
        spellCasting: 'third',
        spellStat: 'int'
      })
    );
  });
};
