import type { Metadata } from "next"
import { JourneyProvider } from "./context/journey-context"

export const metadata: Metadata = {
  title: "Panorama - Investimento SOITO",
  description: "Descubra uma oportunidade de investimento premium no Panorama. Rentabilidade de 19,1% a.a.",
}

export default function PanoramaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <JourneyProvider>
      {children}
    </JourneyProvider>
  )
} 