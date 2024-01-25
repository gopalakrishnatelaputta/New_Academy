import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler()
    // {
    //     this.setState({
    //         message:'GoodByee...'
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:'Good Byee....'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
