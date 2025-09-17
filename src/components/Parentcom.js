import React, { Component } from 'react'
import MyPureComponent from './MyPureComponent'
import Regularecomponent from './Regularecomponent'
import Memocomponent from './memocomponent'


export class Parentcom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"thor"
      }
    }

    componentDidMount(){
        setInterval(()=>{this.setState({
            name:"hulk"
        })},2000)
    }
    
  render() {
    console.log("*********PARENTCOMPONENT************")
    return (
      <div>
        Parent com
        {/* <Regularecomponent name={this.state.name}></Regularecomponent> */}
        {/* <MyPureComponent name={this.state.name}></MyPureComponent> */}
        <Memocomponent name={this.state.name}></Memocomponent>
      </div>
    )
  }
}

export default Parentcom
