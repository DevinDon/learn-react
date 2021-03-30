import React from 'react';

const Hello = ({ name, age }) => {

  const getBornYear = () => new Date().getFullYear() - age;

  return <>
    <div>Hello {name}, your age is {age} years old.</div>
    <p>Maybe you born in {getBornYear()}.</p>
  </>;
};

export default Hello;
