import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = 
[{ subject: "Eat", id: "todo-0", completed: true },
{ subject: "Sleep", id: "todo-1", completed: false },
{ subject: "Repeat", id: "todo-2", completed: false }]

const fBArray = [{ name: "All", completed: "true" },
  {name: "Active", completed: "false"}, {name: "Completed", completed: "false"}]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} fBArray={fBArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);

