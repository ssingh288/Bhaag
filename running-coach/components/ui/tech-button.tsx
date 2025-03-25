"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TechButtonProps extends ButtonProps {
  glowColor?: string
  hoverGlowColor?: string
}

const TechButton = forwardRef<HTMLButtonElement, TechButtonProps>(
  (
    { className, glowColor = "rgba(0, 210, 100, 0.5)", hoverGlowColor = "rgba(0, 210, 100, 0.8)", children, ...props },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "border border-[rgba(0,210,100,0.3)] bg-black/50 backdrop-blur-sm",
          "hover:border-[rgba(0,210,100,0.6)] hover:bg-black/70",
          "hover:shadow-[0_0_10px_var(--glow-color)]",
          "active:scale-95",
          className,
        )}
        style={
          {
            "--glow-color": glowColor,
            "--hover-glow-color": hoverGlowColor,
          } as React.CSSProperties
        }
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    )
  },
)
TechButton.displayName = "TechButton"

export { TechButton }

