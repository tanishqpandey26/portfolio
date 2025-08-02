"use client"

import { useEffect, useState } from "react"
import { Users, TrendingUp, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisitorsCount() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem('visitorCount')
    const currentCount = storedCount ? parseInt(storedCount) : 0
    
    // Increment count for new visit
    const newCount = currentCount + 1
    localStorage.setItem('visitorCount', newCount.toString())
    
    // Animate the count up
    const animateCount = () => {
      let start = 0
      const increment = newCount / 50 // Smooth animation
      const timer = setInterval(() => {
        start += increment
        if (start >= newCount) {
          setVisitorCount(newCount)
          setIsLoading(false)
          clearInterval(timer)
        } else {
          setVisitorCount(Math.floor(start))
        }
      }, 20)
    }

    animateCount()
  }, [])

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-primary">
            <Eye className="h-6 w-6" />
          </div>
          <CardTitle>Website Visitors</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Total Visits
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl sm:text-4xl font-bold text-foreground">
              {isLoading ? (
                <span className="inline-block w-16 h-8 bg-gradient-to-r from-primary/20 to-primary/40 rounded animate-pulse"></span>
              ) : (
                visitorCount.toLocaleString()
              )}
            </span>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Thanks for visiting! 🚀
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 