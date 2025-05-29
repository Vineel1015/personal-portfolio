'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Express', logo: '/logos/express.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Django', logo: '/logos/django.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
  { name: 'Redis', logo: '/logos/redis.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'CI/CD', logo: '/logos/cicd.svg' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="pixel-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 pixel-text-title">Skills & Expertise</h2>
          <motion.div 
            className="w-24 h-4 bg-[#00ff00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="bg-black/90 backdrop-blur-[2px] pixel-card p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <motion.div 
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-[#1a1a1a] pixel-button rounded-none"
              >
                <div className="relative w-16 h-16 mb-3">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain pixelated"
                    priority
                  />
                </div>
                <span className="text-white pixel-text text-sm text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 