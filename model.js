var mongoose = require('mongoose');

var users = mongoose.model('users',{
  name: {
    type: String
  }
});
module.exports = {users};