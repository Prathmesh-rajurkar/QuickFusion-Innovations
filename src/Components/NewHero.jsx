import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../assets/blob.svg";
import HeroPng from "../assets/hero.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

export const NewHero = () => {
    return (
        <section className="bg-slate-950 overflow-hidden relative lg:h-[100vh] h-auto">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                {/* Brand Info */}
                <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">

                    <div className="text-center justify-center items-center md:text-left space-y-10 lg:max-w-[80%] mt-10 p-6">
                        <motion.h1
                            variants={FadeUp(0.6)}
                            initial="initial"
                            animate="animate"
                            className='text-5xl lg:text-5xl font-bold !leading-snug lg:ml-10'>
                            Quick<span className='text-blue-500'>Fusion</span> Innov<span className='text-blue-500'>ations</span>
                        </motion.h1>

                        <motion.h6
                            variants={FadeUp(0.6)}
                            initial="initial"
                            animate="animate"
                            className="text-3xl lg:text-5xl font-semibold !leading-snug lg:ml-10"
                        >
                            Let's Start to build up{" "}
                            <span className="text-secondary">Your Digital</span> presence with
                        </motion.h6>

                        <motion.div
                            variants={FadeUp(0.8)}
                            initial="initial"
                            animate="animate"
                            className="flex justify-center md:justify-start"
                        >
                            {/* <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button> */}
                        </motion.div>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                        src={HeroPng}
                        alt=""
                        className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
                    />
                    <motion.img
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                        src={Blob}
                        alt=""
                        className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
};