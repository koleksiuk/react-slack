var React = require('react');
var Reflux = require('reflux');
var SidebarList = require('./List.jsx');
var ChatStore = require('../../stores/ChatStore.js');
var ChatActions = require('../../actions/ChatActions.js');
var UserStore = require('../../stores/UserStore.js');

var Sidebar = React.createClass({
  mixins: [
    Reflux.connect(ChatStore, "chat"),
    Reflux.connect(UserStore, "user")
  ],

  switchDiscussionHandler: function(discussionId) {
    ChatActions.switchDiscussion(discussionId);
  },

  render: function() {
    return (
      <div className="row sidebar">
        <SidebarList title="Groups" discussions={this.state.chat.discussions} currentDiscussion={this.state.chat.currentDiscussion} onSwitchDiscussion={this.switchDiscussionHandler} />
      </div>
    )
  }
})

module.exports = Sidebar
