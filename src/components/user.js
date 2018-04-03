import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let currentUser={}
    const current = Object.keys(this.props.user).filter(
      key => {
        console.log(key, "key");
        if(this.props.user[key].uid == this.props.uid){
          currentUser = this.props.user[key]
          return currentUser
        }
    }
    );

    console.log(currentUser);
    return (
      <div>
        <h4>{currentUser.Name}</h4>
      </div>
    );
  }
}

export default User;
