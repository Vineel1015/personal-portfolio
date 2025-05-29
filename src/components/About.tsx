'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="pixel-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 pixel-text">About Me</h2>
          <motion.div 
            className="w-24 h-4 bg-[#00ff00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pixel-card p-6 bg-black"
          >
            <p className="text-white pixel-text text-sm leading-relaxed">
              I'm a passionate full-stack developer with a love for creating pixel-perfect web experiences. 
              My journey in tech started with simple HTML pages and has evolved into building complex, 
              modern web applications.
            </p>
            <p className="text-white pixel-text text-sm leading-relaxed mt-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="pixel-card p-6 bg-black">
              <h3 className="text-[#ff00ff] pixel-text text-lg mb-4">Education</h3>
              <p className="text-white pixel-text text-sm">Bachelor's in Computer Science</p>
              <p className="text-[#00ff00] pixel-text text-sm">2022 - 2026</p>
            </div>

            <div className="pixel-card p-6 bg-black">
              <h3 className="text-[#ff00ff] pixel-text text-lg mb-4">Experience</h3>
              <p className="text-white pixel-text text-sm">Full Stack Developer | Data Analyst</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 