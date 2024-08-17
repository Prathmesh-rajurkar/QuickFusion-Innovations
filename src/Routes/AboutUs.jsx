import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png';
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { Offer } from '../assets'

const AboutUs = () => {
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 flex-col p-4">
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
                <motion.p className='text-lg md:text-2xl text-slate-800 flex justify-center items-center max-w-[90%] md:max-w-[60%] text-center mt-8 font-semibold'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    Our company excels in providing comprehensive IT solutions and digital marketing services. We specialize in crafting exceptional code, enhancing your digital presence through strategic social media marketing, and creating visually stunning graphic designs to elevate your brand.
                </motion.p>
            </div>
            {/* <div className='w-full p-4 md:p-10 bg-slate-900'>
                <h1 className='flex text-neutral-100 font-semibold tracking-wider justify-center text-2xl md:text-3xl mt-7 mb-12'>
                    Our Portfolio of Companies
                </h1>
                <div className='flex flex-wrap justify-center items-center gap-8 md:gap-32 mb-12'>
                    <div className="w-full md:w-80 bg-neutral-100 transition-transform duration-1000 border-t-2 border-r-2 border-gray-800 rounded-xl rounded-br-xl flex flex-col p-6">
                        <img src={logo} alt="" className='w-20 h-20 bg-slate-900 rounded-lg mx-auto mb-4' />
                        <span className="font-bold text-slate-950 text-center text-lg mb-2">Quick Fintax</span>
                        <p className="text-slate-950 text-center text-sm font-normal mb-4">
                            I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
                        </p>
                        <button className="py-2 px-6 mt-4 bg-slate-950 text-neutral-200 font-bold rounded-lg transition-colors duration-400 hover:bg-blue-600 hover:text-white">
                            Services
                        </button>
                    </div>
                    <div className="w-full md:w-80 bg-neutral-100 transition-transform duration-1000 border-t-2 border-r-2 border-gray-800 rounded-xl rounded-br-xl flex flex-col p-6">
                        <img src={logo} alt="" className='w-20 h-20 bg-slate-900 rounded-lg mx-auto mb-4' />
                        <span className="font-bold text-slate-950 text-center text-lg mb-2">Quick TechServ</span>
                        <p className="text-slate-950 text-center text-sm font-normal mb-4">
                            I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
                        </p>
                        <button className="py-2 px-6 mt-4 bg-slate-950 text-neutral-200 font-bold rounded-lg transition-colors duration-400 hover:bg-blue-600 hover:text-white">
                            Services
                        </button>
                    </div>
                </div>
            </div> */}




            <div className='border-b border-neutral-900 pb-4 px-8 bg-slate-950'>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='mb-20 pt-20 text-center text-4xl text-neutral-200'>
                    What We Offer
                </motion.h1>
                <div >
                    {Offer.map((offer, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/4'>
                                <img
                                    src={offer.image}
                                    alt=""
                                    width={150}
                                    height={150}
                                    className='mb-6 rounded'
                                />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className=' w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold text-lg text-neutral-200'>{offer.title}</h6>
                                <p className='mb-4 text-neutral-400'>{offer.description}</p>

                            </motion.div>
                        </div>
                    ))}

                </div>
            </div>

            <Footer />
        </>
    );
}

export default AboutUs;
