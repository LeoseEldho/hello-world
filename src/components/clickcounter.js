import React, { Component } from 'react'
import withcounter from './withcounter'

 class clickcounter extends Component {

  render() {
    const{count,increaseClick}=this.props
    return (
      <div>
        <button onClick={increaseClick}> {this.props.name}Clicked {count} Times</button>
      </div>
    )
  }
}

export default withcounter(clickcounter ,5)