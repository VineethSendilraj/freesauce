import { Button } from "@/components/ui/button"
import TagBadge from "@/components/common/TagBadge"
import type { Resource } from "@/lib/types"

interface ResourceListItemProps {
  resource: Resource
}

const ResourceListItem = ({ resource }: ResourceListItemProps) => {
  const handleApplyClick = () => {
    if (resource.link && resource.link !== '#') {
      window.open(resource.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="group bg-white border border-gray-200/60 hover:border-gray-300/80 hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden">
      <div className="p-5">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Resource (Logo & Name) */}
          <div className="col-span-3 flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-200/60">
              <img 
                src={resource.icon} 
                alt={`${resource.name} logo`}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-bold">
                {resource.name.charAt(0)}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 text-base leading-tight">
                {resource.name}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Tags */}
          <div className="col-span-3">
            <div className="flex flex-wrap gap-2">
              {resource.tags.slice(0, 3).map((tag, index) => (
                <TagBadge key={index} tag={tag} />
              ))}
              {resource.tags.length > 3 && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  +{resource.tags.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Value */}
          <div className="col-span-1 text-center">
            {resource.value && (
              <span className="text-sm font-semibold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg">
                {resource.value}
              </span>
            )}
          </div>

          {/* Apply Button */}
          <div className="col-span-1 flex justify-center">
            <Button 
              onClick={handleApplyClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceListItem 