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
    <div className="group bg-card border border-border hover:border-border hover:shadow-sm transition-all duration-200 rounded-lg overflow-hidden">
      <div className="p-3">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Resource (Logo & Name) */}
          <div className="col-span-3 flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 flex-shrink-0 rounded-md overflow-hidden bg-muted flex items-center justify-center border border-border">
              <img 
                src={resource.icon} 
                alt={`${resource.name} logo`}
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-5 h-5 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs font-bold">
                {resource.name.charAt(0)}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-card-foreground text-sm leading-tight">
                {resource.name}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
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
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  +{resource.tags.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Value */}
          <div className="col-span-1 text-center">
            {resource.value && (
              <span className="text-sm font-semibold text-foreground bg-muted px-3 py-1.5 rounded-lg">
                {resource.value}
              </span>
            )}
          </div>

          {/* Apply Button */}
          <div className="col-span-1 flex justify-center">
            <Button
              onClick={handleApplyClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
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