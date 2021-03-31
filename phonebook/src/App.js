import React, { useEffect, useState } from 'react';
import { addNewPerson, delPerson, getAllPersons, modifyPersonNumber } from './api';
import Filter from './Filter';
import Notification from './Notification';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [message, setMessage] = useState({});

  useEffect(
    () => getAllPersons()
      .then(data => {
        setPersons(data);
        setFilteredPersons(data);
      }),
    [],
  );

  const setSuccessMessage = text => {
    setMessage({ type: 'success', text });
    setTimeout(() => setMessage({}), 5000);
  };

  const setFailMessage = text => {
    setMessage({ type: 'fail', text });
    setTimeout(() => setMessage({}), 5000);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const foundPerson = persons.find(person => person.name === newName);
    if (foundPerson) {
      if (!window.confirm(`${newName} is already added to phonebook, update it?`)) {
        return;
      }
      const updatedPerson = { id: foundPerson.id, name: newName, number: newNumber };
      console.log(updatedPerson);
      await modifyPersonNumber(updatedPerson)
        .catch(error => {
          setFailMessage(`Update ${newName} failed.`);
          throw error;
        });
      const updatedPersons = persons.filter(({ name }) => name !== newName).concat(updatedPerson);
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
      setSuccessMessage(`Update ${updatedPerson.name} succeed.`);
      return;
    }
    const newPerson = await addNewPerson({ name: newName, number: newNumber })
      .catch(error => {
        setFailMessage(`Add ${newName} failed.`);
        throw error;
      });
    const newPersons = [...persons, newPerson];
    setPersons(newPersons);
    setFilteredPersons(newPersons);
    setNewName('');
    setNewNumber('');
    setSuccessMessage(`Add ${newName} succeed.`);
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
    await delPerson(id)
      .catch(error => {
        setFailMessage(`Delete ID ${id} failed.`);
        throw error;
      });
    setPersons(persons.filter(({ id: deletedID }) => deletedID !== id));
    setFilteredPersons(filteredPersons.filter(({ id: deletedID }) => deletedID !== id));
    setSuccessMessage(`Delete ID ${id} succeed.`);
  }

  const handleInputName = ({ target: { value } }) => setNewName(value);
  const handleInputNumber = ({ target: { value } }) => setNewNumber(value);

  return <>
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <h2>Filter</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add new number</h2>
      <PersonForm {...{ newName, handleInputName, newNumber, handleInputNumber, handleSubmit }} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  </>;

};

export default App;
