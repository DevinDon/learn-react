import React from 'react';

const Person = ({ id, name, number, handleDelete }) => <>
  <p>{name} {number}</p>
  <button onClick={() => handleDelete(id)}>Delete</button>
</>;

export default Person;
