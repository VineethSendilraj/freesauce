"use client"

import { useState, useMemo } from "react"
import ResourceCard from "./ResourceCard"
import FilterTabs from "./FilterTabs"
import { resources } from "@/data/resources"
import type { CategoryFilter } from "@/lib/types"

const ResourceTable = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')

  const filteredResources = useMemo(() => {
    if (activeFilter === 'all') {
      return resources
    }
    return resources.filter(resource => resource.category === activeFilter)
  }, [activeFilter])

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter)
  }

  return (
    <div className="w-full space-y-8">
      {/* Filter Tabs */}
      <div className="flex justify-start">
        <FilterTabs 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
      </div>

      {/* Table Header - Desktop Only */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-6 px-6 py-4 border border-gray-200 bg-gray-50/50 rounded-lg mb-4">
          <div className="col-span-3 text-sm font-semibold text-gray-700">
            Resource
          </div>
          <div className="col-span-2 text-sm font-semibold text-gray-700">
            Value
          </div>
          <div className="col-span-4 text-sm font-semibold text-gray-700">
            Tags
          </div>
          <div className="col-span-2 text-sm font-semibold text-gray-700">
            Description
          </div>
          <div className="col-span-1 text-sm font-semibold text-gray-700 text-right">
            Action
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No resources found for this category.</p>
          </div>
        ) : (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        )}
      </div>
    </div>
  )
}

export default ResourceTable 