"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LuxuryProjectCardProps {
  title: string
  location: string
  status: "Lançamento" | "Em Construção" | "Entregue" | "Vendido"
  type: string
  price: string
  image: string
  features: string[]
  href: string
  className?: string
}

export function LuxuryProjectCard({
  title,
  location,
  status,
  type,
  price,
  image,
  features,
  href,
  className,
}: LuxuryProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lançamento":
        return "bg-gradient-to-r from-green-500 to-green-600"
      case "Em Construção":
        return "bg-gradient-to-r from-blue-500 to-blue-600"
      case "Entregue":
        return "bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"
      case "Vendido":
        return "bg-gradient-to-r from-gray-500 to-gray-600"
      default:
        return "bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"
    }
  }

  return (
    <Card
      className={cn(
        "group overflow-hidden hover:scale-105 transition-all duration-500 bg-black/40 border-[#BFA86B]/20 backdrop-blur-sm hover:border-[#BFA86B]/40 hover:shadow-2xl hover:shadow-[#BFA86B]/10",
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Status Badge */}
        <Badge className={cn("absolute top-4 right-4 text-white font-medium", getStatusColor(status))}>{status}</Badge>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-[#BFA86B] font-semibold text-lg">{price}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6 space-y-4">
        {/* Title and Location */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#BFA86B] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#BFA86B]" />
            {location}
          </p>
          <p className="text-gray-400 text-sm">{type}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-gray-300 text-sm font-medium">Características:</p>
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-[#BFA86B]/10 text-[#BFA86B] px-2 py-1 rounded-full border border-[#BFA86B]/20"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-xs text-gray-400 px-2 py-1">+{features.length - 3} mais</span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] font-medium transition-all duration-300"
        >
          <Link href={href}>
            Ver Detalhes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
