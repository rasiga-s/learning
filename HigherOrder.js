import Counter from "./Counter";
import Hoc from "./Hoc";
import HoverCounter from "./HoverCounter";

function App() {
  const HocCounter = Hoc(Counter);
  const HocHoverCounter = Hoc(HoverCounter);
  return (
    <>
      <HocCounter />
      <HocHoverCounter />
    </>
  );
}
export default App;


import { useState } from "react";

function Hoc(OriginalCompoent) {
  function NewComponent() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <>
        <OriginalCompoent count={count} increment={increment} />
      </>
    );
  }
  return NewComponent;
}
export default Hoc;

function HoverCounter(props) {
  const { count, increment } = props;

  return (
    <>
      <button onMouseOver={increment}> {count} </button>
    </>
  );
}
export default HoverCounter;

function Counter(props) {
  const { count, increment } = props;

  return (
    <>
      <button onClick={increment}> {count} </button>
    </>
  );
}
export default Counter;
