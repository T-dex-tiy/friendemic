import React, { Component } from 'react';
import firebase, { auth } from '../firebase/firebase.js';

// auth.signInWithPassword(email,pass)

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.logInfo = this.logInfo.bind(this);
    this.pageLogout = this.pageLogout.bind(this);
  }

  logInfo() {
    const pass = this.refs.pass.value;
    const email = this.refs.email.value;
    const userdata = { email, pass };
    this.props.renderLogin(userdata);
    console.log(this.props.user, this.props.uid);
  }

  pageLogout() {
    console.log('signed out!');
    const email = null;
    const uid = null;
    const userData = { email, uid };
    this.props.logOut(userData);
    firebase.auth().signOut();
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  render() {
    if (this.props.localUser === null) {
      return (
        <div className="loginPage">
          <div className="loginFields">
            <input
              className="inputfield"
              type="text"
              ref="email"
              placeholder="Email"
            />
            <input
              className="inputfield"
              type="password"
              ref="pass"
              placeholder="Password"
            />
          </div>
          <div>
            <button onClick={() => this.logInfo('email', 'pass')}>
              Click to Enter
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Welcome back {this.props.localUser}
          <div>
            <button onClick={() => this.pageLogout()}>Log Out</button>
          </div>
        </div>
      );
    }
  }
}
export default LogIn;
