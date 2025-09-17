import React from 'react'

function person({person,key}) {
  return (
    <div>
       <h2>I am {person.name}.age is {person.age} and super power is {person.skill}</h2>
    </div>
  )
}

export default person
