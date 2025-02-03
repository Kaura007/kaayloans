import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://heroic-dolphin-c18da2.netlify.app',
    githubUrl: 'https://github.com/example/project'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'APIs', 'Charts'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    id: 4,
    title: 'AI Image Generator',
    description: 'A sophisticated AI-powered image generation tool using deep learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    demoUrl: 'https://ai-image-generator.example.com',
    githubUrl: 'https://github.com/example/ai-image-generator'
  },
  {
    id: 5,
    title: 'Personal Finance Tracker',
    description: 'A comprehensive finance management application with expense tracking, budgeting, and financial insights',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://wpib7xb3jiwxg3rr.vercel.app/',
    githubUrl: 'https://github.com/abdulrahmankaura/personal-finance-tracker'
  }
];