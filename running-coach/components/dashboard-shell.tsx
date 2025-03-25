import type React from "react"
import { cn } from "@/lib/utils"
import { StarsBackground } from "@/components/ui/stars-background"

interface DashboardShellProps {
  children: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <StarsBackground>
      <div className="flex min-h-screen flex-col text-white">
        <div className="container flex-1 items-start md:grid md:gap-6 lg:gap-10 py-8">
          <main className={cn("flex w-full flex-col overflow-hidden", className)}>{children}</main>
        </div>
      </div>
    </StarsBackground>
  )
}

