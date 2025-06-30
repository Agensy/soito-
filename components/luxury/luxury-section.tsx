"use client"

import type { ReactNode } from "react"

interface LuxurySectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  variant?: "light" | "dark" | "gradient"
  className?: string
}

export function LuxurySection({ title, subtitle, children, variant = "light", className = "" }: LuxurySectionProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "dark":
        return "bg-gradient-to-br from-black via-gray-900 to-black text-white"
      case "gradient":
        return "bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
      default:
        return "bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black"
    }
  }

  return (
    <section className={`luxury-section ${getVariantClasses()} ${className}`}>
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">{title}</h2>
          {subtitle && <p className="text-xl max-w-4xl mx-auto font-light opacity-80">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
