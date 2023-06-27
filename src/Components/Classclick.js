import React, { Component } from 'react'

export class Classclick extends Component {

clickhandler(){
    console.log('button is prssed')
}

  render() {
    return (
      <div>
<button onClick={this.clickhandler}>click me</button>

      </div>
    )
  }
}

export default Classclick