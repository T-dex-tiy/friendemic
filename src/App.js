import React, { Component } from 'react';
import logo from './logo.svg';
import firebase, { auth } from './firebase/firebase';
import Rebase from 're-base';
import LogIn from './components/login';
import User from './components/user';
import UserList from './components/Userlist';
import Online from './components/online';
import './styles/app.css';

const base = Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {},
      availability: {},
      localUser: null,
      uid: null
    };
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderLogin(logInfo) {
    const email = logInfo.email;
    const pass = logInfo.pass;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(snapshot => {
        let logInSucess = 'Logging in...';
        const userName = 'Welcome back';
        console.log('Yer in');
        this.setState({ localUser: snapshot.email });
        this.setState({ uid: snapshot.uid });
        localStorage.setItem('email', snapshot.email);
        localStorage.setItem('uid', snapshot.uid);
        base.syncState('User', {
          context: this,
          state: 'User'
        });
        base.syncState('availability', {
          context: this,
          state: 'availability'
        });
      })

      .catch(error => {
        let failStatus = 'Email/Password is incorrect. Please try again';
        console.log(error.code, 'Not today buddy');
      });
  }
  logOut(pageLogout) {
    console.log('signed out!');
    console.log(pageLogout);
    this.setState({ localUser: null });
    this.setState({ uid: null });
    this.setState({ User: null });
    this.setState({ availability: null });
    firebase.auth().signOut();
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <LogIn
            className="login"
            localUser={this.state.localUser}
            uid={this.state.uid}
            renderLogin={this.renderLogin.bind(this)}
            logOut={this.logOut.bind(this)}
          />
          <Online className="online" />
        </header>

        <main>
          <UserList />
          <User className="user" />
        </main>
      </div>
    );
  }
}

export default App;
