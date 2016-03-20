var React = require('react');

class ChatForm extends React.Component {
  render() {
    return <div className="message-form">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" ref="textMessage" placeholder="Type in your message here..." rows="1" />
              <div className="input-group-btn">
                <button type="submit" className="btn btn-success">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
}

module.exports = ChatForm
