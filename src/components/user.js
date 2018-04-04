import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.createNewUser= this.createNewUser.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(e){

     let localUser={}
    const user= Object.keys(this.props.user).filter(key=>{
      if(this.props.user[key].uid == this.props.uid){
        this.props.user[key].available = !this.props.user[key].available
        return this.props.user[key].available
    }})

console.log(localUser);

}

  createNewUser(){
    // const pass= this.refs.pass.value
    // const email= this.refs.email.value
    // const Name=this.refs.name.value
    const newUser={
      Name: this.refs.name.value,
      location: this.refs.location.value,
      country: this.refs.country.value,
      available: false,
      email: this.refs.email.value,
      pass:this.refs.pass.value,
      access: this.refs.access.value.toLowerCase(),
    }
    const newUserData= newUser
    this.props.newUser(newUserData);


  }
  render() {
    let currentUser={};
    let display;
    const current = Object.keys(this.props.user).filter(
      key => {
        if(this.props.user[key].email == this.props.localUser){
          currentUser = this.props.user[key]
          console.log(currentUser);
          return currentUser
        }
    }
    );
      if(currentUser.access==="admin"){
        display=(
          <div>
            <div><h4>Are you online?</h4><input type="checkbox" name='online' value='online' checked={currentUser.available} onChange={this.props.toggleAvailable}/></div>
            <div>Create New User</div>
            <div>
                 <div className="loginFields">
                  <input
                    className="inputfield"
                    type="text"
                    ref="email"
                    placeholder="Email"
                  />Email
                  <input
                    className="inputfield"
                    type="password"
                    ref="pass"
                    placeholder="Password"
                  />Password
                <div>
                <select name="text" ref="access">
                <option value="admin">Admin</option>
                <option value="emp">Emp</option>
                </select>Access
                </div>
                <input className="inputfield"
                type="text"
                ref="location"
                placeholder="Enter City"></input>Location
                <input className="inputfield"
                type="text"
                ref="country"
                placeholder="Enter Country"></input>Country
                <input className="inputfield"
                type="text"
                ref="name"
                placeholder="Name"></input>Name
                </div>
                <div>
                  <button onClick={() => this.createNewUser('email', 'pass')}>
                    Click to Enter
                  </button>
                </div>
            </div>
          </div>
        )
      }else if(currentUser.access==="emp"){
        display=(
         <div><h4>Are you online?<input type="checkbox" checked={currentUser.available} onChange={this.props.toggleAvailable}/></h4></div>
        )
      }else{
        display=(
          <div>Log In</div>
        )
      }
    console.log(currentUser);
    return (
      <div>
        <h4>{currentUser.Name}</h4>
        <h3>{display}</h3>
      </div>
    );
  }
}

export default User;
