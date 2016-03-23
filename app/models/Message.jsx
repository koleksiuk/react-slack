var moment = require('moment');

class Message {
  constructor({ discussionId, userId, body, id, timestamp } = {}) {
    this.timestamp = timestamp || Number(new Date());
    this.id = id || this.timestamp;
    this.discussionId = discussionId;
    this.userId = userId;
    this.body = body;
    console.log([ this.discussionId, this.userId, this.body, this.id, this.timestamp ]);
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }

  setId(id) {
    this.id = id;
  }

  getUser() {
    // TODO: IMPLEMENT
  }

  getDiscussion() {
    // TODO: IMPLEMENT
  }

  getDate() {
    return moment(this.timestamp);
  }
}

module.exports = Message
