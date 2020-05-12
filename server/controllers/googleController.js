const { google } = require('googleapis');

const GoogleController = {};
const oauth2Client = new google.auth.OAuth2(
  '42848154155-tqj1eajsrihntd2s8ov1bbbrco1m1fpq.apps.googleusercontent.com',
  'jnf-F3IrjV6TsXhrLttl_zfW',
  'http://localhost:3000/callback/google'
);

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
});

console.log('googleController Url: ', url);

GoogleController.setCredentials = async (req, res, next) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);

  console.log('google tokens: ', tokens);
  // oauth2Client.setCredentials(tokens);
  // onsole.log('oauth2Client credentials', oauth2Client.credentials);
  next();
};

module.exports = { googleController: GoogleController, url };
