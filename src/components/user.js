import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.user);
    const current = Object.keys(this.props.user).map(
      key => this.props.user[key]
    );

    console.log(current);
    return (
      <div>
        {Object.keys(current).map(
          key => {
          return(  <div>
                <h2>{current[key].Name}</h2>
                <h4>{current[key].uid}</h4>
              </div>)
            })}
      </div>
    );
  }
}

export default User;
