import React, { useState } from 'react';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '11122223333' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
      return;
    }
    setPersons([...persons, { name: newName, phone: newPhone }]);
    setNewName('');
    setNewPhone('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={({ target: { value } }) => setNewName(value)} />
        </div>
        <div>
          Phone: <input value={newPhone} onChange={({ target: { value } }) => setNewPhone(value)} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, phone }) => <p key={name}>{name} {phone}</p>)}
    </div>
  );

};

export default App;
