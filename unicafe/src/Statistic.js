import React from 'react';

const Statistic = ({ good, neutral, bad }) => <>
  <h2>Statistic</h2>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
</>;

export default Statistic;
