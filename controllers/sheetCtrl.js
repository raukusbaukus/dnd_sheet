const knex = require('../db/knex');

module.exports = {
  getAll,
  getCore,
  getAbils,
  getSkills,
  getFeatures,
  getSpells,
  getInventory
};

function getAll(req, res) {
  let coreP = knex.select()
    .from('core')
    .where('id', req.params.id);
  let abilsP = knex.select()
    .from('ability_scores')
    .where('id', req.params.id);
  let skillsP = knex.select()
    .from('skills')
    .where('id', req.params.id);
  let featuresP = knex.select()
    .from('features')
    .where('id', req.params.id);
  let spellsP = knex.select()
    .from('spells')
    .where('id', req.params.id);
  let inventoryP = knex.select()
    .from('inventory')
    .where('id', req.params.id);
  let promiseArr = [coreP, abilsP, skillsP, featuresP, spellsP, inventoryP];
  Promise.all(promiseArr)
    .then(data => {
      let [[core], [abils], [skills], [features], [spells], [inventory]] = data;
      res.status(200).send({
        core,
        abils,
        skills,
        features,
        spells,
        inventory
      })
    })
};


function getCore(req, res) {
  knex.select()
    .from('core')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function getAbils(req, res) {
  knex.select()
    .from('ability_scores')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function getSkills(req, res) {
  knex.select()
    .from('skills')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function getFeatures(req, res) {
  knex.select()
    .from('features')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function getSpells(req, res) {
  knex.select()
    .from('spells')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function getInventory(req, res) {
  knex.select()
    .from('inventory')
    .where('id', req.params.id)
    .then(data => res.status(200).send(data));
};

function postCore(req, res) {
  knex('core').insert({
      id: req.body.id,
      charName: req.body.charName,
      race: req.body.race,
      class: req.body.class,
      level: req.body.level,
      hitDice: req.body.hitDice,
      hitPoints: req.body.hitPoints,
      ace: req.body.race,
      ace: req.body.race,
      ace: req.body.race,
    })
    .then(() => {
      res.status(200).send(data)
    })
};

function changeCore(req, res) {
  // knex('core')
  // .where('id', req.params.id)
  // .update({
  //   req.body
  // })
  // .then(() => {
  //   res.status(200).send(data)
  // })
};

function deleteCore(req, res) {
  knex('core')
    .where('id', req.params.id)
    .delete()
    .then(() => {
      res.status(200).send('deleted')
    })
};
