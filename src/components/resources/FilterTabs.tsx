"use client"

import type { CategoryFilter } from "@/lib/types"

interface FilterTabsProps {
  activeFilter: CategoryFilter
  onFilterChange: (filter: CategoryFilter) => void
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-muted rounded-full w-fit">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'all'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('free-stuff')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'free-stuff'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Free Stuff
      </button>
      <button
        onClick={() => onFilterChange('fellowships')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'fellowships'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Fellowships
      </button>
    </div>
  )
}

export default FilterTabs 