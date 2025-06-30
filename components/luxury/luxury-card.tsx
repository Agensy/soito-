"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface LuxuryCardProps {
  title: string
  description: string
  icon: ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  variant?: "featured" | "minimal"
}

export function LuxuryCard({ title, description, icon, action, variant = "featured" }: LuxuryCardProps) {
  if (variant === "minimal") {
    return (
      <Card className="luxury-card group hover:scale-105 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] group-hover:from-[#BFA86B]/30 group-hover:to-[#BFA86B]/20 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm font-light opacity-80">{description}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="luxury-card group hover:scale-105 transition-all duration-300">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] group-hover:from-[#BFA86B]/30 group-hover:to-[#BFA86B]/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-light mb-4 tracking-wide">{title}</h3>
        <p className="font-light leading-relaxed mb-6 opacity-80">{description}</p>
        {action && (
          <Button
            variant="outline"
            className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white font-medium bg-transparent"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
