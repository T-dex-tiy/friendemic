import React, { Component } from 'react';

class Online extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const available = Object.keys(this.props.localMachine).map(key => {
      if (this.props.localMachine[key] != null) {
        return this.props.localMachine[key].available;
      }
    });
    console.log(available);
    return (
      <div>
        <input type="checkbox" checked={available} />
      </div>
    );
  }
}

export default Online;
