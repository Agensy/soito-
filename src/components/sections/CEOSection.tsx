"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "../../lib/utils"
import { Building2, DollarSign, Star } from "lucide-react"
import { CEO_DATA } from "../../lib/constants"

export function CEOSection() {
  return (
    <section className="ceo-section py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500">
            LIDERANÇA
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">{CEO_DATA.headline}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça a visão e experiência que transformam o mercado imobiliário brasileiro
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CEO Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1F1F23] border-2 border-primary-500 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
              <div className="relative z-10">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={CEO_DATA.photo || "/placeholder.svg"}
                    alt={CEO_DATA.photoAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Badge com nome e título sobre a foto */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center">
                    <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 mb-2 shadow-lg">
                      <h3 className="text-xl font-bold text-black">{CEO_DATA.name}</h3>
                    </div>
                    <p className="text-white font-medium text-base">{CEO_DATA.title}</p>
                  </div>
                </div>

                {/* O bloco de texto original foi movido para dentro do contêiner da imagem */}
              </div>
            </Card>
          </motion.div>

          {/* CEO Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {CEO_DATA.content.map((paragraph: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-300 leading-relaxed">{paragraph}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
                  "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0",
                )}
              >
                {CEO_DATA.ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Card className="p-8 glass-adaptive backdrop-blur-[10px] text-center">
              <Building2 className="w-10 h-10 mb-4 text-primary-500" />
              <div className="text-3xl font-bold text-primary-500 mb-2">25</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </Card>

            <Card className="p-8 glass-adaptive backdrop-blur-[10px] text-center">
              <DollarSign className="w-10 h-10 mb-4 text-primary-500" />
              <div className="text-3xl font-bold text-primary-500 mb-2">R$ 2.5B</div>
              <div className="text-gray-300">Valor em Desenvolvimento</div>
            </Card>

            <Card className="p-8 glass-adaptive backdrop-blur-[10px] text-center">
              <Star className="w-10 h-10 mb-4 text-primary-500" />
              <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
