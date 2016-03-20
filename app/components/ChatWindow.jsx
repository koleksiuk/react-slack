var React = require('react');
var DiscussionInfo = require('./DiscussionInfo.jsx');

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDiscussion: props.initialDiscussion
    };
  }

  render() {
    return (
      <div className="chat-window">
        <DiscussionInfo />
      </div>
    )
  }
}

module.exports = ChatWindow