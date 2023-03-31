import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day 1 Exercise 1</h1>
      <h1>Let we see the output of JAVASCRIPT</h1>
      <button onClick={window['alertMsg']}>click me</button>

      <br></br>

      <h1>Day 1 Exercise 2</h1>
      <button onClick={window['check']}>press me</button>
    </div>
  );
}

export default App;
