'use client'

import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { fetchSkills, type Skill } from '@/lib/api'

export function SkillsSection() {
  const { data: skills, isLoading, error } = useQuery('skills', fetchSkills)

  if (isLoading) {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="text-center">Loading skills...</div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="text-center text-red-500">Error loading skills</div>
      </section>
    )
  }

  const skillsByCategory = skills?.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {}) || {}

  return (
    <section className="py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="space-y-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) + 0.3, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
