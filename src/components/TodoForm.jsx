import React, { useState } from "react";

function TodoForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form action="subit" onSubmit={handleSubmit}>
        <h2>{inputValue}</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
