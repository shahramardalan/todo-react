import React from "react";

function Action(props) {
  return (
    <div className="opration">
      <div>
        <h2>{props.filteredList}</h2>
        Status :
        <select
          id="filter"
          onChange={(e) => props.handleFilteredList(e.target.value)}
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button id="deleteDone">Delete Done</button>
    </div>
  );
}

export default Action;
