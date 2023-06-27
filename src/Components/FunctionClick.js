import React, { Component } from 'react'

function FunctionClick(){
function clickhandler(){
console.log('clicked button')
}


return(
    <div>
<button onClick={clickhandler}>clickhere</button>
    </div>
)
}

export default FunctionClick