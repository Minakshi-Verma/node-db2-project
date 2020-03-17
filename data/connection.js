const knex = require("knex");
const knexfile = require('../knexfile')

const environment = process.env.NODE_ENV|| "development"; //NODE.ENV if you want to use heroku since it works on node server, it could be DB_ENV in other cicumstances)

knexConfig = knexfile[environment];

//const knexConfig = knexFile.development (if you just want to use development as the option but above code(line-4) is more dynamic)


module.exports = knex(knexConfig)