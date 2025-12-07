"use client"

import { useState } from "react"

interface CategoryFilterProps {
  onCategoryFilter: (category: string | null) => void
}

const CategoryFilter = ({ onCategoryFilter }: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    "All Categories",
    "API Credits", 
    "AI", 
    "Design", 
    "Productivity", 
    "Web Development", 
    "Web Infrastructure", 
    "Startups", 
    "Video Generation", 
    "Video Creation"
  ]

  const handleCategoryChange = (category: string) => {
    const actualCategory = category === "All Categories" ? null : category
    setSelectedCategory(actualCategory)
    onCategoryFilter(actualCategory)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            (category === "All Categories" && selectedCategory === null) ||
            (category === selectedCategory)
              ? 'bg-blue-500 text-white shadow-sm'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter 