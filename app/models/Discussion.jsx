var UserStore = require('../store/UserStore.jsx');

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
