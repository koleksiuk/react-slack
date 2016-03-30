var Reflux = require('reflux');
var ChatActions = require('../actions/ChatActions.js');
var Discussion = require('../models/Discussion.js');

var DiscussionsDAO = require('../dao/DiscussionsDAO.js');

var ChatStore = Reflux.createStore({
  listenables: [ChatActions],

  discussions: [],
  currentDiscussion: new Discussion(),
  discussionsDao: null,

  onSwitchDiscussion: function(discussionId) {
    console.log("Chat store - onSwitchDiscussion:" + discussionId);
    this._fetchDiscussion(discussionId);
    this.trigger({ discussions: this.discussions, currentDiscussion: this.currentDiscussion });
  },

  getInitialState: function() {
    if (!this.discussionsDao) {
      this.discussionsDao = new DiscussionsDAO();
      this._fetchDiscussions();
    }

    return { discussions: this.discussions, currentDiscussion: this.currentDiscussion };
  },

  _fetchDiscussions: function() {
    var onDiscussionsFetched = function(discussions) {
      this.discussions = discussions;
      this.trigger({ discussions: discussions, currentDiscussion: this.currentDiscussion });
    }

    this.discussionsDao.getDiscussions().then(onDiscussionsFetched.bind(this));
  },

  _fetchDiscussion: function(discussionId) {
    var onDiscussionFetched = function(discussion) {
      this.currentDiscussion = discussion;
      this.trigger({ discussions: this.discussions, currentDiscussion: this.currentDiscussion });
    }

    this.discussionsDao.getDiscussion(discussionId).then(onDiscussionFetched.bind(this));
  }
})

module.exports = ChatStore
