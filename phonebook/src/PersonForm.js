import React from 'react';

const PersonForm = ({ newName, handleInputName, newNumber, handleInputNumber, handleSubmit }) => <>
  <form>
    <div>
      Name: <input value={newName} onChange={handleInputName} />
    </div>
    <div>
      Number: <input value={newNumber} onChange={handleInputNumber} />
    </div>
    <div>
      <button type="submit" onClick={handleSubmit}>add</button>
    </div>
  </form>
</>;

export default PersonForm;
