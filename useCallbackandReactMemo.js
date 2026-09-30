import { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

function App() {
  const [count, setcount] = useState(0);
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  const onHangeHanlder = (e) => {
    setItem(e.target.value);
  };
  const onClickHandler = useCallback(() => {
    console.log("entre the 19");
    setTodo((prev) => [...prev, item]);
  }, [item]);
  const OnCounter = () => {
    setcount(count + 1);
  };
  return (
    <>
      <Todo todo={todo} onClickHandler={onClickHandler} />
      <input type="text" onChange={onHangeHanlder} />
      <button onClick={OnCounter}>{count}</button>
    </>
  );
}
export default App;


import { memo } from "react";

function Todo(props) {
  const { todo, onClickHandler } = props;
  console.log("entered");
  return (
    <>
      <button onClick={onClickHandler}>Add Todo</button>
      {todo.length !== 0 &&
        todo.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
    </>
  );
}
export default memo(Todo);
