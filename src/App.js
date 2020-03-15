import React from 'react';
import FetchCarona from './components/FetchCarona'
import CountrySelector from './components/CountrySelector'

import './App.css';

function App() {
  return (
    <div className="container">
      <FetchCarona />
      <CountrySelector />
    </div>
  );
}

export default App;
