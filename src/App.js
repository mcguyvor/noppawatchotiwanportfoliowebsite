import React from 'react';
import Navbar from './component/Navbar';
import AboutMe from './component/AboutMe';
import Portfolio from './component/Portfolio';
import './App.css';
function App() {
  return (
    <div className='App' >
      <div id='top'></div>
      <Navbar/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;
