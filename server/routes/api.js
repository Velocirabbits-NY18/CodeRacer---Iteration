const express = require('express');
const snippetController = require('../controllers/snippetController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const router = express.Router();

<<<<<<< HEAD
//populates nav bar with our categories from our database
=======
// populates nav bar with our categories from our database
>>>>>>> master
router.get('/', snippetController.getCategories, (req, res, next) => {
  return res.status(200).json(res.locals.categories);
});

<<<<<<< HEAD
//when clicking a category, gets a random snippet from that category and puts it into the codesnippet
=======
// when clicking a category, gets a random snippet from that category and puts it into the codesnippet
>>>>>>> master
router.get('/:search', snippetController.getSnippet, (req, res, next) =>
  res.status(200).json(res.locals.snippet)
);

<<<<<<< HEAD
//checks if our resulting WPM is higehr than the wpm stored in the DB and responds accordingly
=======
// checks if our resulting WPM is higehr than the wpm stored in the DB and responds accordingly
>>>>>>> master
router.post(
  '/highScore',
  sessionController.verify,
  userController.setHighScore,
  (req, res, next) => res.status(200).json(res.locals.scoreBoardResponse)
);

<<<<<<< HEAD
//this is the route used to populate our DB with snippets
//no longer has use after popuatling SQL DB
=======
// this is the route used to populate our DB with snippets
// no longer has use after popuatling SQL DB
>>>>>>> master
router.post('/backdoor', snippetController.createDatabase, (req, res, next) =>
  res.status(200).send()
);

module.exports = router;
