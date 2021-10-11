import React from 'react';

export const SampleComponent = ({ State, Events }: any) => {

  console.log(State, Events)
  const [number, setNumber]: any = React.useState(Math.random());
  React.useEffect(() => {
    console.log('test')
    return function cleanup() { console.log('unmounted') }
  }, [])


  return <div>SAMPLE 1: {number}</div>
};

export const SampleComponentTwo = () => {
  return <div>SAMPLE 2</div>
};


export const ShellHeader = (props: any) => {
  return (
    <header>
      <a is="nav-link" href="/1">TEST</a>
      <a is="nav-link" href="/2">TEST2</a>
    </header>
  )
}