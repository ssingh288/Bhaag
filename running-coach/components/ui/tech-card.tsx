import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface TechCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  borderStyle?: "accent" | "minimal" | "none"
}

const TechCard = forwardRef<HTMLDivElement, TechCardProps>(
  ({ className, glowColor = "rgba(0, 210, 100, 0.3)", borderStyle = "accent", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg overflow-hidden transition-all duration-300",
          "backdrop-blur-md bg-black/40",
          borderStyle === "accent" && "border border-[rgba(0,210,100,0.3)]",
          borderStyle === "minimal" && "border border-white/10",
          "hover:shadow-[0_0_10px_var(--glow-color)]",
          className,
        )}
        style={
          {
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    )
  },
)
TechCard.displayName = "TechCard"

export { TechCard }

