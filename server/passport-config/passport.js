const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');
// https://api.twitter.com/oauth/authenticate?oauth_token=zcu2HAAAAAABEXI0AAABcg_Qkkw
passport.use(
  new TwitterStrategy(
    {
      consumerKey: 'VV0kuBE1fkPx3dl3bBnQ07NvU',
      consumerSecret: 'fJpiBMzcJyPc7t4QAzWxpRMoLiP66TmuzrdPIXSBziJtadi0XD',
      callbackUrl: 'http://localhost:3000/twitter/callback',
      proxy: true,
    },
    (token, tokenSecret, profile, cb) => {
      // console.log(profile.id);
      cb(null, profile);
    }
  )
);
passport.serializeUser((user, callback) => {
  // console.log('User Object: ', user);
  callback(null, user.id);
});
passport.deserializeUser((user, callback) => {
  // console.log(user);
  callback(null, user);
});

module.exports = passport;
