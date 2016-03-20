var React = require('react');

class ChatMessage extends React.Component {
  render() {
    return <li>
      <div className="row">
        <div className="col-md-12">{this.props.body}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span className="message-author pull-right">{this.props.authorName}</span>
        </div>
      </div>
    </li>
  }
}

ChatMessage.propTypes = {
  id: React.PropTypes.number.isRequired,
  body: React.PropTypes.string.isRequired,
  authorName: React.PropTypes.string.isRequired
}

module.exports = ChatMessage
