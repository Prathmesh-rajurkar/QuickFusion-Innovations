import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';
import { RiWhatsappFill } from "react-icons/ri";
import logo from '../assets/Geetomati_remove.png'
import quickfusion from '../assets/QuickFusion_remove.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLink = (URL) => {
    window.open(URL);
  }

  return (
    <nav className="fixed w-full z-20 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950 text-neutral-300">
      {/* <h1 className="font-semibold text-2xl tracking-wider bg-gradient-to-r from-blue-500 via-slate-200 to-blue-500 bg-clip-text text-transparent">Geetomati</h1> */}
      <img className='h-12 w-16' src={quickfusion} alt="" />
      
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden flex items-center justify-end w-full">
        <button onClick={toggleMenu} className="z-20">
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      
      {/* Navigation Links */}
      <ul className={`fixed top-0 right-0 h-full w-65 bg-slate-950 flex flex-col items-start justify-center gap-6 p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:transform-none`}>
        <li><Link to="/" className="py-2 lg:py-0 cursor-pointer hover:text-blue-400 text-lg">Home</Link></li>
        <li><Link to="/about" className="py-2 lg:py-0 cursor-pointer hover:text-blue-400 text-lg">About</Link></li>
        <li><Link to="/services" className="py-2 lg:py-0 cursor-pointer hover:text-blue-400 text-lg">Services</Link></li>
        <li><Link to="/contact" className="py-2 lg:py-0 cursor-pointer hover:text-blue-400 text-lg">Contact Us</Link></li>
        
        {/* Social Media Icons (Mobile view inside menu) */}
        <div className="flex gap-4 cursor-pointer lg:hidden mt-4">
          <li className="hover:text-blue-400 text-xl" ><IoLogoFacebook /></li>
          <li className="hover:text-pink-600 text-xl"><FaInstagram /></li>
          <li className="hover:text-blue-400 text-xl"><FaLinkedin /></li>
          <li className="hover:text-green-600 text-xl"><RiWhatsappFill /></li>
        </div>
      </ul>

      {/* Social Media Icons (Desktop view) */}
      <ul className="hidden lg:flex gap-4 cursor-pointer">
        <li className="hover:text-blue-400 text-xl" onClick={() => openLink("https://www.facebook.com/profile.php?id=61564141566008")}><IoLogoFacebook /></li>
        <li className="hover:text-pink-600 text-xl" onClick={() => openLink("https://www.instagram.com/quickfusion_innovations/")}><FaInstagram /></li>
        <li className="hover:text-blue-400 text-xl" onClick={() => openLink("https://www.linkedin.com/company/quickfusion-innovations")}><FaLinkedin /></li>
        <li className="hover:text-green-600 text-xl" onClick={() => openLink("https://api.whatsapp.com/send/?phone=7057347707&text&type=phone_number&app_absent=0")}><RiWhatsappFill /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
