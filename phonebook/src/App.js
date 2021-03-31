import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

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
