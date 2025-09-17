import React from 'react'

// function Frinput() {
//   return (
//     <div>
//       <input type='text'/>
//     </div>
//   )
// }

let Frinput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type='text' ref={ref}></input>
        </div>
    )
}) 

export default Frinput
