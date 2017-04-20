exports.seed = (knex, Promise) => {
  return knex('inventory').del()
    .then(() => {
      return Promise.join(
        knex('inventory').insert({
          id: 1,
          name: 'Plate Armor',
          quantity: 1,
          weight: 65,
          desc: 'Heavy Armor, Armor Class: 18, Disadvantage on stealth checks.'
        }),
        knex('inventory').insert({
          id: 1,
          name: '+1 Warhammer',
          quantity: 1,
          weight: 2,
          desc: 'Martial Weapon, Melee, Versatile, 1d8/1d10 bludgeoning damage, Magic Weapon, +1 to attack and damage rolls.'
        }),
        knex('inventory').insert({
          id: 1,
          name: 'Shield',
          quantity: 1,
          weight: 6,
          desc: '+2 AC while ready, requires an action to ready/un-ready.'
        }),
        knex('inventory').insert({
          id: 1,
          name: 'Potion of Healing',
          quantity: 4,
          weight: .5,
          desc: '2d4+2 healing, requires an action to drink.'
        })
      );
    })
};
