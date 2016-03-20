var React = require('react');
var ChatMessage = require('./Message.jsx');
var { Messages } = require('../../stores/MessageStore.js');


class ChatContainer extends React.Component {
  renderItem(message) {
    return <ChatMessage key={message.id} {...message} />
  }

  render() {
    return <div className="row">
      <div className="col-md-12">
        <ul className="chat-messages">
          {Messages.map(this.renderItem.bind(this))}
        </ul>
      </div>
    </div>
  }
}

module.exports = ChatContainer
