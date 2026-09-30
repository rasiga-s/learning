import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "add": {
      return state + 1;
    }
    case "sub": {
      return state - 1;
    }
    default:
      break;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch("add")}> Add </button>
      <button onClick={() => dispatch("sub")}> Sub </button>
      <span> {count} </span>
    </>
  );
}

export default App;


// useReducer
// better alernative to the useState hook, when use State logic is complex we use use Reducer store the Global state
// when next value depands on the previos value that time also we use useReducer