import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Value here</h1>
      <div className="buttons">
        <button onClick={() => console.log('deposit')}>Deposit</button>
        <button onClick={() => console.log('withdraw')}>Withdraw</button>
        <button onClick={() => console.log('banckrupt')}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;
