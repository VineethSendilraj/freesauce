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
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter 