import React from 'react';
import Part from './Part';

const Content = (props) => <>
  {props.parts.map((part, index) => <Part name={part.name} index={index} />)}
</>;

export default Content;
