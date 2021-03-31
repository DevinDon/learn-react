import React from 'react';

const Filter = ({ handleFilter }) => <>
  <div>
    Filter: <input onChange={handleFilter} />
  </div>
</>;

export default Filter;
