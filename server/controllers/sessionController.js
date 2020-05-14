const jwt = require('jsonwebtoken');
const sessionController = {};
const secret = 'thisisasecret';
const db = require('../models/snippetModel');

//creates the jwt and saves it to our cookie
sessionController.createSession = (req, res, next) => {
  const token = jwt.sign(res.locals.profile, secret, { expiresIn: '1h' });
  res.cookie('name', res.locals.profile.name);
  res.cookie('ssid', token, { httpOnly: true });
  console.log('we made a session');
  return next();
};

//verfies that the jwt within our cookies matches and if so stores the user's information to res.locals
sessionController.verify = (req, res, next) => {
  // console.log('we are in the sessionController.verify')
  jwt.verify(req.cookies.ssid, secret, (err, result) => {
    if (err) {
      res.status(404).send("Couldn't verify jwt");
    } else {
      res.locals.verifiedjwt = result;
      // console.log(res.locals.verifiedjwt.name); 
      res.locals.name = res.locals.verifiedjwt.name; // this stores user's name in res.locals
      // console.log('getting through verify middleware')
      return next();
    }
  });
};

module.exports = sessionController;
