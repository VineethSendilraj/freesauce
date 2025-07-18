import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TagBadge from "@/components/common/TagBadge"
import type { Resource } from "@/lib/types"

interface ResourceCardProps {
  resource: Resource
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const handleApplyClick = () => {
    if (resource.link && resource.link !== '#') {
      window.open(resource.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300/80 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Header: Logo, Name & Value */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={resource.icon} 
                alt={`${resource.name} logo`}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  // Fallback to a generic icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-bold">
                {resource.name.charAt(0)}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-lg leading-tight truncate">
                {resource.name}
              </h3>
            </div>
          </div>
          
          {resource.value && (
            <div className="text-right flex-shrink-0">
              <span className="text-lg font-semibold text-gray-900">
                {resource.value}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <TagBadge key={index} tag={tag} />
          ))}
        </div>

        {/* Apply Button */}
        <Button 
          onClick={handleApplyClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 w-full"
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default ResourceCard 