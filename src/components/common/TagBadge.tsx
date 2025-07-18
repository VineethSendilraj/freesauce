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
        return "bg-amber-50 text-amber-700 border-amber-200/50"
      case 'blue':
        return "bg-blue-50 text-blue-700 border-blue-200/50"
      case 'purple':
        return "bg-purple-50 text-purple-700 border-purple-200/50"
      case 'green':
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50"
      case 'orange':
        return "bg-orange-50 text-orange-700 border-orange-200/50"
      case 'red':
        return "bg-red-50 text-red-700 border-red-200/50"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200/50"
    }
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
        getTagStyles(tag.color),
        className
      )}
    >
      {tag.name}
    </span>
  )
}

export default TagBadge 