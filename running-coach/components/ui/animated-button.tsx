"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  glowColor?: string
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, glowColor = "rgba(74, 222, 128, 0.5)", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-95",
          "after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-100",
          "after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
          className,
        )}
        style={
          {
            "--glow-color": glowColor,
            boxShadow: `0 0 0 0 var(--glow-color)`,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </Button>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }

