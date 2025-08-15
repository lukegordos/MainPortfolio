'use client'

import { useEffect } from 'react'
import { trackAnalytics } from '@/lib/api'

export function AnalyticsTracker() {
  useEffect(() => {
    const track = async () => {
      try {
        // Get user's IP and user agent
        const response = await fetch('https://api.ipify.org?format=json')
        const { ip } = await response.json()
        const userAgent = navigator.userAgent

        await trackAnalytics({ ip, userAgent })
      } catch (error) {
        console.error('Failed to track analytics:', error)
      }
    }

    track()
  }, [])

  return null
}
