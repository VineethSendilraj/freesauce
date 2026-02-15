"use client"

import { useFlipState } from "@/hooks/use-flip-state"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface FlipWrapperProps {
  children: React.ReactNode
}

export function FlipWrapper({ children }: FlipWrapperProps) {
  const { isFlipped, isLoading } = useFlipState()
  const [isFlipping, setIsFlipping] = useState(false)

  // Handle flip transition state
  useEffect(() => {
    if (!isLoading) {
      setIsFlipping(true)
      const timer = setTimeout(() => {
        setIsFlipping(false)
      }, 1000) // Match the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isFlipped, isLoading])

  // Don't apply flip classes until we've loaded the state
  if (isLoading) {
    return <div className="flip-container">{children}</div>
  }

  return (
    <div
      className={cn(
        "flip-container",
        isFlipped && "flipped",
        isFlipping && "flipping"
      )}
    >
      {children}
    </div>
  )
}