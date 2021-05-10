/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

  types: {
    password: function (password) {
      return password;
    }
  },

  attributes: {
    fullName: {
      type: 'string'
    },
    userName: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3
    },
    password: {
      type: 'string',
      password: true,
      minLength: 5,
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
    verifyPassword: function (password, callback) {
      return bcrypt.compare(password, this.password, callback);
    }
  },
  beforeCreate: function (data, callback) {
    bcrypt.hash(data.password, 6, function (err, hash) {
      data.password = hash;
      delete data.passwordConfirm;
      callback();
    });

  },
  beforeUpdate: function (data, callback) {
    if (data.password) {
      bcrypt.hash(data.password, 6, function (err, hash) {
        data.password = hash;
        delete data.passwordConfirm;
        callback();
      });
    } else {
      return callback();
    }
  }
};

