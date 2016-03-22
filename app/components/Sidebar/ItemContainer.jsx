var React = require('react');

class SidebarItemContainer extends React.Component {
  render() {
    return (
      <a href="#" className="sidebar-list-item list-group-item">
        {this.props.discussion.name}
        <span className="badge unread-messages-count">14</span>
      </a>
    )
  }
}

SidebarItemContainer.propTypes = {
  discussion: React.PropTypes.object.isRequired
};

module.exports = SidebarItemContainer