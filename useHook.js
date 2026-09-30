import { useEffect, useRef, useState } from "react";

const useTimerCustomhook = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const startTimer = () => {
    if (ref.current) {
      return;
    }
    ref.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);

  return { count, startTimer, stopTimer };
};

function App() {
  const { count, startTimer, stopTimer } = useTimerCustomhook();
  return (
    <>
      <span>{count}</span>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default App;



import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increment, decrement };
};

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <button onClick={increment}>Add </button>
      <button onClick={decrement}>Sub</button>
      <span> {count} </span>
    </>
  );
}
export default App;
