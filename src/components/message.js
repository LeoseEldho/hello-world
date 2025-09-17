import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome user'
        }
    }
    chagemessage(){
        this.setState({
            message:'thank for'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.chagemessage()}>click</button>

            </div>
        )
    }
}
export default Message
