import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    clickhandler(){
        this.setState({
        message:'good bye'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickhandler.bind(this)}>click</button>
      </div>
    )
  }
}

export default EventBind