import React from 'react';
import { Brain, Code, Users, Lightbulb } from 'lucide-react';

export function AboutHighlights() {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Experience building predictive models, deploying AI solutions, and working with frameworks like TensorFlow and PyTorch."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Skilled in creating dynamic web applications using React, Node.js, MongoDB, and RESTful APIs."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Software Engineering Best Practices",
      description: "Proficient in agile development, version control, and delivering clean, maintainable code."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration & Innovation",
      description: "A team player who loves working with diverse minds to turn ideas into impactful products."
    }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">What I Bring to the Table</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        When I'm not coding, you'll find me exploring emerging tech trends, contributing to open-source projects, 
        or enjoying learning about new technologies and their potential applications.
      </p>
    </div>
  );
}