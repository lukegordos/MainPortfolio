import { Router } from 'express'
import { prisma } from '../index'

const router = Router()

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: 'desc'
      }
    })
    
    // Parse tech_stack from JSON string to array
    const formattedProjects = projects.map(project => ({
      ...project,
      tech_stack: JSON.parse(project.tech_stack as string)
    }))
    
    res.json(formattedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ message: 'Failed to fetch projects' })
  }
})

export default router
