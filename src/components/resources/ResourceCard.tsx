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
    <div className="group relative bg-gradient-to-br from-white to-gray-50/30 rounded-3xl border border-gray-200/40 hover:border-gray-300/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Header: Logo & Value */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200/50 border border-gray-200/60 flex items-center justify-center shadow-sm">
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
            <div className="hidden w-6 h-6 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-xs font-bold">
              {resource.name.charAt(0)}
            </div>
          </div>
          
          {resource.value && (
            <div className="px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
              {resource.value}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-gray-900 leading-tight mb-2">
          {resource.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 flex-1 text-xs">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <TagBadge key={index} tag={tag} className="text-xs" />
          ))}
          {resource.tags.length > 3 && (
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>

        {/* Apply Button */}
        <Button 
          onClick={handleApplyClick}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 w-full shadow-lg hover:shadow-xl"
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default ResourceCard 