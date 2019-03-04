import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
   <div class='numberContainer'>
      <div className="numbers">   
        <p><strong>7</strong></p> 
        <p><strong>8</strong></p> 
        <p><strong>9</strong></p> 
      </div>  
      <div className="numbers">   
        <p><strong>4</strong></p> 
        <p><strong>5</strong></p> 
        <p><strong>6</strong></p> 
      </div>    
      <div className="numbers">   
        <p><strong>1</strong></p> 
        <p><strong>2</strong></p> 
        <p><strong>3</strong></p> 
      </div>   
      <div className='zero'>
        <p><strong>0</strong></p>
      </div>  
    </div>
  );
}

export default NumberButton;
