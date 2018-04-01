import React, { Component } from 'react';
import logo from './logo.svg';
import firebase, { auth } from './firebase/firebase';
import Rebase from 're-base';
import User from './components/user';
import UserList from './components/Userlist';
import './styles/app.css';

const base = Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {}
    };
  }

  componentDidMount() {
    base.syncState('User', {
      context: this,
      state: 'User'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    return (
      <div className="App">
        <UserList />
        <User className="user" />
      </div>
    );
  }
}

export default App;
