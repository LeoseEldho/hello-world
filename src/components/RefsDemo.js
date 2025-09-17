import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.cbref=null
      this.setcbref=(element=>{
        this.cbref=element
      })
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbref){
            this.cbref.focus()
        }
    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <input type='text' ref={this.setcbref}></input>
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
