import React from 'react';
import Hello from './Hello';

const App = () => {

  const name = 'Alice';
  const age = 18;

  return <>
    <Hello name={name} age={age} />
  </>;
};

export default App;
