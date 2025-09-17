import React, { Component } from 'react'

 class eventbind extends Component {
  constructor(){
    super()
    this.state={
      message:'hello'
    }
    // this.changetext=this.changetext.bind(this)
  }

//   changetext(){
//     this.setState({
//       message:'hai'
//     })
//   }

changetext=()=>{
    this.setState({
        message:'hai'
    })
}
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changetext.bind(this)}>click</button> */}
        {/* <button onClick={()=> this.changetext()}>click</button> */}
        {/* <button onClick={this.changetext}>click</button> */}
        <button onClick={this.changetext}>click</button>
        </div>
    )
  }
}

export default eventbind
