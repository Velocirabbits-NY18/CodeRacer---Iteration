const cookieController = {};

cookieController.setSSID = (req, res, next) => {
  console.log(res.locals.profile)
  set.cookie('ssid', res.locals.profile, { httpsOnly: true })
}


module.exports = cookieController;