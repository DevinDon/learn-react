import axios from 'axios';
import React, { useEffect, useState } from 'react';

const key = 'ca7d1df9206841d320cea423ce6c0536';

const Weather = ({ area }) => {

  const [weather, setWeather] = useState({});

  const getWeather = area => axios.get(
    'http://api.weatherstack.com/current',
    { params: { access_key: key, query: area } },
  ).then(response => setWeather(response.data.current));

  useEffect(() => getWeather(area), [area]);

  return <>
    <p>Temperature: {weather.temperature} ℃</p>
    {weather.weather_icons?.map(icon => <img key={icon} src={icon} alt="Weather Icon" />)}
    <p>Wind: {weather.wind_dir} {weather.wind_speed} km/h</p>
  </>;

};

export default Weather;
