import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fullList = Object.keys(this.props.User).map(
      key => this.props.User[key]
    );
    const renderedList = Object.keys(fullList).map(key => {
      return fullList[key];
    });
    return (
      <div className="userlist">
        {Object.keys(renderedList).map(key => {
          return (
            <div>
              <h2>{renderedList[key].Name}</h2>
              <h4>{renderedList[key].available}</h4>
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
