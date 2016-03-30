var UserStore = require('../stores/UserStore.js');

class Discussion {
  constructor({ userIds, id, name = '' } = {}) {
    this.id = id;
    this.userIds = userIds;
    this.name = name;
  }

  getMessages() {
    //MessageStore.getMessageByIds(this.id)
  }

  getUsers() {
    //UserStore.getUsersByIds(this.userIds)
  }
}

module.exports = Discussion
