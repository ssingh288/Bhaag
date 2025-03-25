"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GradientBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function GradientBackground({ className, children }: GradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(74, 222, 128, 0.2)") // Green tint
    gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.2)") // Blue tint
    gradient.addColorStop(1, "rgba(139, 92, 246, 0.2)") // Purple tint

    const drawGradient = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGradient()
    }

    drawGradient()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 h-full w-full bg-background opacity-70"
        aria-hidden="true"
      />
      <div className="relative z-0">{children}</div>
    </div>
  )
}

