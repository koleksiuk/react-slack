var Reflux = require('reflux');
var ChatActions = require('../actions/ChatActions.js');
var Discussion = require('../models/Discussion.js');

var DISCUSSIONS = [
  new Discussion({ id: 1, name: "Team channel", userIds: [1, 2]}),
  new Discussion({ id: 2, name: "Fellow devs" , userIds: [1, 2]})
];

var ChatStore = Reflux.createStore({
  listenables: [ChatActions],

  onSwitchDiscussion: function(discussion) {
    this.currentDiscussion = discussion;
  },

  getDiscussions: function() {
    return this.discussions;
  },

  getInitialState: function() {
    this.discussions = DISCUSSIONS;
    this.currentDiscussion = this.discussions[0];

    return { discussions: this.discussions, currentDiscussion: this.currentDiscussion };
  }
})

module.exports = ChatStore
