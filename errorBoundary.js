import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    };
  }

  componentDidCatch(err, errInfo) {
    console.log("enter the error", err);
  }

  render() {
    if (this.state.hasError) {
      return "Some Error";
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;

import React from "react";
import ChildComponent from "./ChildComponent";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [1, 2, 3] };
  }

  render() {
    return (
      <>
        <ErrorBoundary fallback={<div>Loading...</div>}>
          {this.state.list &&
            this.state.list.map((item, i) => {
              return <ChildComponent key={i} item={{}} />;
            })}
        </ErrorBoundary>
      </>
    );
  }
}

export default App;

import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>{this.props.item}</h1>
      </>
    );
  }
}

export default ChildComponent;
