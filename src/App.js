import React, { Component } from 'react'
import Counter from './Components/Counter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show :false};
  }
  handleClick= () => this.setState({show :!this.state.show})
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>show/hide</button>
       {this.state.show && <Counter/>}

      </div>
    )
  }
}

