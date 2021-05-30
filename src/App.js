import P from 'prop-types';
import './App.css';
import {useState, useCallback, useMemo} from 'react';

const Button = ({onClick}) => <button onClick={() => onClick(10)}>+</button>;

Button.protoTypes = {
  onClick: P.func,
}

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((oldCounter) => oldCounter + num);
  }, []);

  const btn = useMemo(() => <Button onClick={incrementCounter} />, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
