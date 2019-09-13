import React from 'react';
import './App.css';
import CounterWrapper from './components/CounterWrapper';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value : 239,
        counter : 0
    }
  }
  increment = () => {
      let current = this.state.value;
      let counter = this.state.counter;
      this.setState({"value" : current + 1,"counter" : counter + 1})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Increment</button>
        <CounterWrapper value={this.state.value} counter={this.state.counter}></CounterWrapper>
      </div>
    );
  }
}
export default App;
