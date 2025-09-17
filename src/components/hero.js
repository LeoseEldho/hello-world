import React from 'react'

function hero({heroname}) {
    if(heroname=="jocker"){
        throw new Error('not an Hero')
    }
  return (
    <div>
      {heroname}
    </div>
  )
}

export default hero

