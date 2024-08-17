import React from 'react';
import { motion } from 'framer-motion';
import pratik from '../assets/pratik.png';
import harshPatel from '../assets/HarshPatel.png';
import harshBissa from '../assets/HarshBissa.png';

const Founders = () => {
    return (
        <div id='about' className='py-10 px-4 lg:px-8 bg-slate-950'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='mt-12 text-center text-3xl lg:text-4xl text-white'>
                Our Founders
            </motion.h1>

            {/* Founder Section */}
            <div className='flex flex-col lg:flex-row items-center justify-between flex-wrap mt-12 lg:mt-24'>
                <motion.div
                    className='flex flex-col items-center mb-12 lg:mb-0 lg:ml-16 w-full lg:w-auto'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]'>
                        <div className='absolute bottom-0 left-0 w-full flex justify-center z-10'>
                            <img className='h-[250px] lg:h-[380px] rounded-b-[4.2rem] lg:rounded-b-[5.4rem]' src={pratik} alt="Pratik Patel" />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full bg-slate-300 rounded-full'></div>
                    </div>
                    <h1 className='font-semibold tracking-wide text-2xl lg:text-3xl text-white mt-4'>Pratik Patel</h1>
                    <span className='mt-2 text-sm lg:text-base text-gray-300'>Founder at QuickFusion Innovations</span>
                </motion.div>

                <motion.div
                    className='max-w-full lg:max-w-[60%] text-sm lg:text-lg tracking-widest text-justify mx-5 lg:mr-5 text-gray-300'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                >
                    Our Founder believes in the transformative power of technology. Their vision is to push the boundaries of IT solutions, digital marketing, and design, aiming not just to meet today’s needs but to shape the future. They are known for combining creativity with technical expertise, always prioritizing their clients’ needs. For them, every project is an opportunity to innovate and contribute to their clients' success.
                </motion.div>
            </div>

            {/* Additional Founders Sections */}
            

            {/* Add more founder sections as needed */}
        </div>
    );
};

export default Founders;
