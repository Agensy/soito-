"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface Stat {
  value: string
  label: string
  icon: ReactNode
  description: string
}

interface LuxuryStatsProps {
  stats: Stat[]
  title: string
  subtitle: string
  className?: string
}

export function LuxuryStats({ stats, title, subtitle, className = "" }: LuxuryStatsProps) {
  return (
    <section className={`luxury-section ${className}`}>
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">{title}</h2>
          <p className="text-xl max-w-3xl mx-auto font-light text-gray-300">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 bg-black/40 border-[#BFA86B]/20 backdrop-blur-sm hover:border-[#BFA86B]/40"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] group-hover:from-[#BFA86B]/30 group-hover:to-[#BFA86B]/20 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-light bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-2 text-white">{stat.label}</div>
                <div className="text-sm font-light text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
