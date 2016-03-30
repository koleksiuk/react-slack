var Reflux = require('reflux');
var ThreadActions = require('../actions/ThreadActions.js');
var ChatActions = require('../actions/ChatActions.js');

var MessagesDAO = require('../dao/MessagesDAO.js');


var ThreadStore = Reflux.createStore({
  listenables: [ThreadActions, ChatActions],

  messages: [],
  messagesDao: null,

  onAddMessage: function({userId, body} = {}) {
    this.messagesDao.create(userId, body);

    this._fetchMessages();
  },

  onSwitchDiscussion: function(discussionId) {
    console.log("ThreadStore - onSwitchDiscussion:" + discussionId);
    this.messagesDao.setDiscussionId(discussionId);

    this._fetchMessages();
  },

  getInitialState: function() {
    if (!this.messagesDao) {
      this.messagesDao = new MessagesDAO(1);
      this.messagesDao.setDiscussionId(1);
    }

    this._fetchMessages();

    return this.messages;
  },

  _fetchMessages: function() {
    var onMessagesFetched = function(messages) {
      this.messages = messages;
      this.trigger(messages);
    };

    this.messagesDao.fetch().then(onMessagesFetched.bind(this));
  }
})

module.exports = ThreadStore
