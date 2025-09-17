import React, { Component } from 'react'
import Childcompoent from './childcompoent'

 class parentcomponent extends Component {
    constructor(props){
        super(props)
        this.state={
            parentname:'parent'
        }
        this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childname){
      alert(`hello ${this.state.parentname} from ${childname}`)

    }
  render() {
    return (
      <div>
        <Childcompoent greethandler={this.greetparent}></Childcompoent>
      </div>
    )
  }
}

export default parentcomponent

