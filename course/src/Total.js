import React from 'react';

const Total = ({ exercises }) => <p>Total exercises: {exercises.reduce((prev, next) => prev + next)}</p>;

export default Total;
