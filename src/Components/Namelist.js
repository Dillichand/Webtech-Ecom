import React, { Component } from 'react'

function Namelist()
{
   const persons=[
    {
        id:1,
        name:'aaa',
age:11,

    },
    {
        id:2,
        name:'bbb',
age:12,

    },
    {
        id:3,
        name:'ccc',
age:13,

    }
   ]
   const personList= persons.map(person =>(
   <Person person={person}/>
   ))
    return <div>{personList}</div>
    
    } 

export default Namelist