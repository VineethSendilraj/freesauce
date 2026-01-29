"use client"

import { List, Grid3X3 } from "lucide-react"

interface ViewToggleProps {
  view: 'list' | 'grid'
  onViewChange: (view: 'list' | 'grid') => void
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-md transition-all duration-200 ${
          view === 'list'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="List View"
      >
        <List className="h-4 w-4" />
      </button>
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-md transition-all duration-200 ${
          view === 'grid'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Grid View"
      >
        <Grid3X3 className="h-4 w-4" />
      </button>
    </div>
  )
}

export default ViewToggle 