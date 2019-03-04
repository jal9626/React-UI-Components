import React from 'react';
import './Button.css';

function ActionButton(props) {
   return (
     <div className='actionButtonContainer'>
         <div className='symbol'>
            <h1>{props.symbol.symbol}</h1>
         </div>  
     </div>
    );
}

export default ActionButton;