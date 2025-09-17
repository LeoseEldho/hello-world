import React from 'react'

function memocomponent(name) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default memocomponent
