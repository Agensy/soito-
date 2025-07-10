"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Utensils, Gamepad2, Waves, Trees, GraduationCap, ShoppingBag } from "lucide-react"

export function PanoramaDetailsSection() {
  const diferenciais = [
    { icon: Utensils, title: "Salão de Festas com Cozinha Gourmet" },
    { icon: Utensils, title: "Áreas de Churrasqueira" },
    { icon: Gamepad2, title: "Playground" },
    { icon: GraduationCap, title: "Academia" },
    { icon: Gamepad2, title: "Salão de Jogos" },
    { icon: Waves, title: "Piscina Adulto" },
    { icon: Gamepad2, title: "Brinquedoteca" },
    { icon: Users, title: "Quadra Beach Tennis" },
    { icon: Trees, title: "Áreas de Convivência" },
    { icon: Waves, title: "Piscina Infantil" },
    { icon: Users, title: "Espaço PET" },
    { icon: ShoppingBag, title: "Mall" }
  ]

  const tipologias = [
    {
      area: "60,36 M²",
      dormitorios: "2 Dorms. • 1 Suíte • 1 ou 2 Vagas",
      descricao: "Sala com Varanda Gourmet"
    },
    {
      area: "58,39 M²", 
      dormitorios: "2 Dorms. • 1 Suíte • 1 ou 2 Vagas",
      descricao: "Sala com Varanda Gourmet"
    },
    {
      area: "56,61 M²",
      dormitorios: "2 Dorms. • 1 Suíte • 1 ou 2 Vagas", 
      descricao: "Sala com Varanda Gourmet"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500">
            PROJETO
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Panorama Taubaté</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Uma arquitetura debruçada sobre um terreno privilegiado no interior paulista
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Informações de localização */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-background-secondary border border-border-primary">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">TERRENO</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    UMA ARQUITETURA DEBRUÇADA SOBRE UM TERRENO DE
                  </h3>
                  <div className="text-3xl font-bold text-primary-500">6.580,55 M²</div>
                </div>

                <div className="border-t border-border-primary pt-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">ENDEREÇO</span>
                      <p className="text-xl font-bold text-text-primary">Rua das Andradas, 365</p>
                    </div>
                    
                    <div>
                      <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">BAIRRO</span>
                      <p className="text-xl font-bold text-text-primary">Imaculada Conceição</p>
                    </div>
                    
                    <div>
                      <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">CIDADE/ESTADO</span>
                      <p className="text-xl font-bold text-text-primary">Taubaté/SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tipologias */}
            <Card className="p-8 bg-background-secondary border border-border-primary">
              <div className="space-y-6">
                <div>
                  <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">TIPOLOGIAS (APARTAMENTOS)</span>
                </div>
                
                {tipologias.map((tipologia, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-t border-border-secondary pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="text-3xl font-bold text-primary-500 mb-1">{tipologia.area}</div>
                    <div className="text-text-primary font-medium mb-1">{tipologia.dormitorios}</div>
                    <div className="text-text-secondary">{tipologia.descricao}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Diferenciais do empreendimento */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
              <div className="mb-8">
                <span className="text-primary-500 text-sm font-bold uppercase tracking-wide">DIFERENCIAIS DO EMPREENDIMENTO</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {diferenciais.map((diferencial, index) => {
                  const IconComponent = diferencial.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-sm font-medium">{diferencial.title}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Vista aérea placeholder */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Vista aérea do terreno</p>
                    <p className="text-xs text-gray-400">Localização privilegiada</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 