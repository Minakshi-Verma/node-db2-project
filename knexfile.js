// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //it can be any db driver
    connection: { 
      //connection can be a string or an object
      filename: './data/car-dealer.db3'  // address is with respect to root
    },
    useNullAsDefault: true, //only needed for sqlite
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};



//create blank knex file
// add knex globally using: npm i -g knex
// Initialize the knexFile using: knex init
// after inialization, knex file will populate with development, staging and production objects