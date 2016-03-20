var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.js');

var defaultMessages = [
  { id: 1, authorName: "Konrad", body: "Cześć!" },
  { id: 2, authorName: "Janek", body: "Cześć Konrad! Jak tam?" },
  { id: 3, authorName: "Konrad", body: "A dobrze." }
]

var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions],

  onAddMessage: function(authorName, body) {
    var nextId = this.messages[this.messages.length - 1].id + 1;

    var newMessages = this.messages.concat(
      { id: nextId, authorName: authorName, body: body }
    );

    console.log(newMessages);
    this.trigger(newMessages);

    this.messages = newMessages;
  },

  getInitialState: function() {
    console.log("loaded");

    if (!this.messages) {
      this.messages = defaultMessages;
    }

    return this.messages;
  }
})

module.exports = ThreadStore
