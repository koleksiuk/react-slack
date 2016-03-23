var moment = require('moment');

class Message {
  constructor({ user, body, id, timestamp } = {}) {
    this.timestamp = timestamp || Number(new Date());
    this.id = id || this.timestamp;
    this.user = user;
    this.body = body;
    console.log([ this.user.name, this.body, this.id, this.timestamp ]);
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }

  setId(id) {
    this.id = id;
  }

  getDiscussion() {
    // TODO: IMPLEMENT
  }

  getDate() {
    return moment(this.timestamp);
  }
}

module.exports = Message
