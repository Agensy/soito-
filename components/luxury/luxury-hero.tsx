"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { ReactNode } from "react"

interface LuxuryHeroProps {
  badge: string
  title: ReactNode
  subtitle: string
  backgroundImage: string
  primaryAction: {
    label: string
    onClick: () => void
    icon?: ReactNode
  }
  secondaryAction: {
    label: string
    onClick: () => void
    icon?: ReactNode
  }
}

export function LuxuryHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  primaryAction,
  secondaryAction,
}: LuxuryHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <Badge className="mb-8 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black px-8 py-3 text-lg font-medium tracking-wide">
          {badge}
        </Badge>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight mb-8 leading-tight tracking-tight">{title}</h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed text-gray-300">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] text-xl px-12 py-6 font-medium tracking-wide shadow-2xl hover:shadow-[#BFA86B]/25 transition-all duration-300"
            onClick={primaryAction.onClick}
          >
            {primaryAction.icon}
            {primaryAction.label}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black text-xl px-12 py-6 font-medium tracking-wide backdrop-blur-sm bg-black/20"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.icon}
            {secondaryAction.label}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
