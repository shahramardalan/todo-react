import React from "react";

function Todo(props) {
  const handleDelete = () => {
    props.deleteTask(props.index);
  };
  return (
    <div>
      <input type="checkbox" defaultChecked={props.status} />
      <span>{props.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
