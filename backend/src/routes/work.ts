import { Router } from 'express'
import { prisma } from '../index'

const router = Router()

// Get all work experience
router.get('/', async (req, res) => {
  try {
    const workExperience = await prisma.workExperience.findMany({
      orderBy: {
        start_date: 'desc'
      }
    })
    
    // Parse tech_stack from JSON string to array
    const formattedWorkExperience = workExperience.map(work => ({
      ...work,
      tech_stack: JSON.parse(work.tech_stack as string)
    }))
    
    res.json(formattedWorkExperience)
  } catch (error) {
    console.error('Error fetching work experience:', error)
    res.status(500).json({ message: 'Failed to fetch work experience' })
  }
})

export default router
