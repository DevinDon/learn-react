import React from 'react';

const Total = (props) => <>
  <p>Number of exercises: {props.parts.map(part => part.exercises).reduce((prev, next) => prev + next)}</p>
</>;

export default Total;
