var React = require('react');
var ReactDom = require('react-dom');
var Sidebar = require('./Sidebar.jsx');
var ChatWindow = require('./Chat/Window.jsx');

class Main extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="col-md-2 row sidebar-container">
            <Sidebar />
          </div>
          <div className="col-md-10 chat-container">
            <ChatWindow />
          </div>
        </div>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('app'));
