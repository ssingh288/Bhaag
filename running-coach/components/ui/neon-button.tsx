"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonProps {
  glowColor?: string
  hoverGlowColor?: string
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  (
    { className, glowColor = "rgba(0, 255, 140, 0.7)", hoverGlowColor = "rgba(0, 255, 140, 1)", children, ...props },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300 border-0",
          "before:absolute before:inset-0 before:z-[-1] before:bg-black/50 before:backdrop-blur-md",
          "after:absolute after:inset-0 after:z-[-2] after:opacity-70 after:transition-opacity hover:after:opacity-100",
          "hover:shadow-[0_0_15px_var(--glow-color),inset_0_0_10px_var(--glow-color)]",
          "active:scale-95",
          className,
        )}
        style={
          {
            "--glow-color": glowColor,
            "--hover-glow-color": hoverGlowColor,
            boxShadow: `0 0 5px var(--glow-color), inset 0 0 5px var(--glow-color)`,
          } as React.CSSProperties
        }
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    )
  },
)
NeonButton.displayName = "NeonButton"

export { NeonButton }

