import React from 'react';
import ComputePanel from './components/ComputePanel'
import './App.css';

const App = () => {
  const buttonText = [
    {
      text: 'c'
    },
    {
      text: '+/-'
    },
    {
      text: '%'
    },
    {
      text: '/'
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
      text: 'x'
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
      text: '-'
    },
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
      text: '+'
    },
    {
      text: '0'
    },
    {
      text: '.'
    },
    {
      text: 'del'
    },
    {
      text: '='
    }
];

 
  return (
    <div className="calculator-body">
      <ComputePanel buttonText={buttonText}/>
    </div>
  )
};


export default App;