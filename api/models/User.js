/**
 * User.js
 *
 * @description :: Representation of a user of the application
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      index: true,
      notNull: true
    },
    email: {
      type: 'email',
      unique: true,
      index: true
    },
    phoneNumber: {
      type: 'string',
      unique: true,
      index: true
    },
    movieRanking:{
      type: 'json'
    },
    movieTrash:{
      type: 'json'
    }
    // passports: {
    //   collection: 'Passport',
    //   via: 'user'
    // },
    // roles: {
    //   collection: 'Role',
    //   via: 'users',
    //   dominant: true
    // },
    // permissions: {
    //   collection: "Permission",
    //   via: "user"
    // },
  },
  getGravatarUrl: function () {
    var md5 = crypto.createHash('md5');
    md5.update(this.email || '');
    return 'https://gravatar.com/avatar/'+ md5.digest('hex');
  },

  toJSON: function () {
    var user = this.toObject();
    delete user.password;
    user.gravatarUrl = this.getGravatarUrl();
    return user;
  }
  
};

