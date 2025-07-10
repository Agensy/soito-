"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Calendar, Shield, UserCheck } from "lucide-react"

export function CompromissoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary-500 text-primary-500">
            VALORES
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Nosso Compromisso</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Na Soito Incorporadora, acreditamos que construir vai além de erguer paredes. É 
              sobre criar espaços onde sonhos ganham vida e famílias constroem suas 
              histórias.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Nosso compromisso é com a qualidade, a inovação e, acima de tudo, com a 
              satisfação dos nossos clientes. Trabalhamos com dedicação para que cada 
              projeto reflita nossos valores e supere suas expectativas.
            </p>

            {/* Grid de valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Transparência</h3>
                  <p className="text-sm text-text-secondary">
                    Comunicação clara e honesta em todas as etapas do processo, desde o 
                    primeiro contato até a entrega das chaves.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Pontualidade</h3>
                  <p className="text-sm text-text-secondary">
                    Compromisso com os prazos estabelecidos, respeitando o 
                    planejamento e as expectativas dos nossos clientes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Segurança</h3>
                  <p className="text-sm text-text-secondary">
                    Projetos que seguem rigorosamente as normas técnicas e de segurança, 
                    garantindo tranquilidade para você e sua família.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Atendimento</h3>
                  <p className="text-sm text-text-secondary">
                    Equipe dedicada a oferecer um atendimento personalizado e 
                    atencioso, compreendendo as necessidades de cada cliente.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card de destaque */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary-500/10 to-primary-600/10 border-2 border-primary-500">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-2xl font-bold text-black">✓</span>
                </motion.div>
                
                <h3 className="text-xl font-bold text-primary-500 mb-4">
                  Compromisso com a excelência
                </h3>
                
                <blockquote className="text-lg text-text-primary italic mb-6">
                  "Buscamos a excelência em cada detalhe, porque sabemos que não estamos 
                  apenas construindo imóveis, estamos construindo lares."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm text-text-secondary uppercase tracking-wider">
                    SATISFAÇÃO
                  </span>
                  <div className="text-3xl font-bold text-primary-500">100%</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 