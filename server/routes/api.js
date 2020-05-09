const express = require('express')
const snippetController = require('../controllers/snippetController');
const router = express.Router();

router.get('/', snippetController.getCategories, (req, res, next) => {
  return res.status(200).json(res.locals.categories)
});

router.get('/:search',
  snippetController.getSnippet,
  (req, res, next) => res.status(200).json(res.locals.snippet)
);


router.post('/backdoor',
  snippetController.createDatabase,
  (req, res, next) => res.status(200).send()
)

module.exports = router;