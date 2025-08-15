import { Router } from 'express'
import { prisma } from '../index'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const router = Router()

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email').max(255),
  message: z.string().min(1, 'Message is required').max(5000)
})

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Submit contact form
router.post('/', async (req, res) => {
  try {
    // Validate input
    const validatedData = contactSchema.parse(req.body)
    
    // Store in database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message
      }
    })

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Portfolio Contact from ${validatedData.name}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Message: ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `
    })

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully',
      id: contactMessage.id 
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: 'Validation error',
        errors: error.errors 
      })
    }
    
    console.error('Error sending contact message:', error)
    res.status(500).json({ message: 'Failed to send message' })
  }
})

export default router
