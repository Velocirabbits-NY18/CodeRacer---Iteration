const db = require('../models/snippetModel');

const snippetController = {};

snippetController.getCategories = (req, res, next) => {
  const query = 'SELECT category FROM snippet'
  db.query(query, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.categories = data.rows;
    return next();
  })
};

snippetController.getSnippet = (req, res, next) => {
  let search = req.params.search;
  // console.log('we are getting the snippet with', )
  const query = `SELECT * FROM snippet WHERE category = '${search}'`
  db.query(query, (err, data) => {
    if (err) {
      // console.log('errorin snippet query:', err)
      return next(err);
    }
    console.log(data.rows)
    res.locals.snippet = data.rows;
    return next();
  })
};

module.exports = snippetController;