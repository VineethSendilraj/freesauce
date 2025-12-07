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
    <div className="group relative bg-card rounded-3xl border border-border hover:border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Header: Logo & Value */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center shadow-sm">
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
            <div className="hidden w-6 h-6 bg-muted-foreground/20 rounded-lg flex items-center justify-center text-muted-foreground text-xs font-bold">
              {resource.name.charAt(0)}
            </div>
          </div>

          {resource.value && (
            <div className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {resource.value}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-card-foreground leading-tight mb-2">
          {resource.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-xs">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <TagBadge key={index} tag={tag} className="text-xs" />
          ))}
          {resource.tags.length > 3 && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>

        {/* Apply Button */}
        <Button
          onClick={handleApplyClick}
          variant="default"
          size="sm"
          className="w-full"
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default ResourceCard 