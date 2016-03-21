var React = require('react');

var ThreadActions = require('../../actions/ThreadActions.js');

class ChatForm extends React.Component {
  handleValueChange(evt) {
    if (evt.which === 27) {
      // hit escape, clear without creating
      this.refs.textMessage.value = "";
    }
  }


  handleSubmit(e) {
    e.preventDefault();

    var textMessage = this.refs.textMessage;

    var text = textMessage.value;

    if (text && text != "") {
      ThreadActions.addMessage({ userName: "Anon", body: text });
      textMessage.value = "";
    }
  }

  render() {
    return <div className="message-form">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                ref="textMessage"
                placeholder="Type in your message here..."
                rows="1"
                autoFocus
                onKeyUp={this.handleValueChange.bind(this)}
              />

              <div className="input-group-btn">
                <button type="submit" className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
}

module.exports = ChatForm
