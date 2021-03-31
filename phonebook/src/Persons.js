import React from 'react';
import Person from './Person';

const Persons = ({ persons, handleDelete }) => persons.map(
  ({ id, name, number }) => <Person key={name} {...{ id, name, number, handleDelete }} />
);

export default Persons;
