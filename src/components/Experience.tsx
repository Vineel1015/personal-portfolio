'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'RgTech Consulting',
    period: '2022 - Present',
    description: 'Development of enterprise web applications using modern technologies.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'PIN Technologies',
    period: '2020 - 2022',
    description: 'Automated financial processes for a non-profit organization.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'AWS']
  },
  {
    title: 'Lead Teaching Assistant',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Managed a team of teaching assistants and provided support to students in the program.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="pixel-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 pixel-text">Work Experience</h2>
          <motion.div 
            className="w-24 h-4 bg-[#00ff00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pixel-card bg-black p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-[#ff00ff] pixel-text text-lg">{experience.title}</h3>
                  <p className="text-white pixel-text text-sm">{experience.company}</p>
                </div>
                <p className="text-[#00ff00] pixel-text text-sm mt-2 md:mt-0">{experience.period}</p>
              </div>
              <p className="text-white pixel-text text-sm mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#333333] text-[#00ff00] pixel-text text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 