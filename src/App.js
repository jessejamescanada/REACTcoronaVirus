import React from 'react';
import FetchCarona from './components/FetchCarona'
import CountrySelector from './components/CountrySelector'
import Footer from './components/Footer'
import LatestNews from './components/LatestNews'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="container">
      <FetchCarona />
      <CountrySelector />
      <Header />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;

// {item.title.length > 100
//   ? `${item.title.substring(0, 100)}...`
//   : item.title}

//   {item.description.length > 200
//     ? `${item.description.substring(0, 200)}...`
//     : item.description}