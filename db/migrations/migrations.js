exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('player', function(table) {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password').notNullable();
    }),

    knex.schema.createTable('core', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('core_id').unique().primary();
      table.string('charName');
      table.string('race');
      table.string('class');
      table.integer('level').notNullable().defaultTo(1);
      table.integer('hitDice').notNullable().defaultTo(6);
      table.integer('hitPoints').notNullable().defaultTo(6);
      table.string('speed').defaultTo('Walking: 30ft');
      table.enu('spellCasting', ['none', 'third', 'half', 'full', 'custom']).notNullable().defaultsTo('none');
      table.enu('spellStat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('int');
    }),

    knex.schema.createTable('ability_scores', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('abils_id').unique().primary();
      table.integer('strBase').notNullable().defaultTo(8);
      table.integer('dexBase').notNullable().defaultTo(8);
      table.integer('conBase').notNullable().defaultTo(8);
      table.integer('intBase').notNullable().defaultTo(8);
      table.integer('wisBase').notNullable().defaultTo(8);
      table.integer('chaBase').notNullable().defaultTo(8);
      table.integer('strASI').notNullable().defaultTo(0);
      table.integer('dexASI').notNullable().defaultTo(0);
      table.integer('conASI').notNullable().defaultTo(0);
      table.integer('intASI').notNullable().defaultTo(0);
      table.integer('wisASI').notNullable().defaultTo(0);
      table.integer('chaASI').notNullable().defaultTo(0);
      table.integer('strBonus').notNullable().defaultTo(0);
      table.integer('dexBonus').notNullable().defaultTo(0);
      table.integer('conBonus').notNullable().defaultTo(0);
      table.integer('intBonus').notNullable().defaultTo(0);
      table.integer('wisBonus').notNullable().defaultTo(0);
      table.integer('chaBonus').notNullable().defaultTo(0);
    }),

    knex.schema.createTable('skills', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('skills_id').unique().primary();
      table.boolean('jackOfAllTrades').defaultsTo(false);
      table.boolean('acrobaticsProf').defaultsTo(false);
      table.boolean('acrobaticsExp').defaultsTo(false);
      table.boolean('animalhandlingProf').defaultsTo(false);
      table.boolean('animalhandlingExp').defaultsTo(false);
      table.boolean('arcanaProf').defaultsTo(false);
      table.boolean('arcanaExp').defaultsTo(false);
      table.boolean('athleticsProf').defaultsTo(false);
      table.boolean('athleticsExp').defaultsTo(false);
      table.boolean('deceptionProf').defaultsTo(false);
      table.boolean('deceptionExp').defaultsTo(false);
      table.boolean('historyProf').defaultsTo(false);
      table.boolean('historyExp').defaultsTo(false);
      table.boolean('insightProf').defaultsTo(false);
      table.boolean('insightExp').defaultsTo(false);
      table.boolean('intimidationProf').defaultsTo(false);
      table.boolean('intimidationExp').defaultsTo(false);
      table.boolean('investigationProf').defaultsTo(false);
      table.boolean('investigationExp').defaultsTo(false);
      table.boolean('medicineProf').defaultsTo(false);
      table.boolean('medicineExp').defaultsTo(false);
      table.boolean('natureProf').defaultsTo(false);
      table.boolean('natureExp').defaultsTo(false);
      table.boolean('perceptionProf').defaultsTo(false);
      table.boolean('perceptionExp').defaultsTo(false);
      table.boolean('performanceProf').defaultsTo(false);
      table.boolean('performanceExp').defaultsTo(false);
      table.boolean('persuasionProf').defaultsTo(false);
      table.boolean('persuasionExp').defaultsTo(false);
      table.boolean('religionProf').defaultsTo(false);
      table.boolean('religionExp').defaultsTo(false);
      table.boolean('sleightofhandProf').defaultsTo(false);
      table.boolean('sleightofhandExp').defaultsTo(false);
      table.boolean('stealthProf').defaultsTo(false);
      table.boolean('stealthExp').defaultsTo(false);
      table.boolean('survivalProf').defaultsTo(false);
      table.boolean('survivalExp').defaultsTo(false);
      table.boolean('custom1Prof').defaultsTo(false);
      table.boolean('custom1Exp').defaultsTo(false);
      table.string('custom1Name').defaultsTo('Custom 1');
      table.enu('custom1Stat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('str');
      table.boolean('custom2Prof').defaultsTo(false);
      table.boolean('custom2Exp').defaultsTo(false);
      table.string('custom2Name').defaultsTo('Custom 2');
      table.enu('custom2Stat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('str');
      table.boolean('custom3Prof').defaultsTo(false);
      table.boolean('custom3Exp').defaultsTo(false);
      table.string('custom3Name').defaultsTo('Custom 3');
      table.enu('custom3Stat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('str');
      table.boolean('custom4Prof').defaultsTo(false);
      table.boolean('custom4Exp').defaultsTo(false);
      table.string('custom4Name').defaultsTo('Custom 4');
      table.enu('custom4Stat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('str');
      table.boolean('custom5Prof').defaultsTo(false);
      table.boolean('custom5Exp').defaultsTo(false);
      table.string('custom5Name').defaultsTo('Custom 5');
      table.enu('custom5Stat', ['str', 'dex', 'con', 'int', 'wis', 'cha']).defaultsTo('str');
    }),

    knex.schema.createTable('features', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('feature_id').unique().primary();
      table.string('name');
      table.text('desc');
    }),

    knex.schema.createTable('spells', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('spell_id').unique().primary();
      table.string('name');
      table.string('source');
      table.text('desc');
      table.text('higher_level');
      table.string('page');
      table.string('range');
      table.string('components');
      table.string('material');
      table.string('ritual');
      table.string('duration');
      table.string('concentration');
      table.string('casting_time');
      table.string('level');
      table.string('school');
      table.string('url');

    }),

    knex.schema.createTable('inventory', function(table) {
      table.integer('id').references('id').inTable('player').onDelete('cascade');
      table.increments('inventory_id').unique().primary();
      table.string('name');
      table.integer('quantity');
      table.decimal('weight');
      table.text('desc');
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('player'),
    knex.schema.dropTable('core'),
    knex.schema.dropTable('ability_scores'),
    knex.schema.dropTable('skills'),
    knex.schema.dropTable('features'),
    knex.schema.dropTable('spells'),
    knex.schema.dropTable('inventory')
  ])
};
