import React, { useState, useEffect } from "react";
import HomePage from "./Routes/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import AboutUs from "./Routes/AboutUs";
import Navbar from "./Components/Navbar";
import Services from "./Routes/Services";
import ContactUsRoute from "./Routes/ContactUsRoute";
import ScrollToUp from "./utils/ScrollToUp";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Outlet />
        <ScrollToUp/>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUsRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
