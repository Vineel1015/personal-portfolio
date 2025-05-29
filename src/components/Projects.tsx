'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Goal Tracker',
    description: 'A full-stack web application built with Next.js and Node.js',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Vineel1015/Goal-Tracker',
    live: 'https://goal-tracker-app-vineel.netlify.app/'
  },
  {
    title: 'KikNic',
    description: 'A real-time tracker for nicotine addiction',
    tags: ['React', 'HealthKit', 'Python'],
    github: 'https://github.com/jivi3/healthhacks2024-ui',
    live: 'https://kiknic.netlify.app/'
  },
  {
    title: 'Project 3',
    description: 'An e-commerce platform with payment integration',
    tags: ['React', 'Stripe', 'Firebase'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="pixel-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 pixel-text-title">My Projects</h2>
          <motion.div 
            className="w-24 h-4 bg-[#00ff00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pixel-card bg-black/90 backdrop-blur-[2px] p-6"
            >
              <h3 className="text-[#ff00ff] pixel-text-title text-lg mb-3">{project.title}</h3>
              <p className="text-white pixel-text text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#00ff00] pixel-text text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-[#1a1a1a] text-white flex items-center space-x-2 px-4 py-2"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  <span className="pixel-text text-xs">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-[#1a1a1a] text-white flex items-center space-x-2 px-4 py-2"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="pixel-text text-xs">Live</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 