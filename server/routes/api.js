const express = require('express')
const snippetController = require('../controllers/snippetController');
const router = express.Router();

router.get('/',
    snippetController.getSnippet,
    (req, res, next) => res.status(200).json(res.locals.snippet));

module.exports = router;