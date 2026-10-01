import { useEffect, useRef, useState } from "react";
import UserInput from "./UserInput";

function App() {
  const ref = useRef(0);
  const [count, Setcount] = useState(0);
  const inputRef = useRef("");

  const OnClickHandler = () => {
    Setcount(ref.current++);
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <button onClick={OnClickHandler}>ADD</button>
      <span>{count} </span>
      <UserInput ref={inputRef} />
    </>
  );
}
export default App;

//forwardRef
//1. when we pass the ref element to child component
//2. we need to warp the child component into the build in function  forwardRef
// forwardRef allows a parent component to pass a ref through a child component and directly access a DOM element inside the child.


import { forwardRef } from "react";

const UserInput = forwardRef(function (props, ref) {
  return (
    <>
      return <input type="text" ref={ref} />
    </>
  );
});

export default UserInput;
