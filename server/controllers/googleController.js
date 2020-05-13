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
  scope: ['email', 'profile'],
});

console.log('googleController Url: ', url);

GoogleController.setCredentials = async (req, res, next) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const people = await google.people({
      version: 'v1',
      auth: oauth2Client,
    });

    res.locals.people = people;

    next();
  } catch (err) {
    console.log(err);
  }
};

GoogleController.getEmail = async (req, res, next) => {
  try {
    const { people } = res.locals;
    const result = await people.people.get({
      resourceName: 'people/me',
      personFields: ['emailAddresses', 'names'],
    });
    const email = result.data.emailAddresses[0].value;
    const name = result.data.names.displayName;
    console.log(result.data);
    res.locals.profile = { email, name };
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { googleController: GoogleController, url };
