const twitterAuth = {
  strategy(req, res, next) {
    // Twitter Oauth
    const passport = require('passport');
    const TwitterStrategy = require('passport-twitter');
    const keys = require('./keys');

    // Twitter Oauth passport
    passport.use(
      new TwitterStrategy(
        {
          consumerKey: 'P4zEfakB20HeuY1q20YX95oOC',
          consumerSecret: 'AseP6nvy43ThIWLpyTyyGDzxTVwJ4dbGjB6Kgl6XUkzusMY1uk',
          callbackUrl: 'http://localhost:3000/twitter/callback',
          proxy: true,
        },
        (token, tokenSecret, profile, cb) => {
          // callback
          cb(null, profile.id);
        }
      )
    );
    passport.serializeUser((user, callback) => {
      callback(null, user);
    });
    passport.deserializeUser((user, callback) => {
      callback(null, user);
    });
    console.log('Leaving Twitter Strategy');
    return next();
  },
};

module.exports = twitterAuth;
