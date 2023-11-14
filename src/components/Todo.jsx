import React from "react";

function Todo(props, toggleComplete) {
  const handleDelete = () => {
    props.deleteTask(props.index);
  };

  const handleToggle = () => {
    props.toggleTask(props.index);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleToggle}
        defaultChecked={props.status}
      />
      <span style={{ textDecoration: props.status ? "line-through" : "none" }}>
        {props.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
