import React, { Component } from 'react'
import withcounter from './withcounter'

 class hoverCounter extends Component {
  render() {
    const{count,increaseClick}=this.props
    return (
      <div>
        <h2 onMouseOver={increaseClick}>Hover {count} Times</h2>
      </div>
    )
  }
}

export default withcounter(hoverCounter,10)
