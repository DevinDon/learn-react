import React from 'react';
import Content from './Content';
import Header from './Header';

const Course = ({ course: { id, name, parts } }) => {

  return <>
    <Header id={id}>{name}</Header>
    <Content parts={parts} />
  </>;
}

export default Course;
