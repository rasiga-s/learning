import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    Address: ""
  });
  const [error, setError] = useState("");

  const OnChangeHandler = (e) => {
    const { name, value } = e.target;
    error[name] = "";
    setError(error);
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key] == "") {
        setError((prev) => ({
          ...prev,
          [key]: `Enter the ${key}`
        }));
      }
    }
  };
  return (
    <>
      <form onSubmit={OnSubmitHandler}>
        <div>
          <label>UserName</label>
          <input type="text" name="userName" onChange={OnChangeHandler} />
          {error.userName && <span> {error.userName} </span>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={OnChangeHandler} />
          {error.password && <span> {error.password} </span>}
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="Address" onChange={OnChangeHandler} />
          {error.Address && <span> {error.Address} </span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
