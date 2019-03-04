import React from 'react';
import './Display.css';

function CalculatorDisplay() {
    return (
       <div>
         <div className='display'>
           <p>0</p>
         </div>
         <div className='clearButton'>
           <p>clear</p>
         </div>
       </div>
    );
};

export default CalculatorDisplay;

