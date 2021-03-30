import React from 'react';
import Button from './Button';

const Feedback = ({ good, neutral, bad, handleGood, handleNeutral, handleBad }) => <>
  <h2>Feedback</h2>
  <div>
    <Button onClick={handleGood}>Good</Button>
    <Button onClick={handleNeutral}>Neutral</Button>
    <Button onClick={handleBad}>Bad</Button>
  </div>
</>;

export default Feedback;
