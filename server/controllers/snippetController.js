const axios = require('axios');
const https = require('https');

const db = require('../models/snippetModel');

const snippetController = {};

// query selecting from our SQL databasse
// the SELECT DISTINCT make it so only unique categories are returned
snippetController.getCategories = (req, res, next) => {
  const query = 'SELECT DISTINCT category FROM snippet';
  db.query(query, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.categories = data.rows;
    return next();
  });
};

// gets all of the snippets from our database that matches the clicked category
snippetController.getSnippet = (req, res, next) => {
  const { search } = req.params;
  // console.log('we are getting the snippet with', )
  const query = `SELECT * FROM snippet WHERE category = '${search}'`;
  db.query(query, (err, data) => {
    if (err) {
      // console.log('errorin snippet query:', err)
      return next(err);
    }
    // console.log('Getting snippet', data.rows);
    res.locals.snippet = data.rows;
    return next();
  });
};

snippetController.getGitHubCode = async (req, res, next) => {
  try {
    const { githubRepos } = req.cookies;
    const results = await axios(githubRepos, {
      headers: {
        Authorization: `token ${req.cookies.githubAccessToken}`,
      },
    });
    const repos = results.data.map((repo) => repo.contents_url);
    const repoData = await Promise.all(
      repos.map((repoUrl) => {
        const sliceUrl = repoUrl.slice(0, repoUrl.indexOf('{+path}'));

        return axios(sliceUrl, {
          headers: {
            Authorization: `token ${req.cookies.githubAccessToken}`,
          },
        }).catch((e) => e);
      })
    );
    const validRepos = repoData.filter((result) => !(result instanceof Error));
    const randomRepo =
      validRepos[Math.floor(Math.random() * validRepos.length)];
    // console.log(randomRepo.data);
    const randomFile =
      randomRepo.data[Math.floor(Math.random() * randomRepo.data.length)];
    // console.log(randomFile.download_url);
    // const code = await https
    //   .request(randomFile.download_url, (response) => {
    //     console.log(response.(req.data));
    //   })
    //   .end();

    // const ressy = await code.json();
    // console.log(code.data);

    const code = await axios(randomFile.download_url, {
      headers: {
        Authorization: `token ${req.cookies.githubAccessToken}`,
      },
    });
    // console.log(code.data);
    res.locals.snippet = code.data;
    next();
  } catch (err) {
    next({
      log: `Error in getGitHubCode: ${err}`,
      status: 500,
      message: 'Couldnt get the users github code',
    });
  }
};

// populates the table (snippet) with our entries to the SQL database
// these were hard coded and added to the database and this function is no longer nessecary
// after populating the database
// feel free to use to populate the database with more snippets or turn it into an official route on the website.

snippetController.createDatabase = async (req, res, next) => {
  const query = `INSERT INTO snippet (category, content, meaning, max_time) 
                 VALUES ($1, $2, $3, $4)
                 RETURNING *`;
  const promiseArray = [];
  snippets.forEach((element) => {
    let totalWords = element[1].length / 5;
    let averageTime = Math.floor((totalWords / 25) * 60) + 15;
    element.push(averageTime);
    let values = element;
    promiseArray.push(db.query(query, values));
  });
  Promise.all(promiseArray).then((res) => next());
};

// schema for our snippet table
/*
CREATE TABLE snippet (
  snippet_id     SERIAL PRIMARY KEY,
  category       VARCHAR(1000),
  content        VARCHAR(1000),
  meaning        VARCHAR(1000),
  max_time       INT
);
*/
// HTML SQL JavaScript React Express
// category, content, meaning
// const html = "HTML";
// const sql = "SQL";
// const javascript = "JavaScript";
// const react = "React";
// const express = "Express";

// Add snippets here in the line65 format or follow snippet.txt, which is where we stored our entries for backup
// You can only add 5 at a time because we're on the free turtle plan on elephant SQL
// After the array is filled, send a postman post request to 8080/api/backdoor and it'll show up on the DB
const snippets = [];

module.exports = snippetController;
