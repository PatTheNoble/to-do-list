import React, { useState } from "react";


function Form(props) {

  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name); //The function "addTask" is passed in as a prop from App.js
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange} //The onChange event occurs when the value of an element has been changed.
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;