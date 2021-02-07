import React from 'react';
import ComputePanel from './components/ComputePanel'

const App = () => {
  const buttonText = [
    {
      text: '1'
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: '6'
    },
    {
      text: '7'
    },
    {
      text: '8'
    },
    {
      text: '9'
    },
    {
      text: '0'
    },
    {
      text: '/'
    },
    {
      text: 'x'
    },
    {
      text: '-'
    },
    {
      text: '+'
    },
    {
      text: '='
    },
    {
      text: '%'
    },
    {
      text: '+/-'
    },
    {
      text: 'c'
    },
    {
      text: 'del'
    },
    {
      text: '.'
    }
];

 
  return (
    <div   >
      <ComputePanel buttonText={buttonText}/>
    </div>
  )
};


export default App;