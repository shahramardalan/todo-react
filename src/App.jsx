import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import Action from "./components/Action";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState("");
  const [flag, setFlag] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setFlag(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setList(data))
      .then(() => setFlag(false))
      .catch((e) => {
        setError(true);
        setFlag(false);
      });
  }, []);

  const addTask = (value) => {
    const newList = [...list, { id: uuidv4(), title: value, status: false }];
    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(newList);
  };

  const toggleTask = (id) => {
    const newList = list.map((todo) => {
      return todo.id === id
        ? { id: todo.id, title: todo.title, status: !todo.status }
        : { ...todo };
    });
    setList(newList);
  };

  const handleFilteredList = () => {};

  return (
    <div>
      <div className="App">
        <TodoForm addTask={addTask} />
        <Action
          filteredList={filteredList}
          handleFilteredList={setFilteredList}
        />
        <br />
        <span style={{ color: "red", display: hasError ? "block" : "none" }}>
          error........
        </span>
        <span style={{ color: "red", display: flag ? "block" : "none" }}>
          Loading...
        </span>
        <br />
        {list.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            status={todo.status}
            deleteTask={() => deleteTask(todo.id)}
            toggleTask={() => toggleTask(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
