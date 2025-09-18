import React, { Component } from 'react'

 class clickCountTwo extends Component {
//hsdfjfl
//yddsfhkj

  render() {
    const{count,clickHandler}=this.props
    return (
      <div>
        <button onClick={clickHandler}> Click {count} Times</button>
      </div>
    )
  }
}

export default clickCountTwo
