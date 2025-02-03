import React from 'react';
import { motion } from 'framer-motion';

export function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
        <img
          src="/profile.jpg"
          alt="Abdulrahman Kaura"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}