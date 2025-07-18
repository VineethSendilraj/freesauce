"use client"

import { useState, useMemo } from "react"
import ResourceCard from "./ResourceCard"
import ResourceListItem from "./ResourceListItem"
import FilterTabs from "./FilterTabs"
import SearchBar from "./SearchBar"
import ViewToggle from "./ViewToggle"
import { resources } from "@/data/resources"
import type { CategoryFilter as CategoryFilterType } from "@/lib/types"

const ResourceTable = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilterType>('all')
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [view, setView] = useState<'list' | 'grid'>('grid')

  const filteredResources = useMemo(() => {
    let filtered = resources

    // Filter by main category (All, Free Stuff, Fellowships)
    if (activeFilter !== 'all') {
      filtered = filtered.filter(resource => resource.category === activeFilter)
    }

    // Filter by search query (name, description, tags)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(resource => 
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => 
          tag.name.toLowerCase().includes(query) ||
          tag.category.toLowerCase().includes(query)
        )
      )
    }

    return filtered
  }, [activeFilter, searchQuery])

  const handleFilterChange = (filter: CategoryFilterType) => {
    setActiveFilter(filter)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="w-full space-y-8">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* View Toggle - Right Aligned */}
      <div className="flex justify-end">
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      {/* Table Header - List View Only */}
      {view === 'list' && (
        <div className="hidden lg:block">
          <div className="bg-white border border-gray-200/60 rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 text-sm font-semibold text-gray-800">
                Resource
              </div>
              <div className="col-span-4 text-sm font-semibold text-gray-800">
                Description
              </div>
              <div className="col-span-3 text-sm font-semibold text-gray-800">
                Tags
              </div>
              <div className="col-span-1 text-sm font-semibold text-gray-800 text-center">
                Value
              </div>
              <div className="col-span-1 text-sm font-semibold text-gray-800 text-center">
                Action
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found for this category.</p>
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredResources.map((resource) => (
            <ResourceListItem key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ResourceTable 