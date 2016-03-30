var Message = require('../models/Message.js');
var moment = require("moment"); // remove when default is removed

var defaultMessages = {
  "1": [
    new Message({ user: { name: "Konrad" }, body: "Cześć", timestamp: Number(moment().subtract(2, "minutes"))  }),
    new Message({ user: { name: "Janek" }, body: "Cześć", timestamp: Number(moment().subtract(40, "seconds"))}),
    new Message({ user: { name: "Konrad" }, body: "Co tam?", timestamp: Number(moment().subtract(10, "seconds"))})
  ],
  "2": [
    new Message({ user: { name: "Konrad" }, body: "Cześć", timestamp: Number(moment().subtract(2, "minutes"))  })
  ]
};

class MessagesDAO {
  constructor(userId) {
    this.userId = userId;
  }

  setDiscussionId(discussionId) {
    this.discussionId = discussionId;

    return this;
  }

  create(userId, body) {
    if(!this.discussionId) { throw "No discussion set" }

    var oldMessages = defaultMessages[this.discussionId];

    var newMessages = oldMessages.concat(
      new Message({user: { name: "Anon" }, body: body})
    );

    defaultMessages[this.discussionId] = newMessages;
  }

  fetch() {
    var currentDiscussionId = this.discussionId;
    return new Promise(function(resolve, reject) {
      if(currentDiscussionId in defaultMessages) {
        resolve(defaultMessages[currentDiscussionId]);
      } else {
        return reject("No discussion found");
      }
    });
  }
}

module.exports = MessagesDAO
