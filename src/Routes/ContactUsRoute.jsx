import React from "react";
import Contact from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";

const ContactUsRoute = () => {
  return (
    <>
      <div className="bg-slate-950 pt-24">
        <Contact />
        <div className="flex flex-col justify-center mt-20">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-3xl sm:text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white"
          >
            You can contact us through
          </motion.h1>
          <div className="flex flex-wrap justify-center sm:justify-around px-10 sm:px-20 lg:px-40 mb-28 gap-10 sm:gap-16">
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <IoLogoFacebook className="text-white text-5xl flex justify-center hover:text-blue-500" />
              <p className="text-neutral-100 flex justify-center mt-2">Facebook</p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <FaInstagram className="text-white text-5xl flex justify-center hover:text-pink-600" />
              <p className="text-neutral-100 flex justify-center mt-2">Instagram</p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <FaLinkedin className="text-white text-5xl flex justify-center hover:text-blue-500" />
              <p className="text-neutral-100 flex justify-center mt-2">LinkedIn</p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <RiWhatsappFill className="text-white text-5xl flex justify-center hover:text-green-600" />
              <p className="text-neutral-100 flex justify-center mt-2">Whatsapp</p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUsRoute;
