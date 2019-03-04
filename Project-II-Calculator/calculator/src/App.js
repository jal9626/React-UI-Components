import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Symbols from './components/ButtonComponents/Symbols';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = props => {
  return (
    <div className='appBorder'>
      <CalculatorDisplay />
      <Symbols />
      <NumberButton />      
    </div>
  );
};

export default App;
