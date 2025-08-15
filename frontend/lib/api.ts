import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface Skill {
  id: number
  name: string
  category: string
  proficiency: number
}

export interface WorkExperience {
  id: number
  role: string
  company: string
  start_date: string
  end_date?: string
  description: string
  tech_stack: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  tech_stack: string[]
  live_url?: string
  github_url?: string
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export interface AnalyticsData {
  ip: string
  userAgent: string
}

// API functions
export const fetchSkills = async (): Promise<Skill[]> => {
  const response = await api.get('/skills')
  return response.data
}

export const fetchWorkExperience = async (): Promise<WorkExperience[]> => {
  const response = await api.get('/work')
  return response.data
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get('/projects')
  return response.data
}

export const submitContactForm = async (data: ContactMessage): Promise<void> => {
  await api.post('/contact', data)
}

export const trackAnalytics = async (data: AnalyticsData): Promise<void> => {
  await api.post('/analytics', data)
}

export default api
