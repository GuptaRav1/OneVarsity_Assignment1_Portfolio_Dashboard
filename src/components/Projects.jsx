// src/components/Projects.jsx

import React from 'react'
import Card from './Card'
import Button from './Button'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with the MERN stack, featuring product listings, a shopping cart, and a secure checkout process with Stripe integration.',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'A responsive real-time chat application using Socket.IO for instant messaging, with support for multiple rooms and user authentication.',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=400&fit=crop',
    techStack: ['React', 'Socket.IO', 'Tailwind CSS', 'Node.js', 'Express'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'A collaborative task management tool inspired by Trello, allowing users to create boards, lists, and cards with drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop',
    techStack: ['React', 'Redux Toolkit', 'React-DnD', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
  },
   {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on clean design, responsiveness, and performance.',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=400&fit=crop',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveLink: '#',
    repoLink: '#',
  }
]

const Projects = () => {
  return (
    <div className="space-y-6 p-6 mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} padding="none" hover className="flex flex-col">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
                <Button variant="primary" className="w-full">
                  Live Demo
                </Button>
                <Button variant="outline" className="w-full">
                  GitHub
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects