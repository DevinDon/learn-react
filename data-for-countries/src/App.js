import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountryDetail from './CountryDetail';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(
    () => axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      }),
    [],
  );

  const handleInputFilter = event => {
    event.preventDefault();
    const filter = event.target.value;
    setFilteredCountries(
      countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase())),
    );
  }

  return <>
    <h2>Filter</h2>
    <div>
      Filter: <input onInput={handleInputFilter} />
    </div>
    <h2>Filtered Countries Information</h2>
    {
      filteredCountries.length > 10
        ? <p>Too many countries, input more filter.</p>
        : filteredCountries.length > 1
          ? filteredCountries.map(country => <CountryDetail key={country.name} {...country} />)
          : filteredCountries.length === 1
            ? <CountryDetail {...filteredCountries[0]} show={true} />
            : <p>There is no filtered country.</p>
    }
  </>;

};

export default App;
