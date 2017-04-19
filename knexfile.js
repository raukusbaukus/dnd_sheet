module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/dnd_sheet',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'dnd_sheet',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }

};
