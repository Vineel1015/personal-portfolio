'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="pixel-bg absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 pixel-text-title">Get In Touch</h2>
          <motion.div 
            className="w-24 h-4 bg-[#00ff00] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="pixel-card bg-black p-6">
              <h3 className="text-[#ff00ff] pixel-text text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-[#00ff00]" />
                  <a href="mailto:vineelnadakuditi@gmail.com" className="text-white pixel-text hover:text-[#00ff00]">
                  vineelnadakuditi@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="w-6 h-6 text-[#00ff00]" />
                  <span className="text-white pixel-text">New York City, USA</span>
                </div>
              </div>
            </div>

            <div className="pixel-card bg-black p-6">
              <h3 className="text-[#ff00ff] pixel-text text-lg mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Vineel1015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-[#333333] text-white px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vineel-nadakuditi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-[#333333] text-white px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pixel-card bg-black p-6"
          >
            <h3 className="text-[#ff00ff] pixel-text text-lg mb-4">Send Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#333333] text-white pixel-text p-3 border-4 border-white focus:border-[#00ff00] outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#333333] text-white pixel-text p-3 border-4 border-white focus:border-[#00ff00] outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-[#333333] text-white pixel-text p-3 border-4 border-white focus:border-[#00ff00] outline-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full pixel-button bg-[#00ff00] text-black px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 