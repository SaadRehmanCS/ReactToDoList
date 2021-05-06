//import logo from './logo.svg';
//import './App.css';

function App(props) {
console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button">Click me</button>
        <p>
          Hello {props.subject}
        </p>
        <button>Now click me next</button>
        </header>
    </div>
  );
}

export default App;