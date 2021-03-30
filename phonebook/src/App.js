import React, { useState } from 'react';

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

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter</h2>
      <div>
        Filter: <input onChange={handleFilter} />
      </div>
      <h2>Add new number</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={({ target: { value } }) => setNewName(value)} />
        </div>
        <div>
          Phone: <input value={newNumber} onChange={({ target: { value } }) => setNewNumber(value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(({ name, number }) => <p key={name}>{name} {number}</p>)}
    </div>
  );

};

export default App;
