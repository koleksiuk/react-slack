var UserStore = require('../stores/UserStore.js');

class Discussion {
  constructor({ userIds, id } = {}) {
    this.id = id;
    this.userIds = userIds;
    console.log([ this.userIds, this.id ]);
  }

  getMessages() {
    MessageStore.getMessageByIds(this.id)
  }

  getUsers() {
    UserStore.getUsersByIds(this.userIds)
  }
}

module.exports = Discussion
