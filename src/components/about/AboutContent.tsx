import React from 'react';
import { motion } from 'framer-motion';
import { AboutText } from './AboutText';
import { AboutHighlights } from './AboutHighlights';

interface AboutContentProps {
  inView: boolean;
}

export function AboutContent({ inView }: AboutContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl transform -rotate-1" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="prose prose-lg max-w-3xl mx-auto">
          <AboutText />
          <AboutHighlights />
        </div>
      </div>
    </motion.div>
  );
}