"use client"

import { GraduationCap, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const handleSubmitResource = () => {
    // Replace with actual Google Form URL
    window.open('https://forms.gle/fLe5ZLhi9ihfx27t5', '_blank', 'noopener,noreferrer')
  }

  return (
    <header className="w-full bg-white border-b border-gray-200/40 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-500" />
            <span className="text-base font-semibold text-gray-900">
              FreeSauce
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </a>
            
            <Button
              onClick={handleSubmitResource}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center gap-1.5"
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