// Twitter Oauth
const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');

// Twitter Oauth passport
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitter.clientKey,
      consumerSecret: keys.twitter.clientSecret,
      callbackUrl: 'http://localhost:3000/twitter/callback',
    },
    (token, tokenSecret, profile, cb) => {
      // callback
    }
  )
);
