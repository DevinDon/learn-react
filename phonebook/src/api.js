import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

export const getAllPersons = () => axios
  .get(baseUrl + 'persons')
  .then(response => response.data);

export const addNewPerson = person => axios
  .post(baseUrl + 'persons', person)
  .then(response => response.data);

export const delPerson = id => axios
  .delete(baseUrl + `persons/${id}`)
  .then(response => response.data);

export const modifyPersonNumber = ({ id, number }) => axios
  .put(baseUrl + `persons/${id}`, { number })
  .then(response => response.data);
