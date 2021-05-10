import { useState } from 'react';

function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState('');


  function handleEdit(e) {
    e.preventDefault();
    props.editTask(props.id, name);
    setName('');
    setEditing(false);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  const todo = (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTasksCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.subject}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
        >
          Edit <span className="visually-hidden">{props.subject}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.subject}</span>
        </button>
      </div>
    </li>
  );

  const edit = (
    <form 
    className="stack-small"
    onSubmit={handleEdit}>
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.subject}
      </label>
      <input 
      id={props.id} 
      className="todo-text" 
      type="text" 
      value={name}
      onChange={handleChange}  
      />
    </div>
    <div className="btn-group">
      <button 
      type="button" 
      className="btn todo-cancel"
      onClick={() => setEditing(false)}>
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
  );

  return (isEditing ? edit : todo)
}

export default Todo;