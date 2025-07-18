import { GraduationCap } from "lucide-react"

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-gray-800" />
              <span className="text-lg font-semibold text-gray-800">
                Build in College
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 