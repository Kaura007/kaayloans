import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

export function ScrollIndicator() {
  const scrollToProjects = useScrollTo('projects');

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={scrollToProjects}
    >
      <ChevronDown size={32} />
    </motion.div>
  );
}