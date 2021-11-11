import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './containers/ContactUs/index';

function App() {
  return (
  <Router>
      <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
      </Routes>
      </div>
  </Router>
    
  );
}

export default App;
