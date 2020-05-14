const express = require('express');
const snippetController = require('../controllers/snippetController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const router = express.Router();

// populates nav bar with our categories from our database
router.get('/', 
  snippetController.getCategories,
  sessionController.verify, // this will send name back to MainContainer
  (req, res, next) => {
  return res.status(200).json({
    categories: res.locals.categories,
    name: res.locals.name
  });
});

// when clicking a category, gets a random snippet from that category and puts it into the codesnippet
router.get('/:search', snippetController.getSnippet, (req, res, next) =>
  res.status(200).json(res.locals.snippet)
);

// checks if our resulting WPM is higehr than the wpm stored in the DB and responds accordingly
router.post(
  '/highScore',
  sessionController.verify,
  userController.setHighScore,
  (req, res, next) => res.status(200).json(res.locals.scoreBoardResponse)
);

// this is the route used to populate our DB with snippets
// no longer has use after popuatling SQL DB
router.post('/backdoor', snippetController.createDatabase, (req, res, next) =>
  res.status(200).send()
);

module.exports = router;
