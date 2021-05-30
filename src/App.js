import './App.css';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
