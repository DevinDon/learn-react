import React, { useEffect, useState } from 'react';
import { addNewPerson, delPerson, getAllPersons } from './api';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => getAllPersons().then(data => {
    setPersons(data);
    setFilteredPersons(data);
  }), []);

  const handleSubmit = async event => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    const newPersons = [...persons, newPerson];
    await addNewPerson(newPerson);
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

  const handleDelete = async id => {
    if (!window.confirm(`Delete ID ${id}?`)) {
      return;
    }
    await delPerson(id);
    setPersons(persons.filter(({ id: deletedID }) => deletedID !== id));
    setFilteredPersons(filteredPersons.filter(({ id: deletedID }) => deletedID !== id));
  }

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
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );

};

export default App;
