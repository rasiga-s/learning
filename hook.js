import { useEffect, useState } from "react";
import "./styles.css";
import ChildComponent from "./ChildComponent";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const res = await data.json();
    setPokemonList(res.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setPokemonDetails(res.abilities);
    setDisplay(true);
  };
  useEffect(() => {
    fetchDetails();
  }, [url]);

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  };
  const onClickHandler = () => {
    setPokemonDetails([]);
    setDisplay(false);
  };
  return (
    <div className="App">
      <select onChange={onChangeHandler}>
        {pokemonList.length !== 0 &&
          pokemonList.map((item) => {
            return <option value={item.url}>{item.name}</option>;
          })}
      </select>
      {display && (
        <>
          <ChildComponent
            pokemonDetails={pokemonDetails}
            setDisplay={setDisplay}
          />
          <button onClick={onClickHandler}>Back</button>
        </>
      )}
    </div>
  );
}


import { useEffect } from "react";

function ChildComponent(props) {
  const { pokemonDetails, setDisplay } = props;
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setDisplay(false);
        console.log("cleaned up");
      }, 4000);
    };
  }, []);
  return (
    <>
      {pokemonDetails &&
        pokemonDetails.map((item) => {
          return <h1>{item.ability.name}</h1>;
        })}
    </>
  );
}
export default ChildComponent;
