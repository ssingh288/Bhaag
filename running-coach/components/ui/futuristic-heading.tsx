import { cn } from "@/lib/utils"
import type * as React from "react"

interface FuturisticHeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  glowColor?: string
}

export function FuturisticHeading({
  children,
  className,
  level = 2,
  glowColor = "rgba(0, 255, 140, 0.7)",
}: FuturisticHeadingProps) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Heading
      className={cn(
        "font-bold tracking-tight",
        "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300",
        "drop-shadow-[0_0_5px_var(--glow-color)]",
        className,
      )}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
    >
      {children}
    </Heading>
  )
}

