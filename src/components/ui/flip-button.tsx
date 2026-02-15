"use client"

import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFlipState } from "@/hooks/use-flip-state"
import { cn } from "@/lib/utils"

interface FlipButtonProps {
  className?: string
}

export function FlipButton({ className }: FlipButtonProps) {
  const { isFlipped, toggleFlip, isLoading } = useFlipState()

  if (isLoading) {
    return null // Don't render until we know the flip state
  }

  return (
    <Button
      onClick={toggleFlip}
      variant="outline"
      size="default"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
        "bg-white/90 backdrop-blur-sm border-2 border-gray-200",
        "hover:bg-white hover:border-gray-300",
        "dark:bg-gray-900/90 dark:border-gray-700",
        "dark:hover:bg-gray-900 dark:hover:border-gray-600",
        className
      )}
      title={isFlipped ? "Flip back to normal view" : "Flip website upside down"}
      aria-label={isFlipped ? "Flip back to normal view" : "Flip website upside down"}
    >
      <RotateCcw
        className={cn(
          "h-5 w-5 transition-all duration-500",
          isFlipped ? "rotate-180 text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"
        )}
      />
    </Button>
  )
}