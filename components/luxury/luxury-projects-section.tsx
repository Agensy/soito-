"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, MapPin, ArrowRight, Home, Building, TrendingUp } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  name: string
  location: string
  type: "Residencial" | "Comercial"
  status: "Lançamento" | "Em Obras" | "Entregue"
  price: string
  image: string
  description: string
  features: string[]
  href: string
}

export function LuxuryProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("todos")

  const projects: Project[] = [
    {
      id: "1",
      name: "Residencial Aurora",
      location: "Vila Madalena, SP",
      type: "Residencial",
      status: "Entregue",
      price: "A partir de R$ 850.000",
      image: "/modern-residential-facade.png",
      description: "Apartamentos de 2 e 3 quartos com vista panorâmica, área de lazer completa e acabamento premium.",
      features: ["2-3 quartos", "Área de lazer", "Vista panorâmica", "Acabamento premium"],
      href: "/empreendimento-cliente",
    },
    {
      id: "2",
      name: "Corporate Plaza",
      location: "Faria Lima, SP",
      type: "Comercial",
      status: "Em Obras",
      price: "A partir de R$ 450.000",
      image: "/placeholder-bs4bw.png",
      description: "Salas comerciais modernas com infraestrutura completa para empresas de todos os portes.",
      features: ["Salas comerciais", "Infraestrutura completa", "Localização premium", "Tecnologia avançada"],
      href: "/empreendimento-investidor",
    },
    {
      id: "3",
      name: "Urban Living",
      location: "Pinheiros, SP",
      type: "Residencial",
      status: "Lançamento",
      price: "A partir de R$ 650.000",
      image: "/modern-apartment-building.png",
      description: "Studios inteligentes com automação residencial e design contemporâneo.",
      features: ["Studios", "Automação", "Design contemporâneo", "Localização central"],
      href: "#",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "todos") return true
    return project.type.toLowerCase() === activeFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregue":
        return "bg-green-500/90 text-white"
      case "Em Obras":
        return "bg-blue-500/90 text-white"
      case "Lançamento":
        return "bg-orange-500/90 text-white"
      default:
        return "bg-gray-500/90 text-white"
    }
  }

  return (
    <section className="luxury-section bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black px-6 py-2 text-lg font-medium">
            <Building2 className="w-5 h-5 mr-2" />
            EMPREENDIMENTOS EXCLUSIVOS
          </Badge>

          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-white">
            Nossos <span className="luxury-text-gradient">Empreendimentos</span>
          </h2>

          <p className="text-xl max-w-4xl mx-auto font-light text-gray-300">
            Projetos exclusivos que redefinem padrões de qualidade e sofisticação no mercado imobiliário.
          </p>
        </div>

        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/10 backdrop-blur-sm border border-[#BFA86B]/20">
            <TabsTrigger
              value="todos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BFA86B] data-[state=active]:to-[#D4C08A] data-[state=active]:text-black font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="residencial"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BFA86B] data-[state=active]:to-[#D4C08A] data-[state=active]:text-black font-medium"
            >
              <Home className="w-4 h-4 mr-2" />
              Residencial
            </TabsTrigger>
            <TabsTrigger
              value="comercial"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BFA86B] data-[state=active]:to-[#D4C08A] data-[state=active]:text-black font-medium"
            >
              <Building className="w-4 h-4 mr-2" />
              Comercial
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeFilter} className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="luxury-card overflow-hidden group hover:scale-105 transition-all duration-300 bg-black/40 border-[#BFA86B]/20 hover:border-[#BFA86B]/40"
                >
                  <div className="relative overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Badge className={`absolute top-4 right-4 font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium mb-2 tracking-wide text-white">{project.name}</h3>
                        <p className="text-[#BFA86B] mb-2 flex items-center font-light">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </p>
                        <p className="text-gray-400 mb-4 font-light">{project.type}</p>
                      </div>

                      <p className="text-gray-300 font-light text-sm leading-relaxed">{project.description}</p>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-[#BFA86B]/30 text-[#BFA86B]">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <span className="luxury-text-gradient font-semibold text-lg">{project.price}</span>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black font-medium bg-transparent"
                        asChild
                      >
                        <a href={project.href}>
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] font-medium tracking-wide px-12"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Ver Portfólio Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
