var React = require('react');
var Reflux = require('reflux');

var ChatForm = require('./Form.jsx');
var ChatContainer = require('./Container.jsx');
var DiscussionInfo = require('./DiscussionInfo.jsx');

var ThreadStore = require('../../stores/ThreadStore.js');
var ChatStore = require('../../stores/ChatStore.js');

var Message = require("../../models/Message.js");

var ChatWindow = React.createClass({
  mixins: [
    Reflux.connect(ThreadStore, "messages"),
    Reflux.connect(ChatStore, "chat"),
  ],

  render: function() {
    return <div className="chat-window">
      <DiscussionInfo />
      <ChatContainer messages={this.state.messages} />
      <ChatForm />
    </div>
  }
});

module.exports = ChatWindow
