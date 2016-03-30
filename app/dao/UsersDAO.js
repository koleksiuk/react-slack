var User = require("../models/User.js");

var USERS = {
  "1": new User({ id: 1, name: "Janek" }),
  "2": new User({ id: 2, name: "Konrad" })
};

class UsersDAO {
  getUsers() {
    return [USERS[1], USERS[2]];
  }

  getUserById(id) {
    return USERS[id];
  }
}

module.exports = UsersDAO
