var React = require('react');
var ChatMessage = require('./Message.jsx');
var Message = require('../../models/Message.jsx');

class ChatContainer extends React.Component {
  renderItem(message) {
    return <ChatMessage key={message.id} body={message.body} date={message.getDate()} userName={message.user.name} id={message.id} />
  }

  render() {
    return <div className="row">
      <div className="col-md-12">
        <ul className="chat-messages">
          {this.props.messages.map(this.renderItem.bind(this))}
        </ul>
      </div>
    </div>
  }
}

ChatContainer.propTypes = {
  messages: React.PropTypes.array.isRequired
}

module.exports = ChatContainer
