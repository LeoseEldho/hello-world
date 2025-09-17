import React from 'react'
import Person from './person'

// function namelist() {
//     const name=['thor','brue','clark']
//     let namelist=name.map((x)=> <h1>{x}</h1>)
//   return (
//     <div>
//       {namelist}
//     </div>
//   )
// }
function namelist() {
    let name=['thor','batman','clark']
    const person=[
        {
            id:0,
            name:"thor",
            age:544,
            skill:"god"
        },
        {
            id:1,
            name:"clark",
            age:23,
            skill:"super power"
        },
        {
            id:2,
            name:"batman",
            age:45,
            skill:"money"
        }
]
    let nameList=name.map((x,index)=><h2 key={index}>{index} {x}</h2>)
    let personList=person.map(person=><Person key={person.id} person={person}></Person>)
  return (
    <div>
    {nameList}
    </div>
  )
}

export default namelist
