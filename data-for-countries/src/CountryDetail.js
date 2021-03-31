import React, { useState } from 'react';

const CountryDetail =
  ({ name, capital, region, population, languages, flag, show }) => {

    const [display, setDisplay] = useState(show);

    return <>
      <p>{name} <button onClick={() => setDisplay(!display)}>{display ? 'Hide' : 'Show'} Detail</button></p>
      {
        display && <div>
          <h3>{name}</h3>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>Population: {population}</p>
          <ol>
            {languages.map(({ name }) => <li key={name}>{name}</li>)}
          </ol>
          <img src={flag} alt="Flag" width="200" />
        </div>
      }
    </>;

  };

export default CountryDetail;
