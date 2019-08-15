import React from 'react';
import './App.css';
import Test from './TEST/TEST.js';

import AppRouter from './utilities/Router'

function App() {
  return (
    <div className="App grid-container">
      <AppRouter />
      <Test />
    </div>
  );
}

export default App;
