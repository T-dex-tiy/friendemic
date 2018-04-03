import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fullList = Object.keys(this.props.User).map(
      key => this.props.User[key]
    );
    const renderedList = Object.keys(fullList).map(key => fullList[key]);
    const statusName = Object.keys(fullList).map(key => {
      return fullList[key].available ? 'listIems online' : 'listItems offline';
    });

    return (
      <div className="listItems">
        {Object.keys(renderedList).map(key => {
          return (
            <div
              className={
                renderedList[key].available
                  ? 'listItems online'
                  : 'listItems offline'
              }
            >
              <h2>{renderedList[key].Name}</h2>
              <h4>{renderedList[key].location}</h4>
              <h4>{renderedList[key].email}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList;
