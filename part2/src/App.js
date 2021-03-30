import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const App = () => {

  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);
  const sub = () => setCounter(counter - 1);
  const reset = () => setCounter(0)

  return <>
    <Display counter={counter} />
    <Button handleClick={add}>Add</Button>
    <Button handleClick={sub}>Sub</Button>
    <Button handleClick={reset}>Reset</Button>
  </>;
};

export default App;
