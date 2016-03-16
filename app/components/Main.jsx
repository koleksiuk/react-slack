var React = require('react');
var ReactDom = require('react-dom');
var Sidebar = require('./Sidebar.jsx');
var ChatWindow = require('./ChatWindow.jsx');

class Main extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <ChatWindow />
            </div>
          </div>
        </div>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('app'));