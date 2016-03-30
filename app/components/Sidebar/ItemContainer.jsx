var React = require('react');
var classNames = require('classnames');
var Discussion = require('../../models/Discussion.js');

class SidebarItemContainer extends React.Component {
  onSwitchDiscussion() {
    this.props.onSwitchDiscussion(this.props.discussion.id);
  }

  render() {
    var linkClasses = classNames(
      "sidebar-list-item",
      "list-group-item",
      { active: this.props.currentDiscussion.id == this.props.discussion.id }
    );

    return (
      <a href="#" className={linkClasses} onClick={this.onSwitchDiscussion.bind(this)}>
        {this.props.discussion.name}
        <span className="badge unread-messages-count">14</span>
      </a>
    )
  }
}

SidebarItemContainer.propTypes = {
  discussion: React.PropTypes.instanceOf(Discussion).isRequired,
  currentDiscussion: React.PropTypes.instanceOf(Discussion).isRequired,
  onSwitchDiscussion: React.PropTypes.func.isRequired
};

module.exports = SidebarItemContainer
