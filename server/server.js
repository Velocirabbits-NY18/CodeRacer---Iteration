const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');

// Authentication packages
const passport = require('passport');
const session = require('express-session');

const app = express();

const oauthController = require('./controllers/oauthController');
const { googleController } = require('./controllers/googleController');
// const twitterController = require('./controllers/twitterController');
const twitterPassport = require('./passport-config/passport');
const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');
const userController = require('./controllers/userController');
const PORT = 3000;
const apiRouter = require('./routes/api');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
// Authentication
app.use(
  session({
    // connect.sid
    secret: 'keyboard cat', // like hash function for cookie
    resave: false, // if true would resave even when change isn't made to sessioon
    saveUninitialized: false, // only creating cookie/session for logged in user
    cookie: { secure: false }, // http not https
  })
);
// has to be under express sessions middleware
app.use(passport.initialize()); // initialize user session
app.use(passport.session()); // store user information in session
// boiler plate to get everything working.

// production variable to ensure /build file is used when in production mode

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.get('/callback/google', googleController.setCredentials, (req, res) => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === undefined
  ) {
    // console.log("WE ARE IN DEV ENVIRONMENT")
    res.redirect('http://localhost:8080');
  } else {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
});

// Oauth flow for github
app.get(
  '/callback',
  oauthController.getGithubToken,
  oauthController.getUser,
  sessionController.createSession,
  (req, res) => {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === undefined
    ) {
      // console.log("WE ARE IN DEV ENVIRONMENT")
      res.redirect('localhost:8080');
    } else {
      res.sendFile(path.join(__dirname, '../index.html'));
    }
  }
);

// // Oauth flow for Twitter
app.get('/twitter', twitterPassport.strategy, passport.authenticate('twitter'));
app.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res, next) => {
    // have to figure out session
    console.log('Authenticated');
    console.log(
      'token: ',
      req.query.oauth_token,
      'verifier: ',
      req.query.oauth_verifier
    );
    // successfull authentication
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === undefined
    ) {
      // console.log("WE ARE IN DEV ENVIRONMENT")
      res.redirect('http://localhost:8080');
    } else {
      res.sendFile(path.join(__dirname, '../index.html'));
    }
  }
);

app.get('/test', sessionController.verify, (req, res) => {
  console.log('This is a test');
  res.send(200);
});

// end of production mode stuff.

// used to check the user's JWT.

app.get('/verify', sessionController.verify, (req, res) => {
  res.status(200).send();
});

//all interactions with postgresql go through our API router
app.use('/api', apiRouter);

//generic error handler
app.use('*', (req, res, next) => {
  res.status(404).send('YOU TRIED A NON EXISTENT PATH');
});

// Error Handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: `'MIDDLEWARE ERROR', ${err}`,
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(PORT, () => console.log('listening on port 3000'));
module.exports = app;
