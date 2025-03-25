"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface RunningBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function RunningBackground({ className, children }: RunningBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Atomic Runner class
    class AtomicRunner {
      x: number
      y: number
      size: number
      speed: number
      color: string
      runPhase: number
      runSpeed: number
      orbitParticles: { angle: number; distance: number; size: number; speed: number; color: string }[]

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = 2 + Math.random() * 1.5
        this.speed = 0.5 + Math.random() * 1
        this.color = `rgba(0, 210, 255, ${0.7 + Math.random() * 0.3})`
        this.runPhase = Math.random() * Math.PI * 2
        this.runSpeed = 0.1 + Math.random() * 0.05

        // Create orbiting particles
        this.orbitParticles = []
        const particleCount = 2 + Math.floor(Math.random() * 3)

        for (let i = 0; i < particleCount; i++) {
          this.orbitParticles.push({
            angle: Math.random() * Math.PI * 2,
            distance: this.size * (2 + Math.random() * 1),
            size: 0.5 + Math.random() * 0.5,
            speed: 0.02 + Math.random() * 0.03,
            color: `rgba(0, ${150 + Math.random() * 105}, ${200 + Math.random() * 55}, ${0.6 + Math.random() * 0.4})`,
          })
        }
      }

      update() {
        // Move runner from left to right
        this.x += this.speed

        // Update running animation phase
        this.runPhase += this.runSpeed

        // Update orbiting particles
        this.orbitParticles.forEach((particle) => {
          particle.angle += particle.speed
        })

        // Reset if off right edge
        if (this.x > canvas.width + 20) {
          this.x = -20
          this.y = 50 + Math.random() * (canvas.height - 100)
        }
      }

      draw() {
        if (!ctx) return

        // Draw orbiting particles
        this.orbitParticles.forEach((particle) => {
          const particleX = this.x + Math.cos(particle.angle) * particle.distance
          const particleY = this.y + Math.sin(particle.angle) * particle.distance

          // Draw particle glow
          const gradient = ctx.createRadialGradient(particleX, particleY, 0, particleX, particleY, particle.size * 3)
          gradient.addColorStop(0, particle.color)
          gradient.addColorStop(1, "rgba(0,0,0,0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particleX, particleY, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()

          // Draw particle
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particleX, particleY, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Draw connection to human
          ctx.strokeStyle = `rgba(0, 210, 255, 0.2)`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(particleX, particleY)
          ctx.stroke()
        })

        // Draw human silhouette
        ctx.fillStyle = this.color

        // Calculate leg positions based on run phase
        const legSwing = Math.sin(this.runPhase)
        const leftLegX = -this.size * 0.5
        const rightLegX = this.size * 0.5
        const leftLegY = this.size * (1 + legSwing * 0.7)
        const rightLegY = this.size * (1 - legSwing * 0.7)

        // Calculate arm positions based on run phase (opposite to legs)
        const armSwing = -legSwing
        const leftArmX = -this.size * 0.8
        const rightArmX = this.size * 0.8
        const leftArmY = -this.size * 0.2 + armSwing * this.size * 0.5
        const rightArmY = -this.size * 0.2 - armSwing * this.size * 0.5

        // Draw head
        ctx.beginPath()
        ctx.arc(0, -this.size * 0.8, this.size * 0.4, 0, Math.PI * 2)
        ctx.fill()

        ctx.save()
        ctx.translate(this.x, this.y)

        // Draw body
        ctx.beginPath()
        ctx.moveTo(0, -this.size * 0.4)
        ctx.lineTo(0, this.size * 0.5)
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.size * 0.4
        ctx.stroke()

        // Draw legs
        ctx.lineWidth = this.size * 0.3

        // Left leg
        ctx.beginPath()
        ctx.moveTo(0, this.size * 0.3)
        ctx.lineTo(leftLegX, leftLegY)
        ctx.stroke()

        // Right leg
        ctx.beginPath()
        ctx.moveTo(0, this.size * 0.3)
        ctx.lineTo(rightLegX, rightLegY)
        ctx.stroke()

        // Draw arms
        ctx.lineWidth = this.size * 0.25

        // Left arm
        ctx.beginPath()
        ctx.moveTo(0, -this.size * 0.2)
        ctx.lineTo(leftArmX, leftArmY)
        ctx.stroke()

        // Right arm
        ctx.beginPath()
        ctx.moveTo(0, -this.size * 0.2)
        ctx.lineTo(rightArmX, rightArmY)
        ctx.stroke()

        ctx.restore()

        // Draw glow around human
        const humanGlow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
        humanGlow.addColorStop(0, `rgba(0, 210, 255, 0.1)`)
        humanGlow.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = humanGlow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Circuit grid lines
    const gridLines: { x: number; y: number; length: number; angle: number; speed: number; color: string }[] = []

    // Create horizontal and vertical grid lines
    const createGrid = () => {
      gridLines.length = 0
      const gridSize = 100

      for (let i = 0; i < canvas.width / gridSize; i++) {
        gridLines.push({
          x: i * gridSize,
          y: 0,
          length: canvas.height,
          angle: Math.PI / 2, // vertical
          speed: 0.1 + Math.random() * 0.1,
          color: `rgba(0, 210, 255, ${0.03 + Math.random() * 0.03})`,
        })
      }

      for (let i = 0; i < canvas.height / gridSize; i++) {
        gridLines.push({
          x: 0,
          y: i * gridSize,
          length: canvas.width,
          angle: 0, // horizontal
          speed: 0.1 + Math.random() * 0.1,
          color: `rgba(0, 210, 255, ${0.03 + Math.random() * 0.03})`,
        })
      }
    }

    // Atomic Runners
    const runners: AtomicRunner[] = []

    // Define createRunners function before it's used in handleResize
    const createRunners = () => {
      runners.length = 0
      const runnerCount = Math.min(30, Math.floor((canvas.width * canvas.height) / 30000))

      for (let i = 0; i < runnerCount; i++) {
        const x = Math.random() * canvas.width
        const y = 50 + Math.random() * (canvas.height - 100)
        runners.push(new AtomicRunner(x, y))
      }
    }

    // Set canvas to full screen
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createGrid() // Recreate grid when resizing
      createRunners() // Recreate runners when resizing
    }

    // Initialize
    handleResize()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a semi-transparent black for trail effect
      ctx.fillStyle = "rgba(10, 15, 20, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      gridLines.forEach((line) => {
        if (line.angle === 0) {
          // Horizontal lines
          line.y += line.speed
          if (line.y > canvas.height) {
            line.y = 0
          }
        } else {
          // Vertical lines
          line.x += line.speed
          if (line.x > canvas.width) {
            line.x = 0
          }
        }

        ctx.beginPath()
        ctx.strokeStyle = line.color
        ctx.lineWidth = 1

        if (line.angle === 0) {
          ctx.moveTo(0, line.y)
          ctx.lineTo(line.length, line.y)
        } else {
          ctx.moveTo(line.x, 0)
          ctx.lineTo(line.x, line.length)
        }

        ctx.stroke()
      })

      // Update and draw runners
      runners.forEach((runner) => {
        runner.update()
        runner.draw()
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

