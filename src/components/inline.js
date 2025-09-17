import React from 'react'

let heading={
    fontSize:"72px",
    color:'blue',
    fontWeight:"900",
}

function inline() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>inline</h1>
    </div>
  )
}
export default inline
