var React = require('react');
var moment = require('moment')

var TIMESTAMP_REFRESH = 30 * 1000; // 30 seconds

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fromNowDate: this.props.date.fromNow()
    }

    setInterval(this.updateDate.bind(this), TIMESTAMP_REFRESH);
  }

  updateDate() {
    console.log(this);
    this.setState({
      fromNowDate: this.props.date.fromNow()
    });
  }

  render() {
    return <li>
      <div className="row">
        <div className="col-md-12">{this.props.body}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span className="message-author pull-right">{this.state.fromNowDate} | {this.props.userName}</span>
        </div>
      </div>
    </li>
  }
}

ChatMessage.propTypes = {
  id: React.PropTypes.number.isRequired,
  body: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(moment).isRequired,
  userName: React.PropTypes.string.isRequired
}

module.exports = ChatMessage
