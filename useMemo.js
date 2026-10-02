import { useMemo, useState } from "react";

const Calculation = (count) => {
  console.log("enter ");
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum = count + i;
  }
  return sum;
};
function App() {
  const [count, setcount] = useState(0);
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const CalculationData = useMemo(() => Calculation(count), [count]);

  const onHangeHanlder = (e) => {
    setItem(e.target.value);
  };
  const onClickHandler = () => {
    setTodo([...todo, item]);
  };
  const OnCounter = () => {
    setcount(count + 1);
  };
  // const Calculation = () => {
  //   useMemo(() => {
  //     let sum = 0;
  //     for (let i = 0; i < 10; i++) {
  //       sum = count + i;
  //     }
  //     return sum;
  //   }, [count])
  // };
  return (
    <>
      <button onClick={OnCounter}>Count</button>
      <span>{CalculationData}</span>
      <input type="text" onChange={onHangeHanlder} />
      <button onClick={onClickHandler}>Add Todo</button>
      {todo.length !== 0 &&
        todo.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
    </>
  );
}
export default App;

// Now if you type in the input, React re-renders, but the expensive calculation is not executed again, because count hasn't changed.
// useMemo is used to memoize the result of an expensive calculation. It recalculates the value only when one of its dependencies changes. It can help avoid unnecessary calculations when the component re-renders.
