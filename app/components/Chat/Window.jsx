var React = require('react');
var Reflux = require('reflux');

var ChatForm = require('./Form.jsx');
var ChatContainer = require('./Container.jsx');
var DiscussionInfo = require('./DiscussionInfo.jsx');

var ThreadStore = require('../../stores/ThreadStore.js');

var Message = require("../../models/Message.js");

var ChatWindow = React.createClass({
  mixins: [Reflux.connect(ThreadStore, "messages")],

  getInitialState: function() {
    return {
      currentDiscussion: this.props.initialDiscussion
    };
  },

  render: function() {
    return <div className="chat-window">
      <DiscussionInfo />
      <ChatContainer messages={this.state.messages} />
      <ChatForm />
    </div>
  }
});

module.exports = ChatWindow
