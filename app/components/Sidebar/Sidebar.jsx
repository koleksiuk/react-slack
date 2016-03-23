var React = require('react');
var Reflux = require('reflux');
var SidebarList = require('./List.jsx');
var ChatStore = require('../../stores/ChatStore.js');
var UserStore = require('../../stores/UserStore.js');

var Sidebar = React.createClass({
  mixins: [
    Reflux.connect(ChatStore, "chat"),
    Reflux.connect(UserStore, "user")
  ],

  render: function() {
    return (
      <div className="row sidebar">
        <SidebarList title="People" discussions={this.state.people} />
        <SidebarList title="Groups" discussions={this.state.chat.discussions} />
      </div>
    )
  }
})

module.exports = Sidebar
