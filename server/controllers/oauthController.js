const fetch = require('node-fetch');
const oauthController = {};

const googleOAuth = {
  client_id:
    '42848154155-tqj1eajsrihntd2s8ov1bbbrco1m1fpq.apps.googleusercontent.com',
  client_secret: 'jnf - F3IrjV6TsXhrLttl_zfW',
};
const twitterOAuth = {
  client_token: '1260262660081410048-chbYyqOPaYc5PUe1Mc8xtWjslYrZxQ',
  client_secret: '4sK03oGa6nXWgTw8IGbP2IXh8UGEDD9DkIZ01KnSaNDCN',
};
// generic oauth flow for github access token
oauthController.getGithubToken = (req, res, next) => {
  // console.log("GETTING THE TOKEN")
  fetch('https://github.com/login/oauth/access_token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      // our client id/secret from https://github.com/Axolotl-4/CodeRacer
      client_id: '3b5392180e51bf2368e3',
      client_secret: '7e8af0296be2fbdb1898ce9dc532f7222e7daf66',
      code: req.query.code,
    }),
  })
    .then((res) => res.json())
    .then((token) => {
      res.locals.id = token;
      return next();
    });
};

// uses the oauth access token to get the user's information
oauthController.getUser = (req, res, next) => {
  // console.log("WE ARE GETTING USER")
  // console.log(" THIS IS OUR ID",res.locals.id);
  fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${res.locals.id.access_token}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      // console.log("We got our User:",result)
      res.locals.profile = result;
      return next();
    });
};

module.exports = oauthController;
