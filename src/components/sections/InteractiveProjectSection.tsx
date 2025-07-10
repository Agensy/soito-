"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Home, Car, Waves, Trees, Users, ArrowRight, Info, X } from "lucide-react"
import { useState, useEffect } from "react"

interface ProjectData {
  id: string
  title: string
  subtitle: string
  location: string
  area: string
  rooms: string
  features: string[]
  image: string
  badge: string
  cta: string
}

const projectsData: ProjectData[] = [
  {
    id: "panorama",
    title: "Panorama Taubaté",
    subtitle: "Aprecie o céu, estrelas e a paisagem que revelam a beleza do interior",
    location: "Taubaté/SP - Rua das Andradas, 365",
    area: "56,61 a 60,36M²",
    rooms: "2 Dorms • 1 Suíte • 1 ou 2 Vagas",
    features: [
      "Lazer Completo",
      "Piscina Adulto e Infantil", 
      "Academia",
      "Playground",
      "Quadra Beach Tennis",
      "Espaço Gourmet"
    ],
    image: "/13678.png",
    badge: "LANÇAMENTO",
    cta: "Conheça o Panorama"
  },
  {
    id: "corporativo",
    title: "Corporate Center",
    subtitle: "O conforto do interior e o lazer de um resort corporativo",
    location: "São Paulo/SP - Região Central",
    area: "45 a 120M²",
    rooms: "Salas Comerciais • Coworking • Auditório",
    features: [
      "Localização Estratégica",
      "Tecnologia Avançada",
      "Segurança 24h",
      "Estacionamento",
      "Área de Convivência",
      "Sala de Reuniões"
    ],
    image: "/85430.png",
    badge: "OPORTUNIDADE",
    cta: "Investir Agora"
  }
]

export function InteractiveProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <section className="relative">
      {projectsData.map((project, index) => (
        <div 
          key={project.id}
          className="relative h-screen w-full overflow-hidden"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 interactive-project-bg transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url('${project.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/60" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500 bg-primary-500/20">
                  {project.badge}
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                  {project.title}
                </h2>
                                 <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                   {project.subtitle}
                 </p>
                 {/* Botão para mobile */}
                 {isMobile && (
                   <Button
                     onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                     className="bg-primary-500/90 text-white font-bold hover:bg-primary-500 transition-smooth"
                   >
                     <Info className="w-4 h-4 mr-2" />
                     {activeProject === project.id ? 'Fechar Detalhes' : 'Ver Detalhes'}
                   </Button>
                 )}
               </motion.div>
             </div>
           </div>

          {/* Sidebar que aparece no hover (desktop) ou clique (mobile) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ 
              x: (isMobile ? activeProject === project.id : hoveredProject === project.id) ? "0%" : "100%" 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
            className="absolute top-0 right-0 h-full w-full sm:w-96 z-20"
          >
            <Card className="h-full w-full rounded-none bg-background/95 backdrop-blur-md border-l border-primary-500 project-sidebar">
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Header da sidebar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default" className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                      {project.badge}
                    </Badge>
                    {isMobile && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveProject(null)}
                        className="text-text-muted hover:text-text-primary"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-text-secondary mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  {/* Informações principais */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Home className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm font-semibold text-text-primary">Área</span>
                      </div>
                      <p className="text-xl font-bold text-primary-500">{project.area}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Car className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm font-semibold text-text-primary">Configuração</span>
                      </div>
                      <p className="text-text-secondary">{project.rooms}</p>
                    </div>
                  </div>

                  {/* Diferenciais */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-text-primary mb-4">Diferenciais</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center text-sm text-text-secondary"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold hover:shadow-golden hover:-translate-y-1 transition-smooth group"
                >
                  {project.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Indicador visual de hover - apenas desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredProject === project.id ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-15"
            >
              <div className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover-indicator">
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  )
} 