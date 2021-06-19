import ToDoItem from "./components/ToDoItem";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import React, { useState } from "react";
import { nanoid } from "nanoid";


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};


function App(props) {
  var [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  var taskList = [];

  if (tasks) {
    var activeTasks = tasks.filter(FILTER_MAP["Active"]);
    var filteredTasks = tasks.filter(FILTER_MAP[filter]);
    taskList = filteredTasks.map(task => (
      <ToDoItem
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTask={deleteTask} /*Pass the "deleteTask" function to the ToDoItem. */
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    ));
  }

  function addTask(name) {
    const newTask = { id: "ToDoItem-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // invert the task's completed prop.
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id) {
    var editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        var newName = prompt("Please enter a new name for task: " + task.name, "");
        if(!newName){ //Do not delete the user's task name when they press cancel...
          newName = task.name;
        }
        return {...task, name: newName} //Note to self: the ... operator, in this case, copies "task" and changes only the "name" property.
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      <Form addTask={addTask} /> {/*Pass the "addTask" function to the form. */}
      <div>
        <div>
          <FilterButton name="All" setFilter={setFilter} isPressed={"All" === filter}/>
          <FilterButton name="Active" setFilter={setFilter} isPressed={"Active"  === filter}/>
          <FilterButton name="Completed" setFilter={setFilter} isPressed={"Completed" === filter}/>
        </div>
      </div>
      <h2 id="list-heading">
        Active tasks remaining: {activeTasks.length}
      </h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
