var Reflux = require('reflux');
var UsersDAO = require('../dao/UsersDAO.js');
var ChatActions = require('../actions/ChatActions.js');

var UserStore = Reflux.createStore({
  listenables: [],

  getInitialState: function() {
    this.dao = new UsersDAO();
    this.users = this.dao.getUsers();

    return this.users;
  }
})

module.exports = UserStore
