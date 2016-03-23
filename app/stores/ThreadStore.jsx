var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.jsx');
var Message = require('../models/Message.jsx');
var moment = require("moment") // remove when default is removed

var defaultMessages = [
  new Message({ userId: 1, discussionId: 1, body: "Cześć", timestamp: Number(moment().subtract(2, "minutes"))  }),
  new Message({ userId: 2, discussionId: 1, body: "Cześć", timestamp: Number(moment().subtract(40, "seconds"))}),
  new Message({ userId: 1, discussionId: 1, body: "Co tam?", timestamp: Number(moment().subtract(10, "seconds"))})
]

var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions],

  onAddMessage: function({userId, discussionId, body} = {}) {
    var newMessages = this.messages.concat(
      new Message({userId: userId, body: body})
    );

    this.trigger(newMessages);

    this.messages = newMessages;
  },

  getInitialState: function() {
    if (!this.messages) {
      this.messages = defaultMessages;
    }

    return this.messages;
  }
})

module.exports = ThreadStore
