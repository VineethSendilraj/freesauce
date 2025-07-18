"use client"

import type { CategoryFilter } from "@/lib/types"

interface FilterTabsProps {
  activeFilter: CategoryFilter
  onFilterChange: (filter: CategoryFilter) => void
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full w-fit">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'all'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('free-stuff')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'free-stuff'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Free Stuff
      </button>
      <button
        onClick={() => onFilterChange('fellowships')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'fellowships'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Fellowships
      </button>
    </div>
  )
}

export default FilterTabs 