import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import { NavBar2 } from './components/navbar/navbar2/NavBar2';
import Home from './components/homepage/Home';
import Footer from './components/footer/Footer';
import Footer2 from './components/footer/footer2/Footer2';
import About from './components/aboutpage/About';
import MasjidReconstruction from './components/masjidreconstructionpage/MasjidReconstruction';
import Dev from './components/devpage/Dev';
import Donate from './components/donatepage/Donate';

function App() {
  return (
    <>
      <Router>
        <NavBar2 />
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/masjid-reconstruction' element={<MasjidReconstruction/>}  />
          <Route path='/dev' element={<Dev/>}  />
          <Route path='/donate' element={<Donate/>}  />

        </Routes>
        <Footer2 />
      </Router>
    
    </>

  );
}

export default App;
