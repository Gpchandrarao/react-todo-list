import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handelOnCahnge = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSetTodo = [...todo, input];
    setTodo(newSetTodo);
    console.log(newSetTodo);
    setInput("");
  };

  const handelOnDelete = (index) => {
    const upDateData = [...todo];
    upDateData.splice(index, 1);
    setTodo(upDateData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handelOnCahnge} value={input} />
        <button type="submit">Create to-do</button>
      </form>
      <ul>
        {todo.map((each, index) => (
          <li key={index}>
            <p>{each}</p>M
            <button onClick={() => handelOnDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
