import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { IoDesktopOutline } from "react-icons/io5";
import { HiCodeBracket } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";
import { LuFileSignature } from "react-icons/lu";
import { RiFundsBoxLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

function Services() {
    return (
        <div className="bg-slate-950 overflow-x-hidden">
            <div className="min-h-screen w-full bg-slate-950 pt-24 p-4 flex flex-col gap-20 justify-center items-center mb-24">
                <motion.h1 className="flex text-neutral-100 font-semibold tracking-wider justify-center text-3xl mt-7"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
                <div className="flex flex-wrap gap-20 w-full justify-around mx-5">
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-teal-200"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                            <IoDesktopOutline className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">Website Development</h1>
                        <p className="px-4 text-gray-500">We build cutting-edge websites that are not only functional but also user-friendly. Our services include developing fully interactive websites to meet your business needs.</p>
                    </motion.div>
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-rose-200"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-rose-500 shadow-lg shadow-teal-500/40">
                            <CiMobile3 className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">App Development</h1>
                        <p className="px-4 text-gray-500">Our app development services create user-friendly applications that streamline processes and enhance functionality, ensuring a smooth and intuitive experience.</p>
                    </motion.div>
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-sky-200"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-teal-500/40">
                            <HiCodeBracket className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">Tech & IT Solutions</h1>
                        <p className="px-4 text-gray-500">We provide comprehensive tech and IT solutions, including custom software development, system integrations, network management, and cybersecurity, to boost efficiency and protect your digital assets.</p>
                    </motion.div>
                </div>
                <div className="flex flex-wrap gap-20 w-full justify-around mx-5">
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-teal-200"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                            <RiFundsBoxLine className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">Digital Marketing</h1>
                        <p className="px-4 text-gray-500">Our digital marketing strategies drive traffic and boost engagement through targeted campaigns, effective SEO, and innovative online advertising techniques.</p>
                    </motion.div>
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-rose-200"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 80 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-rose-500 shadow-lg shadow-teal-500/40">
                            <MdOutlineDesignServices className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">Graphic Designing</h1>
                        <p className="px-4 text-gray-500">Our graphic design services deliver eye-catching visuals that effectively communicate your brand's message and leave a lasting impression on your audience.</p>
                    </motion.div>
                    <motion.div className="rounded-xl bg-white p-6 text-center shadow-xl w-full sm:w-72 md:w-80 cursor-pointer hover:bg-sky-200"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-sky-500 shadow-lg shadow-teal-500/40">
                            <GiCrystalGrowth className="size-8 text-neutral-800" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium">Social Media Marketing</h1>
                        <p className="px-4 text-gray-500">We craft comprehensive social media strategies to build your brand's presence, engage with your audience, and drive growth across various social platforms.</p>
                    </motion.div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Services;
