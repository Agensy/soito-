"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Banknote,
  Shield,
  Home,
  Handshake,
  Calculator,
  Phone,
} from "lucide-react"
import Image from "next/image"

interface PartnerProject {
  id: string
  name: string
  location: string
  year: string
  image: string
  description: string
  features: string[]
  status: "Concluído" | "Em Andamento" | "Planejamento"
  units: number
  area: string
}

interface Partner {
  id: string
  name: string
  logo: string
  description: string
  partnership: string
  benefits: string[]
  projects?: PartnerProject[]
  services?: string[]
}

export function LuxuryPartnersSection() {
  const [activeTab, setActiveTab] = useState("cs-construtora")

  const partners: Partner[] = [
    {
      id: "cs-construtora",
      name: "CS Construtora",
      logo: "/placeholder-logo.png",
      description:
        "Parceria estratégica com uma das construtoras mais renomadas do mercado, garantindo qualidade excepcional e inovação em cada projeto.",
      partnership: "Parceria Exclusiva desde 2018",
      benefits: [
        "Qualidade construtiva premium",
        "Tecnologia de ponta em construção",
        "Sustentabilidade e eficiência energética",
        "Acabamentos de alto padrão",
        "Cronograma rigorosamente cumprido",
      ],
      projects: [
        {
          id: "1",
          name: "Residencial Elegance",
          location: "Vila Madalena, São Paulo",
          year: "2023",
          image: "/modern-residential-facade.png",
          description:
            "Empreendimento residencial de alto padrão com 120 unidades, featuring arquitetura contemporânea e acabamentos premium.",
          features: ["120 unidades", "Área de lazer completa", "Sustentabilidade LEED", "Smart Home"],
          status: "Concluído",
          units: 120,
          area: "15.000m²",
        },
        {
          id: "2",
          name: "Corporate Tower",
          location: "Faria Lima, São Paulo",
          year: "2024",
          image: "/corporate-building-render.png",
          description: "Torre corporativa inteligente com 30 andares, tecnologia de ponta e certificação sustentável.",
          features: ["30 andares", "Tecnologia IoT", "Heliponto", "Centro de convenções"],
          status: "Em Andamento",
          units: 240,
          area: "45.000m²",
        },
        {
          id: "3",
          name: "Luxury Residence",
          location: "Jardins, São Paulo",
          year: "2024",
          image: "/luxury-lobby.png",
          description: "Residencial ultra premium com apenas 24 unidades exclusivas e serviços de hotelaria.",
          features: ["24 unidades exclusivas", "Concierge 24h", "Spa privativo", "Wine cellar"],
          status: "Em Andamento",
          units: 24,
          area: "8.000m²",
        },
      ],
    },
    {
      id: "caixa-economica",
      name: "Caixa Econômica Federal",
      logo: "/placeholder-logo.png",
      description:
        "Parceria oficial com a Caixa Econômica Federal, oferecendo as melhores condições de financiamento e programas habitacionais.",
      partnership: "Correspondente Bancário Autorizado",
      benefits: [
        "Financiamento até 90% do valor",
        "Taxas de juros preferenciais",
        "Programa Casa Verde e Amarela",
        "FGTS como entrada",
        "Simulação online instantânea",
      ],
      services: [
        "Financiamento Habitacional",
        "Casa Verde e Amarela",
        "Crédito Imobiliário",
        "Consórcio Imobiliário",
        "Seguro Habitacional",
        "Assessoria Completa",
      ],
    },
  ]

  const currentPartner = partners.find((p) => p.id === activeTab)

  return (
    <section className="luxury-section bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black px-6 py-2 text-lg font-medium">
            <Handshake className="w-5 h-5 mr-2" />
            PARCERIAS ESTRATÉGICAS
          </Badge>

          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Nossos <span className="luxury-text-gradient">Parceiros</span>
          </h2>

          <p className="text-xl max-w-4xl mx-auto font-light text-gray-600 dark:text-gray-300">
            Trabalhamos com os melhores do mercado para garantir excelência, qualidade e as melhores condições para
            nossos clientes.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-[#BFA86B]/20">
            <TabsTrigger
              value="cs-construtora"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BFA86B] data-[state=active]:to-[#D4C08A] data-[state=active]:text-black font-medium"
            >
              <Building2 className="w-5 h-5 mr-2" />
              CS Construtora
            </TabsTrigger>
            <TabsTrigger
              value="caixa-economica"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BFA86B] data-[state=active]:to-[#D4C08A] data-[state=active]:text-black font-medium"
            >
              <Banknote className="w-5 h-5 mr-2" />
              Caixa Econômica Federal
            </TabsTrigger>
          </TabsList>

          {/* CS Construtora Tab */}
          <TabsContent value="cs-construtora" className="space-y-12">
            {currentPartner && (
              <>
                {/* Partner Overview */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-[#BFA86B]" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-black dark:text-white">{currentPartner.name}</h3>
                        <p className="text-[#BFA86B] font-medium">{currentPartner.partnership}</p>
                      </div>
                    </div>

                    <p className="text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                      {currentPartner.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-black dark:text-white">Diferenciais da Parceria</h4>
                      <div className="grid gap-3">
                        {currentPartner.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#BFA86B] flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 font-light">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Card className="luxury-card overflow-hidden">
                      <div className="relative h-80">
                        <Image src="/modern-building-facade.png" alt="CS Construtora" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h4 className="text-2xl font-light mb-2">Excelência Construtiva</h4>
                          <p className="text-gray-200">Mais de 50 projetos entregues</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Projects Gallery */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-light mb-4 text-black dark:text-white">
                      Projetos em <span className="luxury-text-gradient">Destaque</span>
                    </h3>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-300">
                      Conheça alguns dos empreendimentos desenvolvidos em parceria com a CS Construtora
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPartner.projects?.map((project) => (
                      <Card
                        key={project.id}
                        className="luxury-card overflow-hidden group hover:scale-105 transition-all duration-300"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge
                              className={`font-medium ${
                                project.status === "Concluído"
                                  ? "bg-green-500/90 text-white"
                                  : project.status === "Em Andamento"
                                    ? "bg-blue-500/90 text-white"
                                    : "bg-orange-500/90 text-white"
                              }`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-xl font-medium mb-2 text-black dark:text-white">{project.name}</h4>
                              <p className="text-[#BFA86B] flex items-center font-light">
                                <MapPin className="w-4 h-4 mr-1" />
                                {project.location}
                              </p>
                              <p className="text-gray-500 dark:text-gray-400 flex items-center font-light mt-1">
                                <Calendar className="w-4 h-4 mr-1" />
                                {project.year}
                              </p>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed">
                              {project.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="font-medium text-[#BFA86B]">{project.units}</div>
                                <div className="text-gray-500 dark:text-gray-400">Unidades</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="font-medium text-[#BFA86B]">{project.area}</div>
                                <div className="text-gray-500 dark:text-gray-400">Área Total</div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h5 className="font-medium text-black dark:text-white">Características:</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.features.map((feature, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs border-[#BFA86B]/30 text-[#BFA86B]"
                                  >
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button
                              variant="outline"
                              className="w-full border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white font-medium bg-transparent"
                            >
                              Ver Detalhes
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          {/* Caixa Econômica Federal Tab */}
          <TabsContent value="caixa-economica" className="space-y-12">
            {currentPartner && (
              <>
                {/* Partner Overview */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center">
                        <Banknote className="w-8 h-8 text-[#BFA86B]" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-black dark:text-white">{currentPartner.name}</h3>
                        <p className="text-[#BFA86B] font-medium">{currentPartner.partnership}</p>
                      </div>
                    </div>

                    <p className="text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                      {currentPartner.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-black dark:text-white">Vantagens Exclusivas</h4>
                      <div className="grid gap-3">
                        {currentPartner.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#BFA86B] flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 font-light">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] font-medium">
                        <Calculator className="w-5 h-5 mr-2" />
                        Simular Financiamento
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white bg-transparent"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Falar com Especialista
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="luxury-card">
                      <CardContent className="p-8">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center">
                            <Home className="w-8 h-8 text-green-600" />
                          </div>
                          <h4 className="text-2xl font-light text-black dark:text-white">Casa Verde e Amarela</h4>
                          <p className="text-gray-600 dark:text-gray-300 font-light">
                            Programa habitacional com subsídios de até R$ 47.500 e taxas a partir de 4,25% ao ano.
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <div className="font-medium text-green-600">Até 90%</div>
                              <div className="text-gray-500 dark:text-gray-400">Financiamento</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <div className="font-medium text-green-600">4,25%</div>
                              <div className="text-gray-500 dark:text-gray-400">Taxa a.a.</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="luxury-card">
                      <CardContent className="p-8">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-blue-600" />
                          </div>
                          <h4 className="text-2xl font-light text-black dark:text-white">Segurança Total</h4>
                          <p className="text-gray-600 dark:text-gray-300 font-light">
                            Instituição financeira federal com mais de 160 anos de tradição e solidez no mercado.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-light mb-4 text-black dark:text-white">
                      Serviços <span className="luxury-text-gradient">Disponíveis</span>
                    </h3>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-300">
                      Soluções completas de financiamento para realizar o sonho da casa própria
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPartner.services?.map((service, index) => (
                      <Card key={index} className="luxury-card group hover:scale-105 transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] group-hover:from-[#BFA86B]/30 group-hover:to-[#BFA86B]/20 transition-all duration-300">
                            <Banknote className="w-6 h-6" />
                          </div>
                          <h4 className="text-lg font-medium mb-2 text-black dark:text-white">{service}</h4>
                          <p className="text-gray-600 dark:text-gray-300 font-light text-sm">
                            Condições especiais e atendimento personalizado
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="luxury-card text-center overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#BFA86B]/10 to-[#D4C08A]/10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-light mb-6 text-black dark:text-white">
                  Pronto para <span className="luxury-text-gradient">Começar seu Projeto?</span>
                </h3>
                <p className="text-lg font-light text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como nossas parcerias podem tornar seu sonho imobiliário
                  realidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] font-medium px-8 py-3 text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    Falar com Consultor
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white px-8 py-3 text-lg bg-transparent"
                  >
                    <Building2 className="w-5 h-5 mr-2" />
                    Ver Todos os Projetos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
