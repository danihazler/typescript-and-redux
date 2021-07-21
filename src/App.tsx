import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { amountAvailable } = useSelector((state: RootState) => state.bank);
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>{amountAvailable}</h1>
      <div className="buttons">
        <button onClick={() => depositMoney(500)}>Deposit</button>
        <button onClick={() => withdrawMoney(100)}>Withdraw</button>
        <button onClick={() => bankrupt()}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;
