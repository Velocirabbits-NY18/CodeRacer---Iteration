const db = require('../models/snippetModel');

const snippetController = {};

snippetController.getSnippet = (req, res, next) => {
  console.log('we are getting the snippet')
  const query = 'SELECT content FROM snippet'
  db.query(query, (err, data) => {
    if(err) {
      console.log('errorin snippet query:', err)
      return next(err)
    }
    console.log(data.rows)
    res.locals.snippet = data.rows;
    return next();
  })
};

module.exports = snippetController;