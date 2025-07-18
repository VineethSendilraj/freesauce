"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

const SearchBar = ({ onSearch, placeholder = "Search for tools, APIs, credits..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTags, setSearchTags] = useState<string[]>([])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  const addSearchTag = (tag: string) => {
    if (!searchTags.includes(tag)) {
      const newTags = [...searchTags, tag]
      setSearchTags(newTags)
      onSearch(newTags.join(" "))
    }
  }

  const removeSearchTag = (tagToRemove: string) => {
    const newTags = searchTags.filter(tag => tag !== tagToRemove)
    setSearchTags(newTags)
    onSearch(newTags.join(" "))
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchTags([])
    onSearch("")
  }

  const popularSearches = [
    "AI Credits", 
    "Design Tools", 
    "API", 
    "Claude", 
    "Framer", 
    "GitHub Student Pack", 
    "Figma Education",
    "Fellowships",
    "Productivity",
    "Video Generation"
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative bg-white rounded-2xl border-2 border-gray-200 focus-within:border-blue-400 transition-colors duration-200 shadow-lg">
        <div className="flex items-center gap-4 p-4">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={searchTags.length > 0 ? "Add another search term..." : placeholder}
            className="flex-1 text-lg text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim()) {
                addSearchTag(searchQuery.trim())
                setSearchQuery("")
              }
            }}
          />
          
          {(searchQuery || searchTags.length > 0) && (
            <button
              onClick={clearSearch}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Active Search Tags */}
        {searchTags.length > 0 && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {searchTags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                  {tag}
                  <button
                    onClick={() => removeSearchTag(tag)}
                    className="ml-2 w-4 h-4 bg-blue-200 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <X className="w-3 h-3 text-blue-600" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {searchTags.length === 0 && !searchQuery && (
          <div className="px-4 pb-4">
            <div className="text-left text-gray-500 text-sm mb-3">Popular searches:</div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => addSearchTag(search)}
                  className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar 