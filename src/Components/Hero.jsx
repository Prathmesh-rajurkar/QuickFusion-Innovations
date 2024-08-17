import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import quickfusion from '../assets/QuickFusion_remove.png';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
});

const Hero = () => {
  const words = ["Digital Marketing Service", "IT & Tech Solutions", "Graphic Designing Service"];
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

    const typingDelay = isDeleting ? 50 : 100;
    const timeoutId = setTimeout(handleType, typingDelay);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, letterIndex, words, currentWordIndex]);

  return (
    <div id='home' className='pt-20 px-4 pb-4 w-full h-auto lg:h-screen bg-slate-950'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:ml-10'>
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-6 text-3xl font-normal tracking-tight lg:mt-12 lg:text-6xl text-center lg:text-left'>
              Quick<span className='text-blue-500'>Fusion</span> Innov<span className='text-blue-500'>ations</span>
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              id='typewriter'
              className='text-neutral-200 text-xl lg:text-3xl tracking-tight text-center lg:text-left'>
              {currentText} |
            </motion.span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0'>
          <div className='flex justify-center'>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='w-3/4 lg:w-full'>
              <img
                className='w-full h-auto'
                src={quickfusion}
                alt='QuickFusion Logo'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
