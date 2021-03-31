import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filter, setFilter] = useState('');

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
    setFilter(event.target.value);
    setFilteredCountries(
      countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())),
    );
  }

  return <>
    <h2>Filter</h2>
    <div>
      Filter: <input value={filter} onInput={handleInputFilter} />
    </div>
    <h2>Filtered Countries Information</h2>
    {
      filteredCountries.length > 10
        ? <p>Too many countries, input more filter.</p>
        : filteredCountries.length > 1
          ? filteredCountries.map(({ name }) => <p key={name}>{name}</p>)
          : filteredCountries.length === 1
            ? filteredCountries.map(
              ({ name, capital, region, population, languages, flag }) => <div key={name}>
                <h3>{name}</h3>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <ol>
                  {languages.map(({ name }) => <li key={name}>{name}</li>)}
                </ol>
                <img src={flag} alt="Flag" width="200" />
              </div>,
            )
            : <p>There is no filtered country.</p>
    }
  </>;

};

export default App;
