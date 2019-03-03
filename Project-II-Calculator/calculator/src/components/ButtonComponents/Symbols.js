import React from 'react';
import ActionButton from "./ActionButton";

const symbols = [
    {
        symbol: '&#247'
        
    },
    {
        symbol: 'X'
    },
    {
        symbol: '-'
    },
    {
        symbol: '+'
    },
    {
        symbol: '='
    }
];
console.log(symbols)

function Symbols() {
    return (
        <div>
          {symbols.map(symbol, index => (
            <ActionButton symbol={symbol} key={index} />
          ))}
          
        </div>      
    );
  }

export default Symbols;