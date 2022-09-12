import React from 'react';
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import './App.sass';

function App() {
  return (
    <div className="app">
      <Calculator />
      <History />
    </div>
  );
}

export default App;
