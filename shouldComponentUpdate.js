import React from "react";
import "./styles.css";
import Counter from "./Counter";
import Counter1 from "./Counter1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count1: 0 };
  }

  handleClick1 = () => {
    this.setState(() => ({
      count: this.state.count + 1
    }));
  };
  handleClick2 = () => {
    this.setState(() => ({
      count1: this.state.count1 + 1
    }));
  };
  render() {
    return (
      <>
        <Counter count={this.state.count} handleClick1={this.handleClick1} />
        <Counter1 count1={this.state.count1} handleClick2={this.handleClick2} />
      </>
    );
  }
}
export default App;


import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  shouldComponentUpdate(prevProps) {
    if (this.props.count !== prevProps.count) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("Update Counter");
  }
  render() {
    return (
      <>
        <button onClick={this.props.handleClick1}> {this.props.count} </button>
      </>
    );
  }
}

export default Counter;

import React from "react";

class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  shouldComponentUpdate(prevProps) {
    if (this.props.count1 !== prevProps.count1) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("Update Counter1");
  }

  render() {
    return (
      <>
        <button onClick={this.props.handleClick2}> {this.props.count1} </button>
      </>
    );
  }
}

export default Counter1;
