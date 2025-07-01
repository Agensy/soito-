import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panorama Taubaté - Oportunidade de Investimento | SOITO INC",
  description: "Descubra o Panorama Taubaté, empreendimento exclusivo da SOITO INC com apartamentos de 2 dormitórios no bairro Imaculada Conceição. Rentabilidade de 19,1% a.a. e SCP com recompra garantida.",
  keywords: "apartamentos Taubaté, investimento imobiliário, Panorama Taubaté, SOITO INC, rentabilidade imobiliária, SCP",
  openGraph: {
    title: "Panorama Taubaté - Seu novo investimento em Taubaté",
    description: "Empreendimento exclusivo com apartamentos de 2 dormitórios, localização privilegiada e alta rentabilidade.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InvestaPanoramaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 