var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.jsx');
var Message = require('../models/Message.js');
var moment = require("moment") // remove when default is removed

var defaultMessages = [
  new Message({ user: { name: "Konrad" }, body: "Cześć", timestamp: Number(moment().subtract(2, "minutes"))  }),
  new Message({ user: { name: "Janek" }, body: "Cześć", timestamp: Number(moment().subtract(40, "seconds"))}),
  new Message({ user: { name: "Konrad" }, body: "Co tam?", timestamp: Number(moment().subtract(10, "seconds"))})
]

var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions],

  onAddMessage: function({userName, body} = {}) {
    var newMessages = this.messages.concat(
      new Message({user: { name: userName }, body: body})
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
