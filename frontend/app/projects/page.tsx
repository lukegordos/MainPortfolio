'use client'

import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { fetchProjects, type Project } from '@/lib/api'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const { data: projects, isLoading, error } = useQuery('projects', fetchProjects)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="text-center">Loading projects...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="text-center text-red-500">Error loading projects</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech) => {
                  // Emphasize CS/engineering skills
                  const csSkills = [
                    'Algorithm', 'Data Structure', 'Machine Learning', 'Database', 'API Integration', 'CRUD Operations',
                    'Component Libraries', 'UI/UX Design', 'Financial Reporting', 'Geospatial Analysis', 'WebSockets',
                    'Chart.js', 'Chart Components', 'Interactive Forms', 'Database Integration', 'Full Stack', 'Modern Technologies',
                    'Fitness Tracking', 'Community Features', 'Real-time', 'Compliance Tools', 'Admin Dashboard', 'Analytics Dashboard'
                  ];
                  const isCS = csSkills.some(cs => tech.toLowerCase().includes(cs.toLowerCase()));
                  return (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-xs ${isCS ? 'bg-primary text-primary-foreground font-semibold border border-primary' : 'bg-secondary text-secondary-foreground'}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                {project.live_url && (
                  <Link
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </Link>
                )}
                
                {project.github_url && (
                  <Link
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects && projects.length === 0 && (
        <div className="text-center text-muted-foreground">
          No projects found.
        </div>
      )}
    </div>
  )
}
