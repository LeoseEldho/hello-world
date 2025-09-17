import React from 'react'

function childcompoent(props) {
  return (
    <div>
      <button onClick={()=>props.greethandler('child')}>greet parent</button>
    </div>
  )
}

export default childcompoent



