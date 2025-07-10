"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PanoramaHeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background com gradiente estrelado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-slate-900/80 to-blue-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500 bg-primary-500/10">
                LANÇAMENTO
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                APRECIE O CÉU, ESTRELAS E A PAISAGEM QUE{" "}
                <span className="text-gradient">REVELAM A BELEZA DO INTERIOR</span>, 
                ENCANTANDO A CADA MOMENTO.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                O CONFORTO DO INTERIOR E O LAZER DE UM RESORT.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-black font-bold hover:shadow-golden hover:-translate-y-1 transition-smooth"
              >
                Conheça o Projeto
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Simular Financiamento
              </Button>
            </motion.div>
          </motion.div>

          {/* Card com informações do projeto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Logo Panorama */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="text-white text-center">
                  <div className="text-sm tracking-[0.3em] mb-2 opacity-80">
                    ||||||||||||||||||||||||||||||||||||||||
                  </div>
                  <h2 className="text-4xl font-bold tracking-wider">PANORAMA</h2>
                  <div className="text-sm tracking-[0.3em] mt-2 opacity-80">
                    ||||||||||||||||||||||||||||||||||||||||
                  </div>
                  <p className="text-lg tracking-wider mt-2">TAUBATÉ</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Apartamentos</h3>
                  <div className="text-5xl font-bold text-slate-800">
                    2 <span className="text-3xl">DORMS</span>
                  </div>
                  <div className="text-lg text-slate-600 italic">(1 SUÍTE)</div>
                </div>

                <div className="bg-primary-500/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    56,61 A 60,36M²
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-center text-slate-600">
                    <p className="font-medium">LAZER COMPLETO | 1 OU 2 VAGAS</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-bold">SOITO</span>
                    <span className="text-xs ml-1">INC</span>
                    <div className="text-xs">INVESTIMENTOS CONSCIENTES</div>
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