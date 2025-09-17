import React from "react";


let Greet=(props)=>{
    const{name,heroName}=props
    return (
        <div>
        <h1>hello {name} sk {heroName} </h1>
        {/* {props.children} */}
        </div>
    )
}
export default Greet