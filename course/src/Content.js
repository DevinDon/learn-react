import React from 'react';
import Part from './Part';

const Content = ({ parts }) => <ol>
  {parts.map(({ id, ...part }) => <Part key={id} {...part} />)}
</ol>;

export default Content;
