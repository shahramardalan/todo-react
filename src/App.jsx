import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [list, setList] = useState([]);

  const addTask = (value) => {
    const newList = [...list, { id: uuidv4(), title: value, status: false }];
    setList(newList);
  };

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    console.log(newList);
  };

  const toggleTask = (index) => {
    const newList = [...list];
    if (newList[index].status == list[index].status) {
      newList[index].status = !list[index].status;
      setList(newList);
      console.log(newList);
    }
  };

  return (
    <div>
      <div className="App">
        <TodoForm addTask={addTask} />

        {list.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            status={todo.status}
            deleteTask={() => deleteTask(index)}
            toggleTask={() => toggleTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
