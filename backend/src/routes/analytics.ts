import { Router } from 'express'
import { prisma } from '../index'
import { z } from 'zod'

const router = Router()

// Validation schema
const analyticsSchema = z.object({
  ip: z.string().optional(),
  userAgent: z.string().optional()
})

// Track analytics
router.post('/', async (req, res) => {
  try {
    const validatedData = analyticsSchema.parse(req.body)
    
    await prisma.analytics.create({
      data: {
        ip_address: validatedData.ip,
        user_agent: validatedData.userAgent
      }
    })

    res.status(200).json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: 'Validation error',
        errors: error.errors 
      })
    }
    
    console.error('Error tracking analytics:', error)
    res.status(500).json({ message: 'Failed to track analytics' })
  }
})

// Get analytics summary (optional admin endpoint)
router.get('/summary', async (req, res) => {
  try {
    const totalVisits = await prisma.analytics.count()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const todayVisits = await prisma.analytics.count({
      where: {
        visit_time: {
          gte: today
        }
      }
    })

    res.json({
      totalVisits,
      todayVisits
    })
  } catch (error) {
    console.error('Error fetching analytics summary:', error)
    res.status(500).json({ message: 'Failed to fetch analytics summary' })
  }
})

export default router
