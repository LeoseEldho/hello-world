import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
  render() {
    const{count,clickHandler}=this.props
    return (
      <div>
        <h2 onMouseOver={clickHandler}>Mouse {count} Hovered</h2>
      </div>
    )
  }
}
//jdfjcn

export default HoverCounterTwo
