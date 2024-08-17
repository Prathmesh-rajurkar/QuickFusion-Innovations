import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import ge from '../assets/Geetomati_remove.png'
import quickfusion from '../assets/QuickFusion_remove.png'


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})


const Hero = () => {

  const words = ["We Provide Digital Marketting Service", "We Provide IT & Tech Solutions.", "We Provide Graphic Designing Service."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        if (letterIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };
// Adjust the delay time for typing and deleting
const typingDelay = isDeleting ? 50 : 100; // Faster deleting
const timeoutId = setTimeout(handleType, typingDelay);

    return () => clearTimeout(typingDelay);
  }, [currentText, isDeleting, letterIndex, words, currentWordIndex]);




  return (
    <div id='home' className='pt-28 px-8 pb-4 lg:mb-36 w-full h-auto lg:h-[100vh] bg-slate-950'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:ml-10'>
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-4xl font-normal tracking-tight lg:mt-16 lg:text-8xl'>
              Quick<span className='text-blue-500'>Fusion</span> Innov<span className='text-blue-500'>ations</span>
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              id='typewriter'
              className=' text-neutral-200 bg-clip-text text-2xl lg:text-4xl tracking-tight '>
              {currentText} |
            </motion.span>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl py-4 lg:py-6 font-light tracking-tighter'>
              At Geetomati, we understand that managing your finances, investing in your future, and leveraging technology can be complex and overwhelming. That's why we're here to help. Our team of expert financial advisors, investment specialists, and technology innovators will work with you to create a personalized plan tailored to your unique needs and goals.
            </motion.p> */}
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='mt-9 mx-auto'>
              <img
                className=' top-4 left-0 right-0 w-full h-full'
                src={quickfusion}
                alt='Profile'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
