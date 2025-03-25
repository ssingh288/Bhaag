import { cn } from "@/lib/utils"

interface RunningIconProps {
  className?: string
  size?: number
  color?: string
}

export function RunningIcon({ className, size = 24, color = "#00d264" }: RunningIconProps) {
  return (
    <div className={cn("relative inline-block animate-run-cycle", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="12" cy="4" r="2.5" fill={color} />
        <path
          d="M16.5 6.5L13 8.5L15 13L12.5 18.5L9.5 20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 8.5L7.5 10L5.5 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 13L8 17.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

