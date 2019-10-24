import React from 'react';
import Navbar from './component/Navbar';
import AboutMe from './component/AboutMe';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
import './App.css';
function App() {
  return (
    <div className='App' >
      <div id='top'></div>
      <Navbar/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
