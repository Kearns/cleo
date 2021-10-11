import React from 'react';

export const SampleComponent = ({State, Events}: any) => {
  console.log(State, Events)
  if(!State.getState('number')) State.setState('number', Math.random());
  
  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    console.log("Mounted");
    return () => console.log("Unmounted");
  });

  return <div>SAMPLE 1: {State.getState('number')}</div>
};

export const SampleComponentTwo = () => {
  return <div>SAMPLE 2</div>
};
