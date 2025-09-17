import React, { Component } from 'react'
import Lifecycleb from './lifecycleb'

 class lifecyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"messi"
      }
      console.log('lifecyclea Constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('lifecyclea getDerivedStateFromProps')
    return null
}
componentDidMount(){
    console.log('Lifecyclea componentDidMount')
}
shouldComponentUpdate(){
    console.log('lifecycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getSnapshortBeforeUpdate')
    return null
}
componentDidUpdate(){
    console.log('LifecylceA componentDidUpdate')
}
changeState=()=>{
    this.setState({
        name:"leo messiiii"
    })
}

  render() {
    console.log('lifecyclea render')
    return (
      <div>
        <div> lifecycle A</div>
        <button onClick={this.changeState}>change State</button>
        <Lifecycleb></Lifecycleb>
      </div>
    )
  }
}
export default lifecyclea
