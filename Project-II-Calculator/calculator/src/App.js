import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import Symbols from './components/ButtonComponents/Symbols';

const App = () => {
  return (
    <div className='appBorder'>
      <CalculatorDisplay />
      <ActionButton />
      <Symbols />
    </div>
  );
};

export default App;
