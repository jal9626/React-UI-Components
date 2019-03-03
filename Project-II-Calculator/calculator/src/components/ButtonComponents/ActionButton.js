import React from 'react';
import './Button.css';

function ActionButton(props) {
   return (
     <div className='actionButtonContainer'>
       <div className='clearButton'>
         <p>clear</p>
       </div>
       <div className='symbolsContainer'>
         <div className='symbol'>
            {<h1>{props.symbol.symbol}</h1>}
         </div>
       </div>
     </div>
    );
}

export default ActionButton;