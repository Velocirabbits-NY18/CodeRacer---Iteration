const db = require('../models/snippetModel');

const snippetController = {};

snippetController.getCategories = (req, res, next) => {
  const query = 'SELECT DISTINCT category FROM snippet'
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

snippetController.createDatabase = async (req, res, next) => {
  const query = `INSERT INTO snippet (category, content, meaning, max_time) 
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`
  const promiseArray = [];
  snippets.forEach((element) => {
    let totalWords = element[1].length/5;
    let averageTime = Math.floor((totalWords/25) * 60) + 15;
    element.push(averageTime);
    let values = element;
    promiseArray.push(db.query(query, values));
  })
  Promise.all(promiseArray).then(res => next())
}

// HTML SQL JavaScript React Express
// category, content, meaning
const html = "HTML";
const sql = "SQL";
const javascript = "JavaScript";
const react = "React";
const express = "Express";


const snippets = [

];

/*
CREATE TABLE snippet (
  snippet_id     SERIAL PRIMARY KEY,
  category       VARCHAR(1000),
  content        VARCHAR(1000),
  meaning        VARCHAR(1000),
  max_time       INT
);
*/









module.exports = snippetController;