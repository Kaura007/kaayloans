import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

interface SkillsListProps {
  inView: boolean;
}

export function SkillsList({ inView }: SkillsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((Skill, index) => (
        <motion.div
          key={Skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
              <Skill.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{Skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{Skill.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}