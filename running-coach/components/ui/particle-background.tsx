"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

interface ParticleBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function ParticleBackground({ className, children }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Create particles
    const createParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor(window.innerWidth / 10) // Responsive particle count

      const neonColors = [
        "rgba(0, 255, 140, 0.8)", // Neon green
        "rgba(0, 200, 255, 0.8)", // Neon blue
        "rgba(255, 0, 140, 0.8)", // Neon pink
        "rgba(140, 0, 255, 0.8)", // Neon purple
      ]

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: neonColors[Math.floor(Math.random() * neonColors.length)],
          alpha: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a semi-transparent black for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 140, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })

        // Interact with mouse
        const dx = particle.x - mouseRef.current.x
        const dy = particle.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - distance) / 1500
          particle.speedX -= Math.cos(angle) * force
          particle.speedY -= Math.sin(angle) * force
        }

        // Add some randomness to movement
        particle.speedX += (Math.random() - 0.5) * 0.01
        particle.speedY += (Math.random() - 0.5) * 0.01

        // Limit speed
        const maxSpeed = 0.5
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed
          particle.speedY = (particle.speedY / speed) * maxSpeed
        }
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full bg-black" aria-hidden="true" />
      <div className="relative z-0">{children}</div>
    </div>
  )
}

