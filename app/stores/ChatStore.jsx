var Reflux = require('reflux');
var ChatActions = require('../actions/ChatActions.jsx');

var ChatStore = Reflux.createStore({
  listenables: [ChatActions],

  onSwitchDiscussion: function(discussion) {
  },

  getInitialState: function() {
  }
})

module.exports = ChatStore
