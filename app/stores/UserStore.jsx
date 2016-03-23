var Reflux = require('reflux');

var USERS = [
  new User({ id: 1, name: "Janek" }),
  new User({ id: 2, name: "Konrad" }),
];

var UserStore = Reflux.createStore({
  getUserById(id) {
    // TODO: IMPLEMENT
  }

  getUsersByIds(ids) {
    // TODO: IMPLEMENT
  }

  getInitialState() {
    this.users = USERS
  }
})

module.exports = UserStore
