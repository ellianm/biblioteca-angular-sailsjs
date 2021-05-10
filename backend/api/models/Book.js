/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    author: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    releaseDate: {
      type: 'date'
    },
    status: {
      type: 'string'
    },
    user: {
      model: 'user'
    },
    pictureURL: {
      type: 'text'
    },
    favorited: {
      type: 'string'
    }
  }
};

