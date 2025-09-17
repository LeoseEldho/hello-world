import React from "react";
let withcounter=(WappedComponent,incrementNumber)=>{
    class withcounter extends React.Component{
            constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
increaseClick=()=>{
this.setState(prev=>{
    return {count:prev.count+incrementNumber}
})
}
        render(){
            console.log(this.props.name)
            return <WappedComponent count={this.state.count} increaseClick={this.increaseClick} {...this.props}/>
        }
    }
    return withcounter
}
export default withcounter
