// require passport
const passport = require('passport');
// require passport-twitter
const TwitterStrategy = require('passport-twitter');

const twitterController = {};
// create a new strategy using passport.use
// consumer key: P4zEfakB20HeuY1q20YX95oOC
// consumer secret: AseP6nvy43ThIWLpyTyyGDzxTVwJ4dbGjB6Kgl6XUkzusMY1uk
// callback url: http://localhost:3000/twitter/callback
passport.use(
  new TwitterStrategy(
    {
      consumerKey: 'P4zEfakB20HeuY1q20YX95oOC',
      consumerSecret: 'AseP6nvy43ThIWLpyTyyGDzxTVwJ4dbGjB6Kgl6XUkzusMY1uk',
      callbackUrl: 'http://localhost:3000/twitter/callback',
    },
    function (token, tokenSecret, profile, cb) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
//token: 1260262660081410048-zDI9znffBENST0WANbhMbQxQNCfRm8
//token-secret: QGJz1A7wsg0uWZuu63cotcmVGQziM9m7cmvf0tmVnjnn1
module.exports = twitterController;
