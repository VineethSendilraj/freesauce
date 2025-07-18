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
    <Card className="w-full hover:shadow-lg transition-all duration-200 border-gray-200">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          {/* Resource Info */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="text-2xl flex-shrink-0">
              {resource.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 truncate">
                {resource.name}
              </h3>
            </div>
          </div>

          {/* Value */}
          <div className="lg:col-span-2">
            <span className="font-semibold text-gray-900">
              {resource.value || '—'}
            </span>
          </div>

          {/* Tags */}
          <div className="lg:col-span-4">
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag, index) => (
                <TagBadge key={index} tag={tag} />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Apply Button */}
          <div className="lg:col-span-1 flex justify-end">
            <Button 
              onClick={handleApplyClick}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 text-sm font-medium"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ResourceCard 