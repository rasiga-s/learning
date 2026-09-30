import { createContext } from "react";

const context = createContext({
  name: "",
  setName: () => {}
});

export default context;

import { useMemo, useState } from "react";
import Context from "./Context";
import UserInput from "./UserInput";

function App() {
  const [name, setName] = useState("Rasiga");

  const value = useMemo(
    () => ({
      name,
      setName
    }),
    [name]
  );

  return (
    <>
      <Context.Provider value={value}>
        <UserInput />
      </Context.Provider>
    </>
  );
}
export default App;

import { useContext } from "react";
import context from "./Context";

function UserInput() {
  const { name, setName } = useContext(context);

  const handlerChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <label> UserName </label>
      <input type="text" onChange={handlerChange} />
      {name && <span> {name} </span>}
    </>
  );
}
export default UserInput;
