import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => axios.get('http://localhost:4000/persons').then(response => {
    setPersons(response.data);
    setFilteredPersons(response.data);
  }), []);

  const handleSubmit = event => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
      return;
    }
    const newPersons = [...persons, { name: newName, number: newNumber }];
    setPersons(newPersons);
    setFilteredPersons(newPersons);
    setNewName('');
    setNewNumber('');
  }

  const handleFilter = event => {
    event.preventDefault();
    const filter = event.target.value;
    setFilteredPersons(persons.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())));
  };

  const handleInputName = ({ target: { value } }) => setNewName(value);
  const handleInputNumber = ({ target: { value } }) => setNewNumber(value);

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add new number</h2>
      <PersonForm {...{ newName, handleInputName, newNumber, handleInputNumber, handleSubmit }} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );

};

export default App;
