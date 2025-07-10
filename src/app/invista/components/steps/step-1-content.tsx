"use client"

import { ImageSlider } from "../image-slider"
import {
  Check,
  Home,
  MapPin,
  Percent,
  Shield,
  TrendingUp,
  Clock,
  BadgeCheck,
  Building,
  Users,
  Landmark,
  BarChart2,
  Palmtree,
  Dumbbell,
  Gamepad2,
  Trees,
  CircleDot,
  CircleCheck,
  Sparkles,
  Calendar,
  LineChart,
  BarChart3,
  CheckCircle2,
  BarChart,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useJourney } from "../../context/journey-context"
import { useIsMobile } from "@/hooks/use-mobile"

export function Step1Content() {
  const [showDetails, setShowDetails] = useState(false)
  const [activeTab, setActiveTab] = useState("visaoGeral")
  const [activePhase, setActivePhase] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const graphRef = useRef(null)
  const isMobile = useIsMobile()

  const { goToStep } = useJourney()

  // Dados mensais de valorização do m²
  const monthlyPrices = [
    { month: 1, price: 3500.0 },
    { month: 2, price: 3561.25 },
    { month: 3, price: 3623.57 },
    { month: 4, price: 3686.98 },
    { month: 5, price: 3751.51 },
    { month: 6, price: 3817.16 },
    { month: 7, price: 3883.96 },
    { month: 8, price: 3951.93 },
    { month: 9, price: 4021.09 },
    { month: 10, price: 4091.46 },
    { month: 11, price: 4163.06 },
    { month: 12, price: 4235.91 },
    { month: 13, price: 4310.04 },
    { month: 14, price: 4385.46 },
    { month: 15, price: 4462.21 },
    { month: 16, price: 4540.3 },
    { month: 17, price: 4619.75 },
    { month: 18, price: 4700.6 },
    { month: 19, price: 4782.86 },
    { month: 20, price: 4866.56 },
    { month: 21, price: 4951.72 },
    { month: 22, price: 5038.38 },
    { month: 23, price: 5126.55 },
    { month: 24, price: 5216.27 },
  ]

  // Calcular a valorização percentual para cada mês
  const calculatePercentage = (currentPrice: number) => {
    const initialPrice = monthlyPrices[0]?.price || 3500
    return (((currentPrice - initialPrice) / initialPrice) * 100).toFixed(1)
  }

  // Efeito para animar a progressão quando mudar de fase
  useEffect(() => {
    if (activePhase === 0) {
      setCurrentMonth(1)
    } else if (activePhase === 1) {
      animateToMonth(12)
    } else if (activePhase === 2) {
      animateToMonth(24)
    }
  }, [activePhase])

  // Função para animar a progressão até um determinado mês
  const animateToMonth = (targetMonth: number) => {
    setIsAnimating(true)
    let current = currentMonth
    const interval = setInterval(() => {
      if (current < targetMonth) {
        current += 1
        setCurrentMonth(current)
      } else {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 50)
  }

  const residencialSlides = [
    {
      image: "/morada-exterior.webp",
      title: "Arquitetura Moderna e Funcional",
      subtitle:
        "16 torres com 320 unidades de apartamentos de 2 dormitórios em um projeto que une conforto e qualidade de vida",
      tag: "Fachada do Empreendimento",
      icon: <Building className="h-4 w-4" />,
    },
    {
      image: "/morada-lazer-sunset.webp",
      title: "Áreas de Lazer Completas",
      subtitle: "Espaços planejados para o seu bem-estar, com áreas verdes e opções de lazer para todas as idades",
      tag: "Lazer e Bem-estar",
      icon: <Palmtree className="h-4 w-4" />,
    },
    {
      image: "/morada-quadra.webp",
      title: "Espaço para Esportes e Atividades",
      subtitle: "Quadra poliesportiva e áreas para prática de atividades físicas em meio à natureza",
      tag: "Esportes e Recreação",
      icon: <Dumbbell className="h-4 w-4" />,
    },
    {
      image: "/morada-playground.webp",
      title: "Playground Completo para as Crianças",
      subtitle: "Área recreativa segura e moderna para os pequenos se divertirem com toda segurança",
      tag: "Diversão Infantil",
      icon: <Gamepad2 className="h-4 w-4" />,
    },
    {
      image: "/morada-paisagismo.webp",
      title: "Paisagismo Planejado",
      subtitle: "Áreas verdes com paisagismo cuidadosamente planejado para proporcionar contato com a natureza",
      tag: "Áreas Verdes",
      icon: <Trees className="h-4 w-4" />,
    },
  ]

  const phases = [
    {
      title: "Fase 1: Investimento",
      description: "Preço por m² mais baixo, ideal para investidores que buscam maior valorização",
      icon: <CircleDot className="h-5 w-5" />,
      color: "green-500",
      percentage: "0%",
      status: "Você está aqui",
      pricePerM2: "R$ 3.500,00",
      timeframe: "Momento atual",
      month: 1,
      highlights: ["Melhor momento para valorização", "Preço inicial mais baixo", "Maior potencial de valorização"],
      riskLevel: "Baixo",
    },
    {
      title: "Fase 2: Construção",
      description: "Valorização gradual conforme o avanço da obra e desenvolvimento da região",
      icon: <CircleDot className="h-5 w-5" />,
      color: "green-600",
      percentage: "21%",
      status: "Em 12 meses",
      pricePerM2: "R$ 4.235,91",
      timeframe: "12 meses",
      month: 12,
      highlights: ["Obra em andamento", "Valorização constante", "Infraestrutura em desenvolvimento"],
      riskLevel: "Médio-Baixo",
    },
    {
      title: "Fase 3: Consolidação",
      description: "Valorização máxima com a entrega do empreendimento e ocupação da região",
      icon: <CircleCheck className="h-5 w-5" />,
      color: "green-700",
      percentage: "49%",
      status: "Em 24 meses",
      pricePerM2: "R$ 5.216,27",
      timeframe: "24 meses",
      month: 24,
      highlights: ["Empreendimento concluído", "Valorização total realizada", "Alta demanda para revenda"],
      riskLevel: "Mínimo",
    },
  ]

  // Rotação automática entre as fases
  useEffect(() => {
    if (!isAnimating) {
      const rotationInterval = setInterval(() => {
        setActivePhase((prev) => (prev === phases.length - 1 ? 0 : prev + 1))
      }, 8000) // Muda a cada 8 segundos

      return () => clearInterval(rotationInterval)
    }
  }, [isAnimating, phases.length])

  const comparisonData = [
    { name: "Panorama", returnRate: 0.21, color: "from-primary-500 to-primary-600" },
    { name: "Fundos Imobiliários", returnRate: 0.12, color: "from-gray-500 to-gray-700" },
    { name: "CDB", returnRate: 0.09, color: "from-gray-500 to-gray-700" },
    { name: "Poupança", returnRate: 0.06, color: "from-gray-500 to-gray-700" },
  ]

  return (
    <div className="text-white">
      {/* Hero Section - Reformulado com foco em conversão */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-xl overflow-hidden mb-8 md:mb-12"
      >
        <Image
          src="/morada-hero.webp"
          alt="Vista aérea de Araçariguama"
          fill
          className="object-cover"
          priority
        />
        {/* Gradientes reorganizados para melhor efeito visual */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-background/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-background/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12 w-full md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            {/* Tag de exclusividade - Estímulo de escassez */}
            <div className="inline-block bg-primary-500 text-white text-xs sm:text-sm font-bold py-1 px-2 sm:px-3 rounded-full mb-1 sm:mb-2 animate-pulse">
              LANÇAMENTO EXCLUSIVO
            </div>

            {/* Headline principal focada no benefício - Percepção de valor */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              <span className="text-gradient">Panorama Taubaté:</span>{" "}
              <span className="block sm:inline">sua oportunidade de valorização</span>
            </h2>

            {/* Subheadline com proposta de valor - Evidência social */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
              Empreendimento com valorização projetada de 1,7% a.m. e garantia da Caixa
            </p>

            {/* Resumo visual dos benefícios */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-4">
              <div
                className="glass-adaptive backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up text-xs sm:text-sm"
                style={{ animationDelay: "0.5s" }}
              >
                <TrendingUp className="h-3 w-3 sm:h-5 sm:w-5 text-primary-500 mr-1 sm:mr-2" />
                <span className="text-text-secondary font-medium">19,1%* de rentabilidade anual</span>
              </div>
              <div
                className="glass-adaptive backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up text-xs sm:text-sm"
                style={{ animationDelay: "0.6s" }}
              >
                <Clock className="h-3 w-3 sm:h-5 sm:w-5 text-primary-500 mr-1 sm:mr-2" />
                <span className="text-text-secondary font-medium">24 meses</span>
              </div>
              <div
                className="glass-adaptive backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up text-xs sm:text-sm"
                style={{ animationDelay: "0.7s" }}
              >
                <Landmark className="h-3 w-3 sm:h-5 sm:w-5 text-primary-500 mr-1 sm:mr-2" />
                <span className="text-text-secondary font-medium">Garantia da Caixa</span>
              </div>
            </div>

            {/* Badges de credibilidade - Elementos de confiança */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
              <div className="glass-adaptive backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary-500/30 flex items-center text-xs sm:text-sm">
                <BadgeCheck className="h-3 w-3 sm:h-5 sm:w-5 text-primary-500 mr-1 sm:mr-2" />
                <span className="text-text-secondary font-medium">Financiado pela Caixa</span>
              </div>
              <div className="glass-adaptive backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary-500/30 flex items-center text-xs sm:text-sm">
                <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-primary-500 mr-1 sm:mr-2" />
                <span className="text-text-secondary font-medium">Baixo Risco</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* NOVO BLOCO: Por que investir - Visualmente aprimorado com elementos visuais */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-background-secondary rounded-xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-10 relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo - Percepção visual */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary-500 flex items-center mb-4 sm:mb-5 relative z-10">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-1 sm:p-1.5 rounded-full mr-2 shadow-golden">
            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </div>
          Por que investir no Panorama Taubaté
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 relative z-10">
          {/* Item 1: Valorização do m² - Evidência de valor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-primary-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-1.5 shadow-golden mr-2 group-hover:scale-110 transition-transform duration-300">
                <BarChart2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-text-primary">Rentabilidade superior</h4>
            </div>
            <p className="text-xs text-text-secondary ml-8">
              19,1% ao ano, superando fundos imobiliários e outras aplicações, garantido pela sólida demanda habitacional na região.
            </p>
          </motion.div>

          {/* Item 2: Localização estratégica - Percepção de oportunidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-primary-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-1.5 shadow-golden mr-2 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-text-primary">Localização estratégica</h4>
            </div>
            <p className="text-xs text-text-secondary ml-8">
              No coração de Taubaté, com acesso facilitado às principais vias e desenvolvimento urbano acelerado.
            </p>
          </motion.div>

          {/* Item 3: Alta demanda - Estímulo de urgência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl group hover:border-primary-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-1.5 shadow-golden mr-2 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <h4 className="text-sm sm:text-base font-medium text-text-primary">Demanda garantida</h4>
            </div>
            <p className="text-xs text-text-secondary ml-8">
              Alta demanda habitacional na região com programa Minha Casa Minha Vida e crescimento populacional constante.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* NOVO BLOCO: Detalhes do empreendimento com slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-8 sm:mb-12 md:mb-16"
      >
        <div className="bg-gradient-to-r from-primary-500/20 to-background-secondary p-4 sm:p-6 rounded-t-xl border-b border-primary-500/20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary text-center flex flex-col sm:flex-row items-center justify-center">
            <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500 mb-2 sm:mb-0 sm:mr-3" />
            <span>Conheça o Panorama Taubaté</span>
          </h3>
        </div>

        <ImageSlider
          slides={residencialSlides}
          className="rounded-t-none rounded-b-xl h-[300px] sm:h-[400px] md:h-[500px]"
        />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-background-secondary to-background-tertiary p-4 sm:p-6 rounded-xl border border-primary-500/20 shadow-xl">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 sm:p-3 rounded-xl shadow-golden mr-3 sm:mr-4">
                <Home className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-medium text-primary-500">Apartamentos</h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">2 dormitórios (56,61 a 60,36m²)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">
                  1 suíte com varanda gourmet
                </span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Sala integrada</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Área de serviço</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">1 ou 2 vagas de garagem</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-background-secondary to-background-tertiary p-4 sm:p-6 rounded-xl border border-primary-500/20 shadow-xl">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 sm:p-3 rounded-xl shadow-lg shadow-golden mr-3 sm:mr-4">
                <Palmtree className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-medium text-primary-500">Lazer</h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Piscina</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Quadra poliesportiva</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Playground completo</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Espaço fitness</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Salão de festas</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Áreas verdes</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-background-secondary to-background-tertiary p-4 sm:p-6 rounded-xl border border-primary-500/20 shadow-xl">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 sm:p-3 rounded-xl shadow-lg shadow-golden mr-3 sm:mr-4">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-medium text-primary-500">Segurança</h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Portaria 24 horas</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Circuito de câmeras</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Cerca elétrica</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Controle de acesso</span>
              </li>
              <li className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-text-secondary">Iluminação estratégica</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Por Que Agora é o Melhor Momento para Entrar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex items-center mb-6 relative z-10">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">
            Por Que Agora é o Melhor Momento para Entrar
          </h3>
        </div>

        <div className="relative z-10">
          <p className="text-gray-200 mb-6 leading-relaxed">
            O timing para investir no Residencial Panorama não poderia ser mais favorável. O mercado imobiliário
            brasileiro está em plena expansão, com uma demanda crescente por habitações de qualidade, especialmente em
            regiões estratégicas como Araçariguama.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-5 rounded-lg border-l-4 border-primary-500">
              <div className="flex items-center mb-3">
                <BarChart3 className="h-5 w-5 text-primary-500 mr-2" />
                <h4 className="font-medium text-primary-500">Rentabilidade anual de 19,1%</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Imóveis residenciais em áreas em desenvolvimento, como Araçariguama, têm apresentado valorizações
                expressivas, superando outros tipos de investimento tradicionais.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-lg border-l-4 border-primary-500">
              <div className="flex items-center mb-3">
                <Home className="h-5 w-5 text-primary-500 mr-2" />
                <h4 className="font-medium text-primary-500">Alta demanda e escassez de oferta</h4>
              </div>
              <p className="text-sm text-text-secondary">
                O déficit habitacional no Brasil continua a crescer, criando um cenário ideal para empreendimentos como
                este, que atendem diretamente à necessidade de moradias acessíveis e bem planejadas.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-lg border-l-4 border-primary-500">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                <h4 className="font-medium text-primary-500">Araçariguama em crescimento</h4>
              </div>
              <p className="text-sm text-text-secondary">
                A cidade está em franco desenvolvimento, com qualidade de vida em alta e proximidade a grandes centros
                urbanos como São Paulo e Sorocaba, o que impulsiona ainda mais o potencial de valorização do
                empreendimento.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-500/20 to-background-tertiary p-6 rounded-lg border border-primary-500/30">
            <h4 className="text-lg font-medium text-primary-500 mb-4 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-primary-500" />
              Dados que comprovam o momento oportuno
            </h4>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Crescimento do PIB da região</span>
                  <span className="text-primary-500 font-medium">12,5% ao ano</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Valorização imobiliária na região</span>
                  <span className="text-primary-500 font-medium">15% ao ano</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Crescimento populacional</span>
                  <span className="text-primary-500 font-medium">3,2% ao ano</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "55%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comparação com outros investimentos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex items-center mb-6 relative z-10">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <BarChart className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">
            Comparação entre Valorização vs investimentos
          </h3>
        </div>

        <div className="relative z-10">
          <p className="text-gray-200 mb-8 leading-relaxed">
            Veja como o Programa de Valorização Residencial Panorama se compara a investimentos populares no
            mercado financeiro. Com uma rentabilidade anual de 21%*, este empreendimento oferece um retorno muito
            superior às alternativas tradicionais.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[...comparisonData]
                .sort((a, b) => a.returnRate - b.returnRate)
                .map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span
                        className={item.name === "Panorama" ? "text-primary-500 font-medium" : "text-text-secondary"}
                      >
                        {item.name}
                      </span>
                      <span
                        className={item.name === "Panorama" ? "text-primary-500 font-medium" : "text-text-secondary"}
                      >
                        {(item.returnRate * 100).toFixed(1)}% a.a.
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.returnRate / 0.21) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-primary-500/20">
              <h4 className="text-lg font-medium text-primary-500 mb-4 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-primary-500" />
                Vantagens do investimento imobiliário
              </h4>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-500/30 p-2 rounded-full mr-3 flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary text-sm mb-1">Valorização constante</h5>
                    <p className="text-xs text-text-secondary">
                      Imóveis tendem a valorizar com o tempo, especialmente em regiões em desenvolvimento como
                      Araçariguama
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500/30 p-2 rounded-full mr-3 flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary text-sm mb-1">Segurança do investimento</h5>
                    <p className="text-xs text-text-secondary">
                      Com a garantia da Caixa Econômica Federal, seu investimento está protegido contra riscos de
                      mercado
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500/30 p-2 rounded-full mr-3 flex-shrink-0">
                    <Percent className="h-4 w-4 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary text-sm mb-1">Isenção de impostos</h5>
                    <p className="text-xs text-text-secondary">
                      Aproveite a isenção de impostos sobre os lucros obtidos, maximizando seu retorno financeiro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bloco consolidado com informações sobre a valorização imobiliária - Redesenhado para evitar sobreposições */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 shadow-xl mb-8 sm:mb-12 md:mb-16 overflow-hidden"
      >
        {/* Cabeçalho com título principal */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 sm:p-6 md:p-8 border-b border-gray-200">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center flex flex-col sm:flex-row items-center justify-center">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary-600 mb-2 sm:mb-0 sm:mr-3" />
            <span>
              Valorização com <span className="text-primary-600 mx-1 sm:mx-2">estimativa de crescimento imobiliário</span>
            </span>
          </h3>
        </div>

        {/* Jornada de valorização - Timeline redesenhada para evitar sobreposições */}
        <div className="p-4 sm:p-6 md:p-8 bg-white">
          <h4 className="font-medium text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 text-center">
            Acompanhe a jornada de crescimento da sua valorização
          </h4>

          {/* Timeline horizontal redesenhada */}
          <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            {/* Linha de progresso fixa */}
            <div className="hidden md:block h-1 bg-gray-200 absolute top-16 left-0 right-0 z-0" />
            <div
              className="hidden md:block h-1 bg-gradient-to-r from-primary-500 to-primary-600 absolute top-16 left-0 z-10 transition-all duration-700"
              style={{
                width: activePhase === 0 ? "0%" : activePhase === 1 ? "50%" : "100%",
              }}
            />

            {/* Fases em cards separados */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0 md:space-x-4">
              {phases.map((phase, index) => (
                <div key={index} className="relative flex-1">
                  {/* Card da fase */}
                  <div
                    className={`bg-white rounded-lg shadow-md border transition-all duration-300 ${
                      activePhase === index ? "border-primary-500 ring-2 ring-primary-100" : "border-gray-200 opacity-70"
                    }`}
                  >
                    {/* Cabeçalho do card */}
                    <div
                      className={`p-3 rounded-t-lg ${
                        activePhase === index ? "bg-gradient-to-r from-primary-500 to-primary-600" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activePhase === index ? "bg-white text-primary-600" : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {index === 2 ? <CircleCheck className="h-5 w-5" /> : <CircleDot className="h-5 w-5" />}
                          </div>
                          <h5
                            className={`ml-2 font-bold text-sm ${
                              activePhase === index ? "text-white" : "text-gray-700"
                            }`}
                          >
                            Fase {index + 1}
                          </h5>
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            activePhase === index ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {phase.timeframe}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo do card */}
                    <div className="p-4">
                      <h6 className="font-semibold text-gray-800 mb-2">Start do Projeto</h6>
                      <p className="text-sm text-gray-600 mb-3">{phase.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-primary-50 p-2 rounded-lg">
                          <span className="text-xs text-gray-500 block">Valor do m²</span>
                          <span className="text-base font-bold text-primary-600">{phase.pricePerM2}</span>
                        </div>
                        <div className="bg-primary-50 p-2 rounded-lg">
                          <span className="text-xs text-gray-500 block">Estimativa de valorização</span>
                          <span className="text-base font-bold text-primary-600">{phase.percentage}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-3">
                        <h6 className="text-xs font-semibold text-gray-500 mb-2">DESTAQUES:</h6>
                        <ul className="space-y-1">
                          {phase.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-xs text-gray-700">
                              <Check className="h-3 w-3 text-primary-500 mr-1 mt-0.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Botão de seleção */}
                    <div className="p-3 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                      <button
                        onClick={() => setActivePhase(index)}
                        className={`w-full py-1.5 rounded text-sm font-medium transition-all ${
                          activePhase === index
                            ? "bg-primary-600 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {activePhase === index ? "Fase atual" : "Ver detalhes"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfico de evolução do valor do m² - Redesenhado conforme a imagem de referência */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md mb-6 overflow-hidden">
            <div className="border-b border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-2 sm:mb-0">
                <LineChart className="h-5 w-5 text-primary-600 mr-2" />
                <h5 className="text-lg font-semibold text-gray-800">Estimativa de valorização do m²</h5>
              </div>
              <div className="flex items-center bg-primary-50 px-3 py-1 rounded-full self-start sm:self-auto">
                <Calendar className="h-4 w-4 text-primary-600 mr-1" />
                <span className="text-sm font-medium text-primary-600">Mês {currentMonth} de 24</span>
              </div>
            </div>

            {/* Gráfico de linha */}
            <div className="h-[300px] w-full mt-4 mb-8 px-6">
              <div className="relative h-full w-full p-4">
                {/* Linhas de grade horizontais */}
                <div className="absolute left-0 right-0 top-0 bottom-0">
                  <div className="h-full flex flex-col justify-between">
                    {[5.2, 4.8, 4.4, 4.0, 3.5].map((value, index) => (
                      <div key={index} className="border-b border-gray-100 h-1/5 relative">
                        <span className="absolute -top-3 -left-2 text-xs text-gray-500">R${value}k</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ponto inicial (3.5k) */}
                <div
                  className="absolute w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-30"
                  style={{
                    left: "0%",
                    bottom: "0px",
                    transform: "translate(-50%, 50%)",
                  }}
                ></div>

                {/* Área preenchida em verde */}
                {currentMonth > 1 && (
                  <div
                    className="absolute bottom-0 left-0 bg-gradient-to-t from-primary-500/20 to-primary-500/5 transition-all duration-300"
                    style={{
                      width: `${((currentMonth - 1) / 23) * 100}%`,
                      height: `${(((monthlyPrices[currentMonth - 1]?.price || 3500) - 3500) / (5216.27 - 3500)) * 300}px`,
                    }}
                  ></div>
                )}

                {/* Linha verde até o mês atual */}
                <div className="absolute bottom-0 left-0 z-20">
                  {monthlyPrices.slice(0, currentMonth).map((item, i) => {
                    if (i === 0) return null
                    const prevX = ((i - 1) / 23) * 100
                    const prevY = (((monthlyPrices[i - 1]?.price || 3500) - 3500) / (5216.27 - 3500)) * 300
                    const currX = (i / 23) * 100
                    const currY = (((item?.price || 3500) - 3500) / (5216.27 - 3500)) * 300

                    return (
                      <div
                        key={i}
                        className="absolute bg-primary-500 h-1.5 origin-left transform -translate-y-1/2 z-20"
                        style={{
                          width: `${currX - prevX}%`,
                          left: `${prevX}%`,
                          bottom: `${prevY}px`,
                          transform: `rotate(${Math.atan2(currY - prevY, (currX - prevX) * 3)}rad)`,
                          transformOrigin: "left bottom",
                          height: "5px",
                        }}
                      ></div>
                    )
                  })}
                </div>

                {/* Ponto atual */}
                {currentMonth > 1 && (
                  <div
                    className="absolute w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-30"
                    style={{
                      left: `${((currentMonth - 1) / 23) * 100}%`,
                      bottom: `${(((monthlyPrices[currentMonth - 1]?.price || 3500) - 3500) / (5216.27 - 3500)) * 300}px`,
                      transform: "translate(-50%, 50%)",
                    }}
                  ></div>
                )}

                {/* Marcadores de meses */}
                <div className="absolute left-0 right-0 bottom-[-24px] flex justify-between">
                  <span className="text-xs text-gray-500">1</span>
                  <span className="text-xs text-gray-500">7</span>
                  <span className="text-xs text-gray-500">12</span>
                  <span className="text-xs text-gray-500">18</span>
                  <span className="text-xs text-gray-500">24</span>
                </div>
              </div>
            </div>

            {/* Controle deslizante - Redesenhado conforme a imagem de referência */}
            <div className="px-6 pb-6 pt-2">
              <div className="flex items-center mb-3">
                <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                <label htmlFor="month-slider" className="block text-sm font-medium text-gray-700">
                  Deslize para visualizar a evolução mês a mês
                </label>
              </div>
              <div className="relative">
                <input
                  id="month-slider"
                  type="range"
                  min="1"
                  max="24"
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  style={{
                    background: `linear-gradient(to right, #BFA86B 0%, #BFA86B ${
                      ((currentMonth - 1) / 23) * 100
                    }%, #e5e7eb ${((currentMonth - 1) / 23) * 100}%, #e5e7eb 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Detalhes da fase atual - Redesenhado para maior clareza */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h6 className="text-sm text-gray-500 font-medium mb-2 flex items-center">
                <span className="bg-primary-100 p-1 rounded-full mr-2">
                  <TrendingUp className="h-4 w-4 text-primary-600" />
                </span>
                Valor do m²
              </h6>
              <p className="text-2xl font-bold text-primary-600">
                {currentMonth > 0 && monthlyPrices[currentMonth - 1]
                  ? `R$ ${monthlyPrices[currentMonth - 1].price.toFixed(2)}*`
                  : "R$ 3.500,00"}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" /> Mês {currentMonth}
                </p>
                {currentMonth > 1 && monthlyPrices[currentMonth - 1] && monthlyPrices[currentMonth - 2] && (
                  <p className="text-xs text-primary-600 font-medium">
                    +{(monthlyPrices[currentMonth - 1].price - monthlyPrices[currentMonth - 2].price).toFixed(2)} do mês
                    anterior
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h6 className="text-sm text-gray-500 font-medium mb-2 flex items-center">
                <span className="bg-primary-100 p-1 rounded-full mr-2">
                  <Percent className="h-4 w-4 text-primary-600" />
                </span>
                Estimativa de valorização acumulada
              </h6>
              <p className="text-2xl font-bold text-primary-600">
                {currentMonth > 1 && monthlyPrices[currentMonth - 1]
                  ? `${calculatePercentage(monthlyPrices[currentMonth - 1].price)}%*`
                  : "0%"}
              </p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
                  style={{
                    width:
                      currentMonth > 1 && monthlyPrices[currentMonth - 1] && monthlyPrices[0]
                        ? `${
                            ((monthlyPrices[currentMonth - 1].price - monthlyPrices[0].price) /
                              (monthlyPrices[23].price - monthlyPrices[0].price)) *
                            100
                          }%`
                        : "3%",
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Estimativa de valorização mensal média: <span className="text-primary-600 font-medium">1,7%* a.m</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 px-4">
        <p className="mb-2">
          Todos os valores apresentados representam estimativas de valorização baseadas em projeções de mercado.
        </p>
      </div>
    </div>
  )
}
