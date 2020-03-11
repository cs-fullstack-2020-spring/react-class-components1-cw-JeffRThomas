import React from 'react';
import BankAccount from './components.BankAccount';



function App() {
  return (
    <div>
      <header>
      <BankAccount customerName="Person1" balance = "$100.00"/>
      </header>
    </div>
  );
}

export default App;
