import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from "react";
import { nanoid } from "nanoid";


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function addTask(name) {
    const newTask = {
      subject: name,
      id: "todo-" + nanoid(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter(task => id !== task.id);
    setTasks(filteredTasks);
  }

  function editTask(id, newName) {
    const editedtasks = tasks.map(task => {
      if (id === task.id) {
        //
        return { ...task, subject: newName }
      }
      return task;
    });

    setTasks(editedtasks);
  }

  function toggleTasksCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task =>
    <Todo
      subject={task.subject}
      id={task.id}
      key={task.id}
      completed={task.completed}
      toggleTasksCompleted={toggleTasksCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />);

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  let headingText = taskList.length + " tasks remaining";

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;