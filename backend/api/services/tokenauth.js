var jwt = require('jsonwebtoken');

var tokenauth = {

  generateToken: function(payload) {
    return jwt.sign(payload, "l1br4ry");
  },

  verifyToken: function(token, cb) {
    return jwt.verify(token, "l1br4ry", {}, cb);
  },

  getUser: function(token, cb) {
    tokenauth.verifyToken(token, function(err, data) {
      if(err) return cb(err);
      User.findOne({id: data.id}, function(err, User) {
        if(err) return cb(err);
        cb(null, User);
      });
    });
  }
};

module.exports = tokenauth;
