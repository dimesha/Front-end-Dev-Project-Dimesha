import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Header from '../src/pages/Header';
import Footer from '../src/pages/Footer';
import Herosection from '../src/pages/HeroSection';
import Product from'../src/pages/Product';
import Faqs from '../src/pages/Faqs';
import CTASection from './pages/CSection';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Herosection/>
    <Product/>
    <Faqs/>
    <Footer/>
    </BrowserRouter>
  )
}
