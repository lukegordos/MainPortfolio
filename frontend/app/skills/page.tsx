'use client'

import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { fetchSkills, type Skill } from '@/lib/api'

export default function SkillsPage() {
  const { data: skills, isLoading, error } = useQuery('skills', fetchSkills)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h1>
        <div className="text-center">Loading skills...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h1>
        <div className="text-center text-red-500">Error loading skills</div>
      </div>
    )
  }

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {}) || {}

  // Calculate max years for progress bar scaling
  const maxYears = Math.max(...(skills?.map(skill => skill.proficiency) || [0]))
  const getProgressPercentage = (years: number) => Math.min((years / maxYears) * 100, 100)

  const getColorByCategory = (category: string) => {
    const colors = {
      Frontend: 'from-blue-500 to-cyan-500',
      Backend: 'from-green-500 to-emerald-500',
      Database: 'from-purple-500 to-violet-500',
      Tools: 'from-orange-500 to-amber-500',
      DevOps: 'from-red-500 to-pink-500',
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills & Technologies
      </motion.h1>

      <motion.p 
        className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Here's an overview of the technologies and tools I work with, organized by category. 
        Each skill shows my years of experience and expertise level.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 + 0.3 }}
            className="bg-card p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className={`inline-block w-4 h-4 rounded mr-3 bg-gradient-to-r ${getColorByCategory(category)}`}></span>
              {category}
            </h2>
            
            <div className="space-y-4">
              {categorySkills
                .sort((a, b) => b.proficiency - a.proficiency)
                .map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.proficiency} {skill.proficiency === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorByCategory(category)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercentage(skill.proficiency)}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.7,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-16 text-center"
      >
        <div className="bg-card p-8 rounded-lg shadow-sm border max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground">
            I'm always eager to learn new technologies and improve my existing skills. 
            Currently exploring areas like machine learning, cloud architecture, and advanced React patterns. 
            I believe in staying current with industry trends and best practices.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
