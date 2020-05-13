const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const passport = require('passport');

const app = express();

const oauthController = require('./controllers/oauthController');
const { googleController } = require('./controllers/googleController');
// const twitterController = require('./controllers/twitterController');
const sessionController = require('./controllers/sessionController');
const cookieController = require('./controllers/cookieController');
const userController = require('./controllers/userController');
const PORT = 3000;
const apiRouter = require('./routes/api');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

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
// app.get('/twitter', (req, res) => {
//   console.log('Twitter is amazing');
//   res.status(200);
// });
// app.get(
//   '/twitter/callback',
//   passport.authenticate('twitter', { failureRedirect: '/' }),
//   (req, res) => {
//     // have to figure out session
//     console.log('Authenticated');
//     console.log(res.locals);
//     // successfull authentication
//     res.sendFile(path.join(__dirname, '../index.html'));
//   }
// );

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
