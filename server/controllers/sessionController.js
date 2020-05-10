const jwt = require('jsonwebtoken')
const sessionController = {};
const secret = 'thisisasecret'


sessionController.createSession = (req, res, next) => {

  const token = jwt.sign(res.locals.profile, secret, { expiresIn: '1h' })
  res.cookie('ssid', token, { httpOnly: true })
  // console.log("we made a session")
  return next();
}

sessionController.verify = (req, res, next) => {
  jwt.verify(req.cookies.ssid, secret, (err, result) => {
    if(err) {
      res.status(404).send('Couldn\'t verify jwt');
    } else {
      res.locals.verifiedjwt = result;
      return next();
    }
  })
}

module.exports = sessionController;