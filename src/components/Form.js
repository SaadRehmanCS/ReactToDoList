import { useState } from 'react';

function Form(props) {

  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== '') {
      props.addTask(name);
      setName('');
    } else {
      alert("nothing entered mate");
    }
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
          </label>
      </h2>
      <input
        type="text"
        value={name}
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn__primary btn__lg"
      >
        Add
        </button>
    </form>);
}

export default Form;