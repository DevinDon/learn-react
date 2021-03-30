import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  return <>
    <p>{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Add</button>
    <button onClick={() => setCounter(0)}>Reset</button>
  </>;
};

export default App;
