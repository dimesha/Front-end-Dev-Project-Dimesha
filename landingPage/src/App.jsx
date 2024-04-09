import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Header from '../src/pages/Header';
import Footer from '../src/pages/Footer';
import Herosection from '../src/pages/HeroSection';
import CTASection from './pages/CSection';


export default function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Herosection/>
    {/* <CTASection/> */}

      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hero" element={<Herosection />}/>
      </Routes> */}
      <Footer/>
    </BrowserRouter>
  )
}
