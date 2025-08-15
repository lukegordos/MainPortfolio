'use client'

import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { fetchWorkExperience, type WorkExperience } from '@/lib/api'
import { Calendar, MapPin } from 'lucide-react'

export default function WorkPage() {
  const { data: workExperience, isLoading, error } = useQuery('work', fetchWorkExperience)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>
        <div className="text-center">Loading work experience...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>
        <div className="text-center text-red-500">Error loading work experience</div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Work Experience
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {workExperience?.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="w-full"
            >
              {/* Content card */}
              <div className="w-full">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(work.start_date)} - {work.end_date ? formatDate(work.end_date) : 'Present'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{work.role}</h3>
                  <p className="text-primary font-medium mb-3">{work.company}</p>
                  <p className="text-muted-foreground mb-4">{work.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
