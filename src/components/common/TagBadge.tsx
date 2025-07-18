import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Tag } from "@/lib/types"

interface TagBadgeProps {
  tag: Tag
  className?: string
}

const TagBadge = ({ tag, className }: TagBadgeProps) => {
  const getTagStyles = (color: Tag['color']) => {
    switch (color) {
      case 'yellow':
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case 'blue':
        return "bg-blue-100 text-blue-800 border-blue-200"
      case 'purple':
        return "bg-purple-100 text-purple-800 border-purple-200"
      case 'green':
        return "bg-green-100 text-green-800 border-green-200"
      case 'orange':
        return "bg-orange-100 text-orange-800 border-orange-200"
      case 'red':
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "text-xs font-medium px-2 py-1 border",
        getTagStyles(tag.color),
        className
      )}
    >
      {tag.name}
    </Badge>
  )
}

export default TagBadge 