import { Router } from 'express'
import { prisma } from '../index'
import { z } from 'zod'

const router = Router()

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    })
    res.json(skills)
  } catch (error) {
    console.error('Error fetching skills:', error)
    res.status(500).json({ message: 'Failed to fetch skills' })
  }
})

export default router
