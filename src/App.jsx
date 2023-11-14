import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [list, setList] = useState([]);

  const addTask = (value) => {
    const newList = [...list, { id: uuidv4(), title: value, status: false }];
    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((todo) => {
      return todo.id !== id;
    });
    console.log(newList)
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

  return (
    <div>
      <div className="App">
        <TodoForm addTask={addTask} />

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
