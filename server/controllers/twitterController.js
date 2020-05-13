module.exports = {
  getToken(req, res, next) {
    // console.log('Request:', req.user.displayName);
    res.locals.profile = { name: req.user.displayName };
    return next();
  },
};
