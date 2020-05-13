const twitterAuth = {
  strategy() {
    // Twitter Oauth
    const passport = require('passport');
    const TwitterStrategy = require('passport-twitter');
    const keys = require('./keys');

    // Twitter Oauth passport
    passport.use(
      new TwitterStrategy(
        {
          consumerKey: keys.clientKey,
          consumerSecret: keys.clientSecret,
          callbackUrl: 'http://localhost:3000/twitter/callback',
        },
        (token, tokenSecret, profile, cb) => {
          // callback
          cb(null, profile.id);
        }
      )
    );
  },
};

module.exports = twitterAuth;
