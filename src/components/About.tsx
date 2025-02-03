import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AboutHeader } from './about/AboutHeader';
import { SkillsList } from './about/SkillsList';
import { AboutContent } from './about/AboutContent';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <AboutHeader inView={inView} />
        <AboutContent inView={inView} />
        <SkillsList inView={inView} />
      </div>
    </section>
  );
}