// this file was created by "sequelize init"

/**
 * Originaly, this file was created in .json format, but we can't use
 * environment variables inside a json file, to combat this, change
 * the file format to .js and export the object
 */

// To use an environment variable, require the dotenv library
require('dotenv').config()

// destructure environment variables
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT } = process.env
module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": DB_DIALECT,
    // this will make log that sequelize output from queries gone
    logging: false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}
