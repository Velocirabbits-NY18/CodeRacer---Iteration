const { Pool } = require('pg');

const PG_URI = 'postgres://rdbpefvt:ap6jLgfucXTv7-txKVehMNOV4ncDO-UE@drona.db.elephantsql.com:5432/rdbpefvt';
// new db postgres://rdbpefvt:ap6jLgfucXTv7-txKVehMNOV4ncDO-UE@drona.db.elephantsql.com:5432/rdbpefvt
// snippet_id	 category	 content	max_time	duration	meaning
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};