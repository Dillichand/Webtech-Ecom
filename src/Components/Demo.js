import React, { Component } from 'react'

export class Demo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    clickhere(){
this.setState({
    count:this.state.count+1
})
    }
 
  render() {
    return (
      <div>
       Count -{this.state.count}
       <button onClick={()=> this.clickhere()}>Clickhere</button>
        </div>
    )
  }
}

export default Demo