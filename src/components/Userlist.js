import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="userlist">
        <div className="items">1</div>
        <div className="items">2</div>
        <div className="items">3</div>
        <div className="items">4</div>
        <div className="items">5</div>
        <div className="items">6</div>
        <div className="items">7</div>
        <div className="items">8</div>
        <div className="items">9</div>
        <div className="items">10</div>
      </div>
    );
  }
}

export default UserList;
