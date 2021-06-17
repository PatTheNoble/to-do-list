import ToDoItem from "./components/ToDoItem";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  var [tasks, setTasks] = useState([<ToDoItem name="Default To Do"/>]);
  var taskList = [];
  if(tasks)
  {
      taskList = tasks.map(task => (
      <ToDoItem
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  }

  function addTask(name) {
    const newTask = { id: "ToDoItem-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
