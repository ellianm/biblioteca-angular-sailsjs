module.exports = function(req, res, next) {

  if(req.isSocket && req.socket.User) {
    req.User = req.socket.User;
    return next();
  }
  var token = req.headers["token"];

  function send401() {
    res.send(401, {err: 'E_LOGIN_REQUIRED', message: 'Login required'});
  }
  if(!token) return send401();

  sails.services.tokenauth.verifyToken(token, function(err, data) {
    if(err) return send401();
    User.findOne({id: data.userId}, function(err, User) {
      if(err) send401();
      req.User = User;
      next();
    });
  });
};
