"use client"

import { GraduationCap, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

const Header = () => {
  const handleSubmitResource = () => {
    // Replace with actual Google Form URL
    window.open('https://forms.gle/fLe5ZLhi9ihfx27t5', '_blank', 'noopener,noreferrer')
  }

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-base font-semibold text-foreground">
              FreeSauce
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>

            <ModeToggle />

            <Button
              onClick={handleSubmitResource}
              variant="default"
              size="sm"
            >
              <Plus className="h-3 w-3" />
              Submit Resource
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 