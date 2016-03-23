var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.js');
var ChatActions = require('../actions/ChatActions.js');

var MessagesDAO = require('../dao/MessagesDAO.js');


var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions, ChatActions],

  messages: [],
  dao: null,

  onAddMessage: function({userId, body} = {}) {
    this.dao.create(userId, body);

    this._fetchMessages();
  },

  onSwitchDiscussion: function(discussionId) {
    this.dao.setDiscussionId(discussionId);

    this._fetchMessages();
  },

  getInitialState: function() {
    if (!this.dao) {
      this.dao = new MessagesDAO(1);
      this.dao.setDiscussionId(1);
    }

    this._fetchMessages();

    return this.messages;
  },

  _fetchMessages: function() {
    var onMessagesFetched = function(messages) {
      this.messages = messages;
      this.trigger(messages);
    };

    this.dao.fetch().then(onMessagesFetched.bind(this));
  }
})

module.exports = ThreadStore
