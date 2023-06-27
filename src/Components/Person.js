import React from 'react'
 function Person({person}) {
  return (
    <div>
        <h2> i am {person.name}.i am {person.age}.my id is{person.id}</h2>
    </div>
  )
}

export default Person
