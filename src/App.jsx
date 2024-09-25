import React, { useRef, useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [logs, setLogs] = useState([]);
  const newValue = useRef();

  const addLog = (before, type, value, after) => {
    setLogs([...logs, { before, type, value, after }]);
  };

  const deposit = () => {
    const value = +newValue.current.value;
    const AfterBalance = balance + value;
    setBalance(AfterBalance);
    addLog(balance, 'Deposit', value, AfterBalance);
    newValue.current.value = ""; 
  };

  const withdraw = () => {
    const value = +newValue.current.value;
    if (balance >= value) {
      const AfterBalance = balance - value;
      setBalance(AfterBalance);
      addLog(balance, 'Withdraw', value,AfterBalance);
      newValue.current.value = "";  
    } else {
      alert('balance is low');
    }
  };

  return (
    <div className='App'>
      <div>
        <h1>The balance is : {balance} EGP</h1>
        <input ref={newValue} />
        <button className='btn btn-success' onClick={deposit}>Deposit</button>
        <button className='btn btn-danger' onClick={withdraw}>Withdraw</button>
      </div>
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Before Balance</th>
              <th>Log Type</th>
              <th>Log Value</th>
              <th>AfterBalance</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{log.before}</td>
                <td>{log.type}</td>
                <td>{log.value}</td>
                <td>{log.after}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
