"use client"

import { useState } from "react"
import { TechButton } from "@/components/ui/tech-button"

export function StravaConnectButton() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    // In a real implementation, this would redirect to STRAVA OAuth flow
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    // In a real implementation, this would revoke the STRAVA access token
    setIsConnected(false)
  }

  if (isConnected) {
    return (
      <TechButton
        variant="outline"
        onClick={handleDisconnect}
        className="flex items-center gap-2 bg-black/30 backdrop-blur-md border-[#FC4C02]/30 text-white"
        glowColor="rgba(252, 76, 2, 0.3)"
      >
        <img src="/placeholder.svg?height=20&width=20" alt="STRAVA logo" className="h-5 w-5" />
        <span className="font-medium">Connected to STRAVA</span>
      </TechButton>
    )
  }

  return (
    <TechButton
      onClick={handleConnect}
      className="flex items-center gap-2 bg-[#FC4C02] text-white hover:bg-[#E34902] border-none"
      glowColor="rgba(252, 76, 2, 0.5)"
    >
      <img src="/placeholder.svg?height=20&width=20" alt="STRAVA logo" className="h-5 w-5" />
      <span className="font-medium">Connect with STRAVA</span>
    </TechButton>
  )
}

