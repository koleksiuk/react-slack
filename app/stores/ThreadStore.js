var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.js');
var Message = require('../models/Message.js');

var defaultMessages = [
  new Message({ user: { name: "Konrad" }, body: "Cześć", timestamp: 1458422394000 }),
  new Message({ user: { name: "Janek" }, body: "Cześć", timestamp: 1458422594000 }),
  new Message({ user: { name: "Konrad" }, body: "Co tam?", timestamp: 1458423394000 })
]

var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions],

  onAddMessage: function(user, body) {
    var newMessages = this.messages.concat(
      new Message({user: { name: "Anon" }, body: body})
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
