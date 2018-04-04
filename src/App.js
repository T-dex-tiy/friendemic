import React, { Component } from 'react';
import logo from './logo.svg';
import firebase, { auth } from './firebase/firebase';
import Rebase from 're-base';
import LogIn from './components/login';
import User from './components/user';
import UserList from './components/Userlist';
import './styles/app.css';

const base = Rebase.createClass(firebase.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {},
      availability: {},
      localUser: null,
    };
  }


  renderLogin(logInfo) {
    const email = logInfo.email;
    const pass = logInfo.pass;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(snapshot => {
        console.log(snapshot);
        let logInSucess = 'Logging in...';
        const userName = 'Welcome back';
        console.log('Yer in');
        this.setState({ localUser: snapshot.email });
        localStorage.setItem('email', snapshot.email);
        // localStorage.setItem('uid', snapshot.uid);
        base.syncState('User', {
          context: this,
          state: 'User'
        });
        base.syncState('available', {
          context: this,
          state: 'availability'
        });
        // base.removeBinding(this.ref);
      })

      .catch(error => {
        let failStatus = 'Email/Password is incorrect. Please try again';
        console.log(error.code, 'Not today buddy');
      });
  }

newUser(createNewUser){
  const email=createNewUser.email;
  const pass=createNewUser.pass
  const newUser={...this.state.User}
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.then(snapshot=>{
    createNewUser["uid"]=snapshot.uid
    console.log(snapshot.uid);
  }
  )
  promise.catch(e=>console.log(e.message))
  const key = createNewUser.Name
  createNewUser.key=key
  newUser[key]=createNewUser,
  console.log(newUser, createNewUser);
  this.setState({User:newUser})
}

  componentWillUnmount() {
    base.removeBinding(this.ref);
    console.log(base);
  }


// bug is here. Deleting db when logging out
  // logOut(pageLogout) {
  //   console.log('signed out!');
  //   console.log(pageLogout);
  //   this.setState({ localUser: null });
  //   this.setState({ uid: null });
  //   this.setState({ User: null });
  //   // this.setState({ availability: null });
  //   firebase.auth().signOut();
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('uid');
  // }
toggleAvailable(event){
  console.log(event.target);
  console.log(this.state);
  let currentUser={};
  let test={}
  const userAvailbilty= Object.keys(this.state.User).filter(
    key => {
      if(this.state.User[key].email == this.state.localUser){
        currentUser = this.state.User[key]

        currentUser.available=!currentUser.available
        console.log(currentUser.available);
        return currentUser.available
      }
      const updatedUser={...this.state.User, currentUser}
      this.setState({User:updatedUser})
      console.log(this.state.User);


})}




  render() {
    const localMachine = Object.keys(this.state.User).map(
      key => this.state.User[key]
    );
    let userList;
    if (this.state.User == null) {
      userList = <p>Please Log in</p>;
    } else {
      userList = <UserList User={this.state.User} />;
    }

    let localUser;
    if (this.state.User == null) {
      localUser = <div>Log in to select status</div>;
    }
    else {
      localUser = <User user={this.state.User} localUser={this.state.localUser}
        newUser={this.newUser.bind(this)} availability={this.state.availability}
        toggleAvailable={this.toggleAvailable.bind(this)}

        />
      };

    return (
      <div className="App">
        <header>
          <LogIn
            className="login"
            localUser={this.state.localUser}
            renderLogin={this.renderLogin.bind(this)}

          />
        </header>

        <main>
          {userList}
          {localUser}
        </main>
      </div>
    );
  }
}

export default App;
