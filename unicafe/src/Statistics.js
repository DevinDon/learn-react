import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {

  const sum = good + neutral + bad;

  return <>
    <h2>Statistic</h2>
    {
      sum > 0
        ? <>
          <Statistic title="Good" value={good} />
          <Statistic title="Neutral" value={neutral} />
          <Statistic title="Bad" value={bad} />
          <Statistic title="Sum" value={sum} />
          <Statistic title="Avg" value={(good - bad) / sum} />
          <Statistic title="Positive" value={good / sum} />
        </>
        : <>
          <p>No feedback given.</p>
        </>
    }
  </>;

};

export default Statistics;
