const { Pool } = require('pg');

const PG_URI = 'postgres://kmtjqkhx:XXuVyzw_mpS1svHn5aKfjiuQaEszbrTF@drona.db.elephantsql.com:5432/kmtjqkhx';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};