import { Badge } from "@/components/ui/badge"
import type { SkillStatus } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SkillBadge({
  name,
  status,
}: {
  name: string
  status?: SkillStatus
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto gap-1.5 rounded-full px-3 py-1 text-sm",
        status === "developing" && "border-dashed",
      )}
    >
      {name}
      {status === "developing" && (
        <span className="text-xs font-normal text-muted-foreground">
          · Learning
        </span>
      )}
    </Badge>
  )
}
