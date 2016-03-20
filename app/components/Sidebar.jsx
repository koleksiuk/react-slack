var React = require('react');
var SidebarList = require('./SidebarList.jsx');

var PEOPLE = [
  { id: 1, name: "Janek"},
  { id: 2, name: "Konrad"},
];

var GROUPS = [
  { id: 1, name: "Team channel"},
  { id: 2, name: "Fellow devs"},
];

class Sidebar extends React.Component {
  render() {
    return (
      <div className="row sidebar">
        <SidebarList title="People" discussions={PEOPLE} />
        <SidebarList title="Groups" discussions={GROUPS} />
      </div>
    )
  }
}

module.exports = Sidebar