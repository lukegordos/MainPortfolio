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

  // Group and classify skills
  const codingLanguages = skills?.filter(skill =>
    ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS', 'SQL'].includes(skill.name)
  ) || []
  const frontendLanguages = codingLanguages.filter(skill => ['JavaScript', 'TypeScript', 'HTML/CSS'].includes(skill.name))
  const backendLanguages = codingLanguages.filter(skill => ['Python', 'SQL', 'Java'].includes(skill.name))
  const frameworks = skills?.filter(skill =>
    ['React', 'Next.js', 'Express.js', 'Flutter', 'Tailwind CSS', 'Prisma', 'Flask', 'FastAPI'].includes(skill.name)
  ) || []
  const devTools = skills?.filter(skill =>
    ['Git', 'AWS', 'IBM Cloud', 'Excel', 'NOPCommerce', 'Data Analysis', 'E-commerce'].includes(skill.name)
  ) || []
  const otherSkills = skills?.filter(skill =>
    ![...codingLanguages, ...frameworks, ...devTools].map(s => s.id).includes(skill.id)
  ) || []

  const maxYears = Math.max(...(skills?.map(skill => skill.proficiency) || [0]))
  const getProgressPercentage = (years: number) => Math.min((years / maxYears) * 100, 100)

  const getColorByCategory = (category: string) => {
    const colors = {
      Frontend: 'from-blue-500 to-cyan-500',
      Backend: 'from-green-500 to-emerald-500',
      Framework: 'from-purple-500 to-violet-500',
      Tool: 'from-orange-500 to-amber-500',
      Other: 'from-gray-500 to-slate-500',
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500'
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Technical Skills
      </motion.h1>

      <motion.p
        className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        My technical skills are organized by category: coding languages, frameworks/technologies, and developer tools.
        Each skill shows my years of experience and expertise level.
      </motion.p>

      <div className="flex flex-col gap-8 w-full max-w-2xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card p-8 rounded-lg shadow-sm border w-full"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-4 h-4 rounded mr-3 bg-gradient-to-r from-blue-500 to-cyan-500"></span>
            Coding Languages
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Frontend</h3>
            <div className="space-y-4">
              {frontendLanguages.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
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
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${getProgressPercentage(skill.proficiency)}%` }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Backend</h3>
            <div className="space-y-4">
              {backendLanguages.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
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
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${getProgressPercentage(skill.proficiency)}%` }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card p-8 rounded-lg shadow-sm border w-full"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-4 h-4 rounded mr-3 bg-gradient-to-r from-purple-500 to-violet-500"></span>
            Frameworks & Technologies
          </h2>
          <div className="space-y-4">
            {frameworks.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
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
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgressPercentage(skill.proficiency)}%` }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-card p-8 rounded-lg shadow-sm border w-full"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="inline-block w-4 h-4 rounded mr-3 bg-gradient-to-r from-orange-500 to-amber-500"></span>
            Developer Tools
          </h2>
          <div className="space-y-4">
            {devTools.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
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
                    className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgressPercentage(skill.proficiency)}%` }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
