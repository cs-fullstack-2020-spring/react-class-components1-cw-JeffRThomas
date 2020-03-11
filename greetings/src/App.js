import React from 'react';
import SayHello from './components/greetings';
import SayHowdy from './components/SayHowdy';

function App() {
  return (
    <div>
      <header>
      <SayHello/>
      <SayHowdy/>
      </header>
    </div>
  );
}
export default App;
