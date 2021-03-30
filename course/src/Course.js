import React from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course: { id, name, parts } }) => {

  return <>
    <Header id={id}>{name}</Header>
    <Content parts={parts} />
    <Total exercises={parts.map(part => part.exercises)} />
  </>;
}

export default Course;
