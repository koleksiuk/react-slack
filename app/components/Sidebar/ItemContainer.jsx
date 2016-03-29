var React = require('react');
var Discussion = require('../../models/Discussion.js');
var ChatActions = require('../../actions/ChatActions.js');

class SidebarItemContainer extends React.Component {
  render() {
    return (
      <a href="#" className="sidebar-list-item list-group-item" onClick={ChatActions.switchDiscussion.bind(this, this.props.discussion.id)}>
        {this.props.discussion.name}
        <span className="badge unread-messages-count">14</span>
      </a>
    )
  }
}

SidebarItemContainer.propTypes = {
  discussion: React.PropTypes.instanceOf(Discussion).isRequired
};

module.exports = SidebarItemContainer