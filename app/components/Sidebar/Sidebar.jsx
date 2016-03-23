var React = require('react');
var SidebarList = require('./List.jsx');
var ChatStore = require('../../stores/ChatStore.jsx');

class Sidebar extends React.Component {
  render() {
    return (
      <div className="row sidebar">
        <SidebarList title="People" discussions={PEOPLE} />
        <SidebarList title="Groups" discussions={DISCUSSIONS} />
      </div>
    )
  }
}

module.exports = Sidebar