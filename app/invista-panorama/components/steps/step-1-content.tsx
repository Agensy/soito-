"use client"

import { motion } from "framer-motion"
import {
  Building2,
  MapPin,
  TrendingUp,
  Shield,
  CheckCircle,
  Car,
  Home,
  Users,
  Clock,
  Award,
  Percent,
  BarChart3,
  Landmark,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Step1Content() {
  const [activeTab, setActiveTab] = useState("visaoGeral")

  // Dados de valorização projetada (19,1% a.a.)
  const monthlyAppreciation = [
    { month: 1, price: 3500, percentage: 0 },
    { month: 6, price: 3833, percentage: 9.5 },
    { month: 12, price: 4167, percentage: 19.1 },
    { month: 18, price: 4542, percentage: 29.8 },
    { month: 24, price: 4958, percentage: 41.7 },
  ]

  const investmentOptions = [
    {
      title: "Opção 1 - À Vista",
      pricePerM2: "R$ 3.500",
      minimumInvestment: "R$ 105.000",
      payment: "À vista",
      highlight: "Melhor preço",
      color: "from-[#BFA86B] to-[#8B7355]",
    },
    {
      title: "Opção 2 - Parcelado",
      pricePerM2: "R$ 3.900", 
      minimumInvestment: "R$ 117.000",
      payment: "30% entrada + 10x",
      highlight: "Flexibilidade",
      color: "from-[#8B7355] to-[#BFA86B]",
    },
    {
      title: "Opção 3 - Veículo",
      pricePerM2: "R$ 4.000",
      minimumInvestment: "R$ 300.000",
      payment: "Veículo FIPE 100%",
      highlight: "Diferenciado",
      color: "from-[#BFA86B] to-[#8B7355]",
    },
  ]

  const locationPoints = [
    { name: "Supermercado Panorama", distance: "650m", time: "1 min", icon: "🏬" },
    { name: "UNITAU", distance: "4km", time: "12 min", icon: "🎓" },
    { name: "UPA Central", distance: "4km", time: "10 min", icon: "🏥" },
    { name: "UNIP Taubaté", distance: "6km", time: "18 min", icon: "🎓" },
    { name: "Extra Mercado", distance: "2,9km", time: "5 min", icon: "🏪" },
    { name: "Igreja N. Sra. Imaculada", distance: "1,2km", time: "6 min", icon: "⛪" },
  ]

  return (
    <div className="text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-xl overflow-hidden mb-8 md:mb-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFA86B]/20 to-[#0B0B0B]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12 w-full md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            {/* Tag de exclusividade */}
            <div className="inline-block bg-[#BFA86B]/90 text-black text-xs sm:text-sm font-bold py-1 px-2 sm:px-3 rounded-full mb-1 sm:mb-2 animate-pulse">
              LANÇAMENTO SETEMBRO 2025
            </div>

            {/* Headline principal */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#BFA86B]">Panorama Taubaté:</span>{" "}
              <span className="block sm:inline">Um novo marco residencial</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
              Apartamentos de 2 dormitórios no bairro Imaculada Conceição com rentabilidade de 19,1% a.a.
            </p>

            {/* Resumo visual dos benefícios */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-4">
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <TrendingUp className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">19,1% de rentabilidade a.a.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">SCP com recompra garantida</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">Apenas 180 m² disponíveis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Por que investir no Panorama Taubaté */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-[#0B0B0B] rounded-xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-10 relative overflow-hidden border border-[#BFA86B]/20"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFA86B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BFA86B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#BFA86B] flex items-center mb-4 sm:mb-5 relative z-10">
          <div className="bg-gradient-to-r from-[#BFA86B] to-[#8B7355] p-1 sm:p-1.5 rounded-full mr-2 shadow-lg shadow-[#BFA86B]/20">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </div>
          Por que investir no Panorama Taubaté
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 relative z-10">
          {/* Valorização acelerada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-[#BFA86B]/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-[#BFA86B] to-[#8B7355] rounded-lg p-1.5 shadow-lg shadow-[#BFA86B]/20 mr-2 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-white">Rentabilidade Superior</h4>
            </div>
            <p className="text-xs text-gray-300 ml-8">
              19,1% a.a. em 2024, superando amplamente a Selic e outros investimentos tradicionais.
            </p>
          </motion.div>

          {/* Localização estratégica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-[#BFA86B]/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-[#BFA86B] to-[#8B7355] rounded-lg p-1.5 shadow-lg shadow-[#BFA86B]/20 mr-2 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-white">Localização Privilegiada</h4>
            </div>
            <p className="text-xs text-gray-300 ml-8">
              Bairro Imaculada Conceição, perto de universidades, shopping e principais acessos de Taubaté.
            </p>
          </motion.div>

          {/* Mercado aquecido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-[#BFA86B]/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-[#BFA86B] to-[#8B7355] rounded-lg p-1.5 shadow-lg shadow-[#BFA86B]/20 mr-2 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-white">Mercado Aquecido</h4>
            </div>
            <p className="text-xs text-gray-300 ml-8">
              +17,1% nas vendas de usados e +43,4% nos contratos de locação em Taubaté em 2024.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs de informações detalhadas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-8 sm:mb-12 md:mb-16"
      >
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 bg-[#0B0B0B]/50 p-2 rounded-xl border border-[#BFA86B]/20">
          {[
            { id: "visaoGeral", label: "Visão Geral", icon: Building2 },
            { id: "localizacao", label: "Localização", icon: MapPin },
            { id: "investimento", label: "Investimento", icon: TrendingUp },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#BFA86B] to-[#8B7355] text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] rounded-xl p-6 border border-[#BFA86B]/20">
          {activeTab === "visaoGeral" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-[#BFA86B] mb-4 flex items-center">
                <Building2 className="mr-3" />
                Conheça o Panorama Taubaté
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                Descubra o <strong>Panorama Taubaté</strong>, o mais novo projeto da Soito Inc no tradicional bairro 
                Imaculada Conceição, em Taubaté. Um empreendimento exclusivo, com apartamentos de 
                <strong> 2 dormitórios, 1 suíte, varanda gourmet e opções de 1 ou 2 vagas</strong>, 
                ideal para quem busca qualidade de vida, praticidade e uma localização estratégica.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Especificações */}
                <div className="bg-white/5 p-4 rounded-lg border border-[#BFA86B]/20">
                  <div className="flex items-center mb-3">
                    <Home className="h-5 w-5 text-[#BFA86B] mr-2" />
                    <h4 className="font-medium text-white">Apartamentos</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• 2 dormitórios (1 suíte)</li>
                    <li>• 56,61m² • 58,39m² • 60,36m²</li>
                    <li>• Varanda gourmet</li>
                    <li>• 1 ou 2 vagas</li>
                  </ul>
                </div>

                {/* Lazer */}
                <div className="bg-white/5 p-4 rounded-lg border border-[#BFA86B]/20">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[#BFA86B] mr-2" />
                    <h4 className="font-medium text-white">Lazer Completo</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Piscina adulto e infantil</li>
                    <li>• Quadra de Beach Tennis</li>
                    <li>• Academia completa</li>
                    <li>• Espaço PET</li>
                    <li>• Mall interno</li>
                  </ul>
                </div>

                {/* Diferenciais */}
                <div className="bg-white/5 p-4 rounded-lg border border-[#BFA86B]/20">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-[#BFA86B] mr-2" />
                    <h4 className="font-medium text-white">Diferenciais</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Terreno de 6.580,55 m²</li>
                    <li>• Arquitetura moderna</li>
                    <li>• Segurança 24h</li>
                    <li>• Paisagismo planejado</li>
                    <li>• Áreas de convivência</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "localizacao" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-[#BFA86B] mb-4 flex items-center">
                <MapPin className="mr-3" />
                Localização Estratégica
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                No coração de Taubaté, o <strong>Panorama Taubaté</strong> oferece acesso rápido aos principais 
                pontos da cidade e região. Localizado na <strong>Rua das Andradas, 365 - Bairro Imaculada Conceição</strong>, 
                você estará próximo de tudo que precisa.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {locationPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{point.icon}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{point.name}</p>
                        <p className="text-gray-400 text-xs">{point.distance}</p>
                      </div>
                    </div>
                    <div className="text-[#BFA86B] font-bold text-sm">
                      {point.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "investimento" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-[#BFA86B] mb-4 flex items-center">
                <TrendingUp className="mr-3" />
                Opções de Investimento
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                <strong>Modalidade SCP com recompra garantida pela Soito Inc.</strong> Oferta limitada a apenas 
                <strong> 180 m² disponíveis</strong> em condições especiais de lançamento.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {investmentOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`relative p-4 rounded-lg border border-[#BFA86B]/20 bg-gradient-to-br ${option.color}/10 hover:border-[#BFA86B]/40 transition-all duration-300 group`}
                  >
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#BFA86B] text-black text-xs font-bold px-2 py-1 rounded-full">
                        {option.highlight}
                      </span>
                    </div>
                    
                    <h4 className="text-white font-bold mb-3 mt-2">{option.title}</h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Valor m²:</span>
                        <span className="text-[#BFA86B] font-bold">{option.pricePerM2}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mínimo:</span>
                        <span className="text-white font-medium">{option.minimumInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pagamento:</span>
                        <span className="text-white">{option.payment}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dados de performance */}
              <div className="mt-6 bg-[#BFA86B]/10 border border-[#BFA86B]/30 rounded-lg p-4">
                <h4 className="text-[#BFA86B] font-bold mb-3 flex items-center">
                  <Percent className="mr-2 h-5 w-5" />
                  Performance de Mercado em Taubaté
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#BFA86B]">19,1%</div>
                    <div className="text-gray-300">Rentabilidade 2024</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#BFA86B]">+17,1%</div>
                    <div className="text-gray-300">Vendas de usados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#BFA86B]">+43,4%</div>
                    <div className="text-gray-300">Contratos de locação</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 