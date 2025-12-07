"use client"

import type { CategoryFilter } from "@/lib/types"

interface FilterTabsProps {
  activeFilter: CategoryFilter
  onFilterChange: (filter: CategoryFilter) => void
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-full w-fit">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'all'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('free-stuff')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'free-stuff'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
      >
        Free Stuff
      </button>
      <button
        onClick={() => onFilterChange('fellowships')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          activeFilter === 'fellowships'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
      >
        Fellowships
      </button>
    </div>
  )
}

export default FilterTabs 