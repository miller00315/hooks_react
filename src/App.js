import P from 'prop-types';
import './App.css';
import React, {useState, useCallback} from 'react';

const Button = React.memo(({onClick}) => <button onClick={() => onClick(10)}>+</button>);

Button.protoTypes = {
  onClick: P.func,
}

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((oldCounter) => oldCounter + num);
  }, []);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button onClick={incrementCounter} />
    </div>
  );
}

export default App;
