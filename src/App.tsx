import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { amountAvailable } = useSelector((state: RootState) => state.bank);
  const[amountToBeMoved, setAmountToBeMoved] = useState<string | number>('');
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountToBeMoved(+e.target.value);
  }

  return (
    <div className="App">
      <h1>{amountAvailable}</h1>
      <div className="input-wrapper">
        <input type="number" name="amount" value={amountToBeMoved} placeholder="Insert the amount you want to move" onChange={handleAmount} />
        <button onClick={() => setAmountToBeMoved('')}>Clean</button>
      </div>
      <div className="buttons">
        <button onClick={() => depositMoney(+amountToBeMoved)}>Deposit</button>
        <button onClick={() => withdrawMoney(+amountToBeMoved)}>Withdraw</button>
        <button onClick={() => bankrupt()}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;
