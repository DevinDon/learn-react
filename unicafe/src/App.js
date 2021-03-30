import React, { useState } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <>
    <Feedback
      good={good}
      handleGood={() => setGood(good + 1)}
      neutral={neutral}
      handleNeutral={() => setNeutral(neutral + 1)}
      bad={bad}
      handleBad={() => setBad(bad + 1)}
    />
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
    />
  </>;
}

export default App;
