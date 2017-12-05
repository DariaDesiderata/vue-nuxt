// Update with your config settings.
const path = require('path');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/general_store_db'
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds', 'dev')
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }
};
