import React from 'react';

export const SampleComponent = () => {
  const [number, setNumber] = React.useState(Math.random())
  return <div>SAMPLE 1: {number}</div>
};

export const SampleComponentTwo = () => {
  const [number, setNumber] = React.useState(Math.random())
  return <div>SAMPLE 2: {number}</div>
};