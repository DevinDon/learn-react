import React from 'react';

const Statistic = ({ good, neutral, bad }) => {

  const sum = good + neutral + bad;

  return <>
    <h2>Statistic</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {sum}</p>
    <p>Avg: {(good - bad) / sum}</p>
    <p>Positive: {good / sum}</p>
  </>;

};

export default Statistic;
