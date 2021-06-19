import React from "react";

export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div>
        <input id={"checkbox" + props.id} type="checkbox" defaultChecked={props.completed} onClick={() => props.toggleTaskCompleted(props.id)} /> 
        <label className="todo-label">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" onClick={() => props.editTask(props.id)}>
          Edit <span></span>
        </button>
        <button type="button" onClick={() => props.deleteTask(props.id)}>
          Delete <span></span>
        </button>
      </div>
    </li>
  );
}