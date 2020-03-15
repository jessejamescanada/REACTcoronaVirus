import React from 'react';
import FetchCarona from './components/FetchCarona'
import CountrySelector from './components/CountrySelector'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="container">
      <FetchCarona />
      <CountrySelector />
      <Footer />
    </div>
  );
}

export default App;
