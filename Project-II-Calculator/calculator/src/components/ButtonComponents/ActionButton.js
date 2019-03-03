import React from 'react';
import './Button.css';

function ActionButton(props) {
   return (
   <div className='actionButtonContainer'>
     <div className='clearButton'></div>
     <div className='symbolsContainer'>
       <div className='symbol'>
            {/* <h1>{props.symbols.symbol}</h1> */}
       </div>
     </div>
   </div>
    );
}

export default ActionButton;