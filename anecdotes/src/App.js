import React, { useState } from 'react';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVote = Math.max(...votes);

  const getRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const voteSelectedAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return <>
    <h2>Anecdote</h2>
    <p>{anecdotes[selected]}</p>
    <p>This anecdote has {votes[selected]} votes.</p>
    <button onClick={voteSelectedAnecdote}>Vote</button>
    <button onClick={getRandomAnecdote}>Next Anecdote</button>

    <h2>Anecdote has most {maxVote} votes</h2>
    <p>{anecdotes[votes.findIndex(vote => vote === maxVote)]}</p>
  </>;

};

export default App;
