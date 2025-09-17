//isusing 
import React, { Component } from "react";
class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
this.setState({ count: (this.state.count += 1) 
},
()=>{
    console.log('callback value',this.state.count)
}
);
console.log(this.state.count)
}
  decrement() {
    this.setState({ count: (this.state.count -= 1) });
  }
incrementfive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
      <div>
        <h1>counter-{this.state.count}</h1>
        <button onClick={() => this.incrementfive()}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default counter;
