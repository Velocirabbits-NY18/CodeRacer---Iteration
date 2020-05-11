const { Pool } = require('pg');
//setting up our postgres SQL DB the same way as the DB unit
const PG_URI = 'postgres://rdbpefvt:ap6jLgfucXTv7-txKVehMNOV4ncDO-UE@drona.db.elephantsql.com:5432/rdbpefvt';

//PQSQL DB table layouts
// snippet: snippet_id	 category	 content	max_time	duration	meaning
// users: user_id username snippet_id highest_wpm 
const pool = new Pool({
  connectionString: PG_URI
});

// exported query with the ability to read what the request was for added debugging.
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};