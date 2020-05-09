const jwt = require('jsonwebtoken')
const sessionController = {};
const secret = 'thisisasecret'


sessionController.createSession = (req, res, next) => {
  token = jwt.sign(res.locals.user, secret, { expiresIn: '1h' })
  res.cookie(ssid, token, { httpOnly: true })
  next();
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