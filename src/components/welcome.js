import React,{Component} from "react";

class welcome extends Component{
    render(){
        let {name,heroName}=this.props
        // let {state1,state1}=this.state
        return <h1>welcome {name} the {this.props.heroName}</h1>
    }
}

export default welcome

