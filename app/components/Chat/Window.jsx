var React = require('react');
var ChatForm = require('./Form.jsx');
var ChatContainer = require('./Container.jsx');
var DiscussionInfo = require('./DiscussionInfo.jsx');

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDiscussion: props.initialDiscussion
    };
  }

  render() {
    return <div className="chat-window">
      <DiscussionInfo />
      <ChatContainer />
      <ChatForm />
    </div>
  }
}

module.exports = ChatWindow
