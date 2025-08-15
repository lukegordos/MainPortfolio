'use client'

import { motion } from 'framer-motion'
import { AboutSection } from '@/components/about-section'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <section className="text-center py-20">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Luke Gordos
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Computer Engineering & AI
          </motion.p>
  </section>
        <div className="flex justify-center" style={{marginTop: 0, marginBottom: 0}}>
          <a
            href="/contact"
            className="flex flex-col items-center justify-center px-8 py-5 bg-[#0a0d16] border border-white/10 rounded-lg shadow-sm hover:bg-[#181c25] transition-colors duration-150 text-white text-lg font-semibold text-center m-0"
            style={{ minWidth: 320, maxWidth: 400, marginTop: 0, marginBottom: 0 }}
          >
            <span className="font-semibold text-white text-lg leading-tight">Contact Me</span>
          </a>
        </div>

        <AboutSection />
      </motion.div>
    </div>
  )
}
