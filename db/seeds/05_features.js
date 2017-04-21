exports.seed = (knex, Promise) => {
  return knex('features').del()
  .then(() => {
    return Promise.join(
      knex('features').insert({
        id: 1,
        feature_id: 1,
        name: 'Darkvision',
        desc: 'You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only shades of gray.'
      }),
      knex('features').insert({
        id: 1,
        feature_id: 2,
        name: 'Dwarven Resilience',
        desc: 'You have advantage on saving throws against poison, and you have Resistance against poison damage.'
      }),
      knex('features').insert({
        id: 1,
        feature_id: 3,
        name: 'Dwarven Combat Training',
        desc: 'You have proficiency with the Battleaxe, Handaxe, Light Hammer, and Warhammer.'
      }),
      knex('features').insert({
        id: 1,
        feature_id: 4,
        name: 'Stonecunning',
        desc: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
      })
    );
  });
};
