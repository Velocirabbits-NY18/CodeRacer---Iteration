// const express = require('express');
// const passport = require('passport');
// const path = require('path');
// const twitterPassport = require('../passport-config/passport');

// const router = express.Router();

// // passport setup
// router.use(passport.initialize()); // initialize user session
// router.use(passport.session()); // store user information in session

// router.get(
//   '/twitter',
//   twitterPassport.strategy,
//   passport.authenticate('twitter')
// );
// router.get(
//   '/twitter/callback',
//   passport.authenticate('twitter', { failureRedirect: '/' }),
//   (req, res, next) => {
//     // have to figure out session
//     console.log('Authenticated');
//     console.log(res.locals);
//     // successfull authentication
//     res.sendFile(path.join(__dirname, '../index.html'));
//   }
// );
