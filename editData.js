import { useState } from "react";
import "./styles.css";
import AddEmployee from "./AddEmployee";

const defaultData = [
  {
    id: 1,
    name: "rasiga",
    position: "developer",
    salary: 20000
  },
  {
    id: 2,
    name: "rasiga1",
    position: "developer1",
    salary: 40000
  },
  {
    id: 3,
    name: "rasiga2",
    position: "developer2",
    salary: 50000
  }
];

export default function App() {
  const [employeeList, setEmployeeList] = useState(defaultData);
  const [item, setItem] = useState({ name: "", position: "", salary: "" });
  const [count, setCount] = useState(employeeList.length);
  const [isAdd, setAdd] = useState(true);
  const [Id, setId] = useState("");

  const handlerChange = (e) => {
    const { name, value } = e.target;
    let data = "";
    if (name === "salary") {
      data = Number(value);
      setAdd(false);
    } else {
      data = value;
    }
    setItem((prev) => ({
      ...prev,
      [name]: data
    }));
  };
  const handleClick = () => {
    setCount(count + 1);
    setEmployeeList((prev) => [...prev, { ...item, id: count + 1 }]);
    setItem({ name: "", position: "", salary: "" });
  };
  const handleSave = () => {
    setId("");
  };

  const handleSalaryChange = (e, id) => {
    setId(id);
    const EditData = employeeList.map((x) =>
      x.id != id ? x : { ...x, salary: e.target.value }
    );
    setEmployeeList(EditData);
  };
  return (
    <div className="App">
      <table>
        <thead>
          <th> Name </th>
          <th> Position </th>
          <th> Salary </th>
          <th> Action </th>
        </thead>
        <tbody>
          {employeeList.map(({ id, name, position, salary }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{position}</td>
                <td>
                  <input
                    name="salary"
                    type="number"
                    value={salary}
                    onChange={(e) => handleSalaryChange(e, id)}
                  />
                </td>
                <td>
                  <button
                    disabled={id === Id ? false : true}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddEmployee
        item={item}
        handleClick={handleClick}
        handlerChange={handlerChange}
        isAdd={isAdd}
      />
    </div>
  );
}
