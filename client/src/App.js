import React from 'react';
import './App.css';
import Test from './TEST/TEST.js';

import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App grid-container">
      <Navbar />
      <Test />
    </div>
  );
}

export default App;
