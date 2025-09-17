import React, { Component } from "react";

class usergreeting extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return this.state.loggedIn && <div>thor </div>

    // if(this.state.loggedIn){
    //   return <div>thor</div>
    // }else{
    //   return <div>welcome geust</div>
    // }

    // let message
    // if(this.state.loggedIn){
    //   message=<div>thor</div>
    // }else{
    //   message=<div>welcome user</div>
    // }
    // return <div>{message}</div>

    // return this.state.loggedIn ? <div>thor</div> : <div>welcome</div>;
  }
}

export default usergreeting;

