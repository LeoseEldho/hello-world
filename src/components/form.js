import React, { Component } from 'react'

 class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:''
      }
    }

handlerusername=(event)=>{
    this.setState({
        username: event.target.value
    })
}
handlerComments=(event)=>{
    this.setState({
        comments:event.target.value
    })
}
handlerTopics=(event)=>{
    this.setState({
        topic:event.target.value
    })
}
changeSubmit=()=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
}

  render() {
    let {username,comment,topic}=this.state
    return (
      <form onSubmit={this.changeSubmit}>
        <div>
            <label>User Name</label>
            <input value={username} onChange={this.handlerusername}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comment} onChange={this.handlerComments}></textarea>
        </div>
        <label> Topics</label>
        <select value={this.state.topic} onChange={this.handlerTopics}>
        <option value="react">react</option>
        <option value="angular">angular</option>
        <option value="veu">Veu</option>
        </select>
        <button>Submit</button>
      </form>
    )
  }
}


export default form
