import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {

    const openLink = (URL) => {
        window.open(URL);
      }

    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between w-full px-4 md:px-10">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold">QuickFusion Innovations</h1>
                    <p className="text-xs md:text-sm mt-2">© 2024 QuickFusion Innovations. All rights reserved.</p>
                </div>
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold">Address</h1>
                    <p className="text-xs md:text-sm mt-2 max-w-full md:max-w-[70%] mx-auto md:mx-0">1st Floor RamKunj Apartment, Near Kachi Visa Ground, Chapru Nagar.</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                    <h1 className="text-xl md:text-2xl font-bold">Get In Touch</h1>
                    <p className="text-xs md:text-sm">Contact: +91 7057347707</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=61564141566008" className="text-gray-400 hover:text-blue-500">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=7057347707&text&type=phone_number&app_absent=0" className="text-gray-400 hover:text-blue-400">
                            <RiWhatsappFill size={20} />
                        </a>
                        <a href="https://www.instagram.com/quickfusion_innovations/" className="text-gray-400 hover:text-pink-600">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/quickfusion-innovations" className="text-gray-400 hover:text-blue-500">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-10 text-center text-xs md:text-sm">
                <p>Terms of Service | Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
