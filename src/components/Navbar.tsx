'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'about', icon: UserIcon },
    { name: 'skills', icon: CodeBracketIcon },
    { name: 'projects', icon: BriefcaseIcon },
    { name: 'experience', icon: AcademicCapIcon },
    { name: 'contact', icon: EnvelopeIcon }
  ]

  return (
    <motion.div
      className="fixed left-0 top-0 h-full z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ width: '40px' }}
      animate={{ width: isHovered ? '280px' : '40px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        className={`h-full bg-black/90 backdrop-blur-[2px] pixel-card flex flex-col items-center py-8 ${
          isScrolled ? 'border-r-4 border-white' : ''
        }`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/Home Link */}
        <motion.a
          href="#home"
          className="text-[#00ff00] pixel-text-title text-lg mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isHovered ? 'YourName' : 'YN'}
        </motion.a>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 w-full px-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.name}`}
              className="text-white pixel-text hover:text-[#00ff00] transition-colors flex items-center"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-8 h-8 flex items-center justify-center bg-[#333333] pixel-button mr-4">
                <item.icon className="w-5 h-5" />
              </span>
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="text-base"
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>

        {/* Social Links - Now at the bottom */}
        <div className="mt-auto w-full px-4 pb-6">
          <div className="border-t-4 border-white/20 pt-6">
            <div className="flex flex-col space-y-3">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button bg-[#333333] text-white flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-full px-2 py-2">
                  <CommandLineIcon className="w-5 h-5 flex-shrink-0" />
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2 text-sm whitespace-nowrap"
                      >
                        GitHub
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button bg-[#333333] text-white flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-full px-2 py-2">
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 flex-shrink-0" />
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2 text-sm whitespace-nowrap"
                      >
                        LinkedIn
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar 