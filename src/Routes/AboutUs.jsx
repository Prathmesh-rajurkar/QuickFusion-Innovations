import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Offer } from '../assets'; // Import your offers data

const AboutUs = () => {
    return (
        <>
            <Navbar /> {/* Add the Navbar component here */}
            <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 flex-col p-4 overflow-x-hidden">
                <motion.h3 className="text-2xl md:text-4xl font-bold flex items-center text-center"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                        WE
                    </span>
                    <span className="mx-2">❤️</span>
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                        LOVE WHAT WE DO
                    </span>
                </motion.h3>
                <motion.p className="text-lg md:text-2xl text-slate-800 flex justify-center items-center max-w-[90%] md:max-w-[60%] text-center mt-8 font-semibold"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    Our company excels in providing comprehensive IT solutions and digital marketing services. We specialize in crafting exceptional code, enhancing your digital presence through strategic social media marketing, and creating visually stunning graphic designs to elevate your brand.
                </motion.p>
            </div>

            <div className="border-b border-neutral-900 pb-4 px-4 md:px-8 bg-slate-950 overflow-x-hidden">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="mb-20 pt-20 text-center text-4xl text-neutral-200">
                    What We Offer
                </motion.h1>
                <div>
                    {Offer.map((offer, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:gap-20 lg:flex-nowrap lg:justify-center w-full">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4 flex justify-center">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="mb-6 rounded max-w-full"
                                />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold text-lg text-neutral-200">{offer.title}</h6>
                                <p className="mb-4 text-neutral-400">{offer.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer /> {/* Add the Footer component here */}
        </>
    );
};

export default AboutUs;
