import React from 'react'
import Contact from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';
import { RiWhatsappFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const ContactUsRoute = () => {
  return (
    <>
      <div className='bg-slate-950 pt-24'>
      <Contact />
        <div className='flex flex-col justify-center mt-20'>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white"
          >
            You can contact us through
          </motion.h1>
          <div className='flex flex-wrap justify-around px-40 mb-28 gap-16'>
            <motion.div className=' flex flex-col justify-center items-center'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <IoLogoFacebook className='text-white size-12 flex justify-center hover:text-blue-500' />
              <p className='text-neutral-100 flex justify-center'>Facebook</p>
            </motion.div>
            <motion.div className=' flex flex-col justify-center items-center'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <FaInstagram className='text-white size-12 flex justify-center hover:text-pink-600' />
              <p className='text-neutral-100 flex justify-center'>Instagram</p>
            </motion.div>
            <motion.div className=' flex flex-col justify-center items-center'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <FaLinkedin className='text-white size-12 flex justify-center hover:text-blue-500' />
              <p className='text-neutral-100 flex justify-center'>LinkedIn</p>
            </motion.div>
            <motion.div className=' flex flex-col justify-center items-center'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.8 }}
            >
              <RiWhatsappFill className='text-white size-12 flex justify-center hover:text-green-600' />
              <p className='text-neutral-100 flex justify-center'>Whatsapp</p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ContactUsRoute
