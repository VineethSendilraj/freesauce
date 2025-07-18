"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CategoryFilter } from "@/lib/types"

interface FilterTabsProps {
  activeFilter: CategoryFilter
  onFilterChange: (filter: CategoryFilter) => void
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <Tabs value={activeFilter} onValueChange={(value) => onFilterChange(value as CategoryFilter)}>
      <TabsList className="grid w-full grid-cols-3 lg:w-fit">
        <TabsTrigger value="all" className="px-6">
          All
        </TabsTrigger>
        <TabsTrigger value="free-stuff" className="px-6">
          Free Stuff
        </TabsTrigger>
        <TabsTrigger value="fellowships" className="px-6">
          Fellowships
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default FilterTabs 