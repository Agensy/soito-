"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '../../lib/utils'
import { Building2, DollarSign, Star } from 'lucide-react'

const CEO_DATA = {
  name: "FABIO SOITO",
  title: "FOUNDER | CEO",
  photo: "/fabio-soito-ceo.jpg",
  photoAlt: "Fábio Soito - CEO e Fundador da SOITO INC",
  headline: "Visão e Experiência que Transformam o Mercado Imobiliário.",
  content: [
    "À frente da Soito Incorporadora, trago 25 anos de trajetória executiva onde a expertise jurídica se alia à visão estratégica e ao profundo conhecimento do mercado imobiliário. Esta combinação única me permite identificar e capturar oportunidades excepcionais para nossos investidores e clientes.",
    "Construí minha carreira desenvolvendo a capacidade de enxergar além do óbvio – transformando terrenos em empreendimentos que não apenas valorizam o patrimônio, mas também elevam o padrão urbanístico das cidades onde atuamos. Cada projeto da Soito Incorporadora nasce de uma análise criteriosa e se desenvolve com rigor técnico incomparável.",
    "Nossa filosofia de trabalho une tradição e inovação. Aplicamos processos consistentes de governança e conformidade legal, enquanto constantemente buscamos soluções criativas para os desafios do setor. Esta abordagem equilibrada nos permite entregar empreendimentos que se destacam tanto pela solidez quanto pela ousadia arquitetônica.",
    "Na Soito, não estamos apenas construindo estruturas físicas – estamos criando legados que moldam positivamente a paisagem urbana e a vida das pessoas por gerações. Este é o compromisso que renovo diariamente: transformar visão em realidade tangível, com excelência inquestionável."
  ],
  ctaText: "CONHEÇA NOSSA TRAJETÓRIA"
}

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
                    src={CEO_DATA.photo}
                    alt={CEO_DATA.photoAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{CEO_DATA.name}</h3>
                  <p className="text-primary-500 font-medium">{CEO_DATA.title}</p>
                </div>
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
                <p className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
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
                  "bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0"
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