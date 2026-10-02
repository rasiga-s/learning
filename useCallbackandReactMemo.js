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


//  React.memo prevents re-rendering only when the component's props have not changed. In my case, handleDelete was recreated on every parent render, so its reference changed. Using useCallback keeps the function reference stable and allows React.memo to prevent the unnecessary re-render.

import { useState, useCallback } from 'react';

import Todo from './Todo.jsx';


function App() {

  const [list, setList] = useState([]);
  const [data, setData] = useState({ name: '', id: '' });
  const [count, setCount] = useState(0);


  const handleChange = (e) => {
    const { value } = e.target;
    setData(() => ({
      name: value,
      id: list.length + 1
    }));
  }
    const onClickSubmit = useCallback((e) => {
    e.preventDefault();
    setList((prev) => ([
      ...prev,
      data
    ]))
    setData('')
  },[data])

  const handleDelete = useCallback((id) => {
    setList((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }, []);

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h4> TODO List </h4>
      <form onSubmit={onClickSubmit}>
        <input value={data.name} type="text" onChange={handleChange} name="todo" />
        <button type="submit"> save </button>
        <Todo list={list} handleDelete={handleDelete} />
      </form>
              <button onClick={handleCount}> Count {count} </button>

    </>



  )

}

export default App


