import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface FuturisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  borderStyle?: "neon" | "holographic" | "minimal"
}

const FuturisticCard = forwardRef<HTMLDivElement, FuturisticCardProps>(
  ({ className, glowColor = "rgba(0, 255, 140, 0.5)", borderStyle = "neon", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg overflow-hidden transition-all duration-300",
          "backdrop-blur-md bg-black/40",
          borderStyle === "neon" && "border border-transparent",
          borderStyle === "holographic" &&
            "before:absolute before:inset-0 before:z-[-1] before:animate-pulse-slow before:bg-gradient-to-r before:from-[#00ff8c] before:via-[#00a1ff] before:to-[#8f00ff] before:opacity-30",
          borderStyle === "minimal" && "border border-white/10",
          "hover:shadow-[0_0_15px_var(--glow-color)]",
          className,
        )}
        style={
          {
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
        {...props}
      >
        {borderStyle === "neon" && (
          <div
            className="absolute inset-0 rounded-lg border border-[var(--glow-color)] opacity-70 z-[-1]"
            style={{ boxShadow: `inset 0 0 10px var(--glow-color), 0 0 10px var(--glow-color)` }}
          />
        )}
        {children}
      </div>
    )
  },
)
FuturisticCard.displayName = "FuturisticCard"

export { FuturisticCard }

