import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='pb-4 px-4 sm:px-8 mb-20 sm:mb-28'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-10 sm:my-20 text-center text-3xl sm:text-4xl font-semibold text-slate-950'
      >
        About
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='text-blue-500'
        >
          Us
        </motion.span>
      </motion.h1>
      <div className='flex flex-wrap justify-center lg:justify-between'>
        <div className='w-full lg:w-1/2 p-4 lg:p-8'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center lg:justify-start'
          >
            <img className='rounded-2xl w-full max-w-md h-auto' src={img} alt="About Us" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 text-justify'
        >
          <div className='flex justify-center lg:justify-start pt-8 lg:pt-16'>
            <p className='my-2 max-w-xl py-6 mx-4 sm:mx-8 text-lg sm:text-xl lg:text-2xl text-slate-950'>
              At QuickFusion Innovations, we specialize in elevating your digital presence through advanced IT and tech solutions. From web and app development to digital marketing, social media management, and graphic design, our team delivers tailored solutions that drive success and growth. We combine expertise with innovation to help your business stand out and thrive in the digital landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
