import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ProfileImage } from './hero/ProfileImage';
import { HeroContent } from './hero/HeroContent';
import { ScrollIndicator } from './hero/ScrollIndicator';

export function Hero() {
  return (
    <motion.section 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center space-y-8 max-w-4xl px-4">
        <ProfileImage />
        <HeroContent />
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}