import React from 'react';
import BankAccount from './components/BankAccount';
import Netflix from './components/Netflix';

function App() {
  return (
    <div>
      <header>
        <BankAccount customerName="Person1" balance="$100.00" />
        <Netflix/>
      </header>
    </div>
  );
}

export default App;
