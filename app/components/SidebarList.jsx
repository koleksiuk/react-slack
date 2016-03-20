var React = require('react');
var SidebarItemContainer = require('./SidebarItemContainer.jsx');

class SidebarList extends React.Component {
  renderItem(discussion, index) {
    return (
      <SidebarItemContainer discussion={discussion} key={index} />
    )
  }

  render() {
    return (
      <div className="sidebar-list">
        <div className="panel panel-default">
          <div className="panel-heading sidebar-list-title">{this.props.title}</div>
          <div className="list-group">
            {
              this.props.discussions.map(this.renderItem.bind(this))
            }
          </div>
        </div>
      </div>
    )
  }
}

SidebarList.propTypes = {
  title: React.PropTypes.string.isRequired,
  discussions: React.PropTypes.array.isRequired
};

SidebarList.defaultProps = {
  discussions: []
};

module.exports = SidebarList