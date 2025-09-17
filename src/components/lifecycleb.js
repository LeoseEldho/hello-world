import React, { Component } from 'react'

 class lifecyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"messi"
      }
      console.log('lifecycleb Constructor')
    }
static getDerivedStateFromProps(props,state){
    console.log('lifecycleb getDerivedStateFromProps')
    return null
}
componentDidMount(){
    console.log('Lifecycleb componentDidMount')
}
shouldComponentUpdate(){
    console.log('lifecycleB shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getSnapshortBeforeUpdate')
    return null
}
componentDidUpdate(){
    console.log('LifecylceB componentDidUpdate')
}
  render() {
    console.log('lifecycleb render')
    return (
      <div>
        lifecycle B
      </div>
    )
  }
}

export default lifecyclea
