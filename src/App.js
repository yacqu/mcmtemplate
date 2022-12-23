import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './components/homepage/Home';
import Footer from './components/footer/Footer';
import About from './components/aboutpage/About';
import MasjidReconstruction from './components/masjidreconstructionpage/MasjidReconstruction';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/masjid-reconstruction' element={<MasjidReconstruction/>}  />

        </Routes>
        <Footer />
      </Router>
    
    </>

  );
}

export default App;
