const { google } = require('googleapis');
const fetch = require('node-fetch');

const GoogleController = {};
const oauth2Client = new google.auth.OAuth2(
  '42848154155-tqj1eajsrihntd2s8ov1bbbrco1m1fpq.apps.googleusercontent.com',
  'jnf-F3IrjV6TsXhrLttl_zfW',
  'http://localhost:3000/callback/google'
);

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/userinfo.profile'],
});

console.log('googleController Url: ', url);

GoogleController.setCredentials = async (req, res, next) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    await oauth2Client.setCredentials(tokens);
    console.log(tokens);
    const people = await google.people({
      version: 'v1',
      auth: oauth2Client,
    });

    const result = await people.people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses',
    });

    // console.log(result);

    // console.log('google tokens: ', oauth2Client.credentials);
    // oauth2Client.setCredentials(tokens);
    // onsole.log('oauth2Client credentials', oauth2Client.credentials);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { googleController: GoogleController, url };
