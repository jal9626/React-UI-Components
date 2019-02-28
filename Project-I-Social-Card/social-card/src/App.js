import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <a href='https://reactjs.org/' style={{ textDecoration: 'none' }}><CardContainer /></a>
        
    </div>

  );
};

export default App;
