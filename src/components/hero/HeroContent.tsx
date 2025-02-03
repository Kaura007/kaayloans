import React from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from '../../hooks/useScrollTo';

export function HeroContent() {
  const scrollToProjects = useScrollTo('projects');

  return (
    <>
      <motion.h1 
        className="text-5xl md:text-7xl font-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm Abdulrahman Kaura
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Full Stack Developer & UI/UX Designer
      </motion.p>
      <motion.button
        className="px-8 py-3 bg-blue-600 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        onClick={scrollToProjects}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.button>
    </>
  );
}