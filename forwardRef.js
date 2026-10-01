import { useState, useRef } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  const handleClick = () => {
    setCount((prev) => prev + 1);

    inputRef.current.focus();
  };

  return (
    <>
      <button onClick={handleClick}>
        Count: {count}
      </button>

      <ChildComponent ref={inputRef} />
    </>
  );
}

export default App;

//forwardRef
//1. when we pass the ref element to child component
//2. we need to warp the child component into the build in function  forwardRef
// forwardRef allows a parent component to pass a ref through a child component and directly access a DOM element inside the child.


import { forwardRef } from "react";

const ChildComponent = forwardRef(function ChildComponent(props, ref) {
  return (
    <>
      <input
        type="text"
        ref={ref}
        placeholder="Enter your name"
      />
    </>
  );
});

export default ChildComponent;
