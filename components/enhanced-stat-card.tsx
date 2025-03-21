"use client"

import React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnhancedStatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
  trend?: string
  trendUp?: boolean
}

export function EnhancedStatCard({
  title,
  value,
  icon,
  description,
  trend,
  trendUp
}: EnhancedStatCardProps) {
  return (
    <div className="border rounded-lg p-4 transition-all hover:shadow-md">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium">{title}</div>
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
      
      {trend && (
        <div className={cn(
          "flex items-center mt-2 text-xs font-medium",
          trendUp ? "text-green-600" : trendUp === false ? "text-red-600" : "text-muted-foreground"
        )}>
          {trendUp !== undefined && (
            trendUp ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />
          )}
          <span>{trend}</span>
        </div>
      )}
    </div>
  )
} 