"use client"

import { List, Grid3X3 } from "lucide-react"

interface ViewToggleProps {
  view: 'list' | 'grid'
  onViewChange: (view: 'list' | 'grid') => void
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-md transition-all duration-200 ${
          view === 'list'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        title="List View"
      >
        <List className="h-4 w-4" />
      </button>
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-md transition-all duration-200 ${
          view === 'grid'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        title="Grid View"
      >
        <Grid3X3 className="h-4 w-4" />
      </button>
    </div>
  )
}

export default ViewToggle 