import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

export const getAllPersons = () => axios
  .get(baseUrl + 'persons')
  .then(response => response.data);

export const addNewPerson = person => axios
  .post(baseUrl + 'persons', person)
  .then(response => response.data);
