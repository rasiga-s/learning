import { createContext } from "react";

const MyContext = createContext([]);

export default MyContext;


import { useState } from "react";
import MyContext from "./Context";
import ChildComponent from "./ChildComponent";

function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setItem(value);
  };

  const OnHandlerClick = (e) => {
    e.preventDefault();
    setTodo([...todo, item]);
  };
  return (
    <>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={OnHandlerClick}> ADD Todo </button>
      <MyContext.Provider value={todo}>
        <ChildComponent />
      </MyContext.Provider>
    </>
  );
}

export default App;

import { useContext } from "react";
import MyContext from "./Context";
import ChildTableComponent from "./ChildTableComponent";

function ChildComponent() {
  const value = useContext(MyContext);
  return (
    <>
      {value.length !== 0 &&
        value.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      <MyContext.Provider value={value}>
        <ChildTableComponent />
      </MyContext.Provider>
    </>
  );
}

export default ChildComponent;
import { useContext } from "react";
import MyContext from "./Context";

function ChildTableComponent() {
  const value = useContext(MyContext);
  return (
    <>
      {value.length !== 0 &&
        value.map((item, i) => {
          return <span key={i}>{item}</span>;
        })}
    </>
  );
}
export default ChildTableComponent;
