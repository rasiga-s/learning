import React from "react";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: ["1", "2", "3"] };
  }

  render() {
    return (
      <>
        {this.state.list.length !== 0 &&
          this.state.list.map((item) => {
            return (
              <ListItem
                render={() => {
                  return <div>{item}</div>;
                }}
              />
            );
          })}
      </>
    );
  }
}

export default App;

// render Props
// we pass the render props parent to child component, the child component call that render function instead of implementing own logic
// sharing the code one component to another one


import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div> {this.props.render()} </div>;
  }
}
export default ListItem;
