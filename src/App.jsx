import React, { useState, useEffect } from 'react'
import HomePage from './Routes/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Routes/AboutUs';
import Navbar from './Components/Navbar';
import Services from './Routes/Services';
import ContactUsRoute from './Routes/ContactUsRoute';


const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services/>} />
        <Route path='/contact' element={<ContactUsRoute/>} />
      </Routes>
    </Router>
  )
}

export default App
