import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './components/homepage/Home';
import Footer from './components/footer/Footer';
import About from './components/aboutpage/About';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
        </Routes>
        <Footer />
      </Router>
    
    </>

  );
}

export default App;
