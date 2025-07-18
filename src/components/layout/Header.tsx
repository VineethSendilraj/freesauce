import { GraduationCap } from "lucide-react"

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold text-gray-900">
                FreeSauce
              </span>
            </div>
          </div>

          {/* Navigation - Pill Style */}
          <nav className="hidden md:flex">
            <div className="bg-gray-100/80 rounded-full p-1">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200 font-medium px-4 py-2 rounded-full"
              >
                About
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 