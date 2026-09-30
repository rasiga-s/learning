import React from "react";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonList: [], url: "", ablities: [], display: false };
    this.OnChangeHandler = this.OnChangeHandler.bind(this);
  }

  fetchDetails = async () => {
    const data = await fetch(this.state.url);
    const res = await data.json();
    this.setState(() => ({
      ablities: res,
      display: true
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.fetchDetails();
    }
  }

  async componentDidMount() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    this.setState(() => ({
      pokemonList: data.results
    }));
  }
  OnChangeHandler(e) {
    this.setState(() => ({
      url: e.target.value
    }));
  }
  onClickHandler = () => {
    this.setState(() => ({
      display: false,
      ablities: []
    }));
  };
  render() {
    return (
      <>
        <select onChange={this.OnChangeHandler}>
          {this.state.pokemonList &&
            this.state.pokemonList.map((item) => {
              return <option value={item.url}>{item.name}</option>;
            })}
        </select>
        {this.state.display && (
          <>
            <ChildComponent ablities={this.state.ablities} />
            <button onClick={this.onClickHandler}>Back</button>
          </>
        )}
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

  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return (
      <div>
        {this.props.ablities.abilities.map((item) => {
          return <h1>{item.ability.name}</h1>;
        })}
      </div>
    );
  }
}
export default ChildComponent;
