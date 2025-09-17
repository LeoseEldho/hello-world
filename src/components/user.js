import React, { Component } from 'react'

 class user extends Component {
  render() {
    return (
      <div>
        {this.props.render(false)}
      </div>
    )
  }
}

export default user