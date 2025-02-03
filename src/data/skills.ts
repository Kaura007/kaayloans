import { Code, Database, Layout, Terminal, GitBranch, Github, Brain } from 'lucide-react';
import { type IconType } from 'lucide-react';

export interface Skill {
  icon: IconType;
  name: string;
  description: string;
}

export const skills = [
  {
    icon: Code,
    name: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS'
  },
  {
    icon: Database,
    name: 'Backend Development',
    description: 'Node.js, MongoDB, Express'
  },
  {
    icon: Brain,
    name: 'Machine Learning',
    description: 'TensorFlow, PyTorch, Scikit-learn'
  },
  {
    icon: Terminal,
    name: 'Programming',
    description: 'JavaScript, Python, Java'
  },
  {
    icon: GitBranch,
    name: 'Version Control',
    description: 'Git, Branching, Merging'
  },
  {
    icon: Github,
    name: 'GitHub',
    description: 'Collaboration, CI/CD, Actions'
  }
];