"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface StarsBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function StarsBackground({ className, children }: StarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Star class
    class Star {
      x: number
      y: number
      size: number
      speed: number
      color: string
      opacity: number
      pulse: number
      pulseSpeed: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = 0.5 + Math.random() * 2
        this.speed = 1 + Math.random() * 3

        // Create a color palette of blues and greens
        const colors = [
          [0, 210, 100], // Green
          [0, 180, 120], // Teal
          [0, 150, 255], // Blue
          [76, 201, 240], // Light blue
        ]

        const colorIndex = Math.floor(Math.random() * colors.length)
        const [r, g, b] = colors[colorIndex]

        this.color = `rgba(${r}, ${g}, ${b}, 1)`
        this.opacity = 0.1 + Math.random() * 0.9
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.02
      }

      update() {
        // Move star from left to right with a slight downward trajectory
        this.x += this.speed
        this.y += this.speed * 0.1

        // Pulse the opacity
        this.pulse += this.pulseSpeed
        this.opacity = 0.3 + Math.sin(this.pulse) * 0.3

        // Reset if off screen
        if (this.x > canvas.width + 20 || this.y > canvas.height + 20) {
          this.x = -20
          this.y = Math.random() * canvas.height * 0.8
        }
      }

      draw() {
        if (!ctx) return

        // Draw star glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)

        const colorWithOpacity = this.color.replace("1)", `${this.opacity})`)
        gradient.addColorStop(0, colorWithOpacity)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw star
        ctx.fillStyle = colorWithOpacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw a trail
        ctx.strokeStyle = colorWithOpacity.replace("1)", "0.2)")
        ctx.lineWidth = this.size / 2
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.speed * 4, this.y - this.speed * 0.4)
        ctx.stroke()
      }
    }

    // Stars array
    const stars: Star[] = []

    // Create stars
    const createStars = () => {
      stars.length = 0
      const starCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        stars.push(new Star(x, y))
      }
    }

    // Set canvas to full screen
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()
    }

    // Initialize
    handleResize()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a semi-transparent black for trail effect
      ctx.fillStyle = "rgba(10, 15, 20, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full bg-[#0a0f14]" aria-hidden="true" />
      <div className="relative z-0">{children}</div>
    </div>
  )
}

