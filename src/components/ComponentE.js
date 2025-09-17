import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContent from './UserContex'

 class ComponentE extends Component {
    static contextType=UserContent

  render() {
    return (
      <div>
         Component-E context {this.context}
        <ComponentF> </ComponentF>
      </div>
    )
  }
}

export default ComponentE
