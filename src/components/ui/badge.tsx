import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[0.8125rem] uppercase tracking-[0.12em] transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-rule bg-transparent text-muted-foreground",
        secondary: "border-transparent bg-surface text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "border-rule bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
