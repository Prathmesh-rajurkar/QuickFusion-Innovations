import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Founders from '../Components/Founders';
import Contact from '../Components/Contact';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a timeout of 3 seconds before showing the main content
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clear the timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <Loader /> :
                <div className='overflow-x-hidden text-slate-950 antialiased'>
                    <div className=' container text-neutral-300'>
                        <Navbar />
                        <Hero />
                        <About />
                        <Founders />
                        <Footer />
                    </div>
                </div>
            }
        </div>
    )
}

export default HomePage
