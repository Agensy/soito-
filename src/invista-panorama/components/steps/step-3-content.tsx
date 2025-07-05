"use client"

import { motion } from "framer-motion"
import {
  CalendarDays,
  Milestone,
  CheckCircle2,
  FileText,
  Building,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  Award,
  Clock
} from "lucide-react"

export function Step3Content() {
  // Timeline específica do Panorama Taubaté baseada no briefing
  const timelineItems = [
    {
      date: "Set/25",
      title: "Lançamento Oficial",
      description: "Lançamento oficial do Panorama Taubaté com condições especiais para investidores.",
      icon: <Award className="h-5 w-5 text-white" />,
      color: "from-[#BFA86B] to-[#8B7355]",
      status: "Previsto",
    },
    {
      date: "Mar/26",
      title: "Início das Obras",
      description: "Começo da construção do Residencial Panorama Taubaté após aprovações e licenças.",
      icon: <Building className="h-5 w-5 text-white" />,
      color: "from-[#BFA86B] to-[#8B7355]",
      status: "Previsto",
    },
    {
      date: "Dez/26",
      title: "Primeira Fase Concluída",
      description: "Conclusão das fundações e estruturas principais das torres do empreendimento.",
      icon: <Milestone className="h-5 w-5 text-white" />,
      color: "from-[#BFA86B] to-[#8B7355]",
      status: "Previsto",
    },
    {
      date: "Jun/27",
      title: "Fase de Acabamentos",
      description: "Início dos acabamentos internos dos apartamentos e áreas comuns.",
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
      color: "from-[#BFA86B] to-[#8B7355]",
      status: "Previsto",
    },
    {
      date: "Mar/28",
      title: "Entrega das Unidades",
      description: "Entrega oficial das unidades aos proprietários e início do período de garantia.",
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      color: "from-[#BFA86B] to-[#8B7355]",
      status: "Meta",
    },
  ]

  const developmentPhases = [
    {
      title: "Fase 1: Planejamento e Aprovações",
      period: "Set/25 - Mar/26",
      description: "Lançamento oficial, captação de investidores e obtenção de todas as licenças necessárias para o início das obras.",
      status: "Planejado",
      color: "border-[#BFA86B]/30",
      details: [
        "Lançamento oficial do empreendimento",
        "Captação de investidores qualificados",
        "Aprovações e licenças municipais",
        "Contratação de construtora e fornecedores"
      ]
    },
    {
      title: "Fase 2: Fundação e Estrutura",
      period: "Mar/26 - Dez/26",
      description: "Execução das fundações e estruturas principais seguindo rigorosos padrões de qualidade e segurança.",
      status: "Planejado",
      color: "border-[#BFA86B]/30",
      details: [
        "Preparação e terraplenagem do terreno",
        "Execução das fundações",
        "Construção das estruturas de concreto",
        "Instalações básicas de infraestrutura"
      ]
    },
    {
      title: "Fase 3: Alvenaria e Instalações",
      period: "Jan/27 - Jun/27",
      description: "Construção das paredes e instalações elétricas, hidráulicas e de gás para conforto dos futuros moradores.",
      status: "Planejado",
      color: "border-[#BFA86B]/30",
      details: [
        "Alvenaria e vedações",
        "Instalações elétricas completas",
        "Instalações hidráulicas e sanitárias",
        "Instalações de gás e automação"
      ]
    },
    {
      title: "Fase 4: Acabamentos e Áreas Comuns",
      period: "Jul/27 - Fev/28",
      description: "Finalização dos acabamentos internos das unidades e construção das áreas de lazer e uso comum.",
      status: "Planejado", 
      color: "border-[#BFA86B]/30",
      details: [
        "Acabamentos internos dos apartamentos",
        "Construção das áreas de lazer",
        "Paisagismo e áreas verdes",
        "Instalação de equipamentos"
      ]
    },
    {
      title: "Fase 5: Entrega e Pós-obra",
      period: "Mar/28",
      description: "Entrega das unidades aos proprietários e início do período de garantia com suporte técnico.",
      status: "Meta",
      color: "border-[#BFA86B]/50",
      details: [
        "Vistoria final das unidades",
        "Entrega das chaves aos proprietários",
        "Manual do proprietário",
        "Período de garantia e assistência técnica"
      ]
    },
  ]

  return (
    <div className="text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CalendarDays className="inline-block mr-3 text-[#BFA86B]" />
        Cronograma do Projeto
      </motion.h2>

      {/* Hero Section com informações do cronograma */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[50vh] sm:h-[60vh] rounded-xl overflow-hidden mb-8 md:mb-12 bg-gradient-to-br from-[#BFA86B]/20 to-[#0B0B0B]/80"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <div className="inline-block bg-[#BFA86B]/90 text-black text-xs sm:text-sm font-bold py-1 px-2 sm:px-3 rounded-full mb-1 sm:mb-2">
              CRONOGRAMA DEFINIDO
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Acompanhe o desenvolvimento do seu <span className="text-[#BFA86B]">investimento</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
              Cronograma detalhado do Panorama Taubaté com marcos bem definidos e total transparência no processo
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <CalendarDays className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">Set/25 - Mar/28</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">Garantia Soito Inc</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-[#BFA86B]/30 flex items-center text-xs sm:text-sm">
                <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-[#BFA86B] mr-1 sm:mr-2" />
                <span className="text-[#BFA86B] font-medium">Acompanhamento total</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] p-6 sm:p-8 rounded-xl mb-10 border border-[#BFA86B]/20 shadow-xl relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BFA86B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BFA86B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex items-center mb-6 relative z-10">
          <div className="bg-gradient-to-br from-[#BFA86B] to-[#8B7355] p-3 rounded-xl shadow-lg shadow-[#BFA86B]/20 mr-4">
            <CalendarDays className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#BFA86B]">Timeline do Projeto</h3>
        </div>

        <div className="relative z-10">
          <p className="text-gray-200 mb-8 leading-relaxed">
            O <strong>Panorama Taubaté</strong> segue um cronograma rigoroso, com etapas bem definidas e prazos 
            estabelecidos. Com a expertise da Soito Inc, garantimos transparência e segurança em todo o processo 
            de desenvolvimento.
          </p>

          <div className="relative pl-6 sm:pl-8 space-y-8 sm:space-y-12 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-[#BFA86B] before:via-[#8B7355] before:to-[#BFA86B]">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-0 top-1 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-[#BFA86B] bg-[#0B0B0B] flex items-center justify-center">
                  <div className={`bg-gradient-to-r ${item.color} h-6 w-6 rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 sm:p-5 rounded-lg border border-white/10 hover:border-[#BFA86B]/30 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#BFA86B] bg-[#BFA86B]/10 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 sm:mt-0 bg-white/5 px-2 py-1 rounded">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-medium text-white text-base sm:text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Fases detalhadas de desenvolvimento */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <h3 className="text-xl md:text-2xl font-bold text-[#BFA86B] mb-6 text-center flex items-center justify-center">
          <Milestone className="mr-3" />
          Fases Detalhadas de Desenvolvimento
        </h3>

        <div className="grid gap-6 md:gap-8">
          {developmentPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className={`bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] p-6 rounded-xl border ${phase.color} shadow-xl hover:border-[#BFA86B]/50 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#BFA86B] text-black text-xs font-bold px-2 py-1 rounded mr-3">
                      {phase.status}
                    </span>
                    <span className="text-sm text-[#BFA86B] font-medium">{phase.period}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-gray-200 leading-relaxed">{phase.description}</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="text-sm font-medium text-[#BFA86B] mb-3">Principais atividades:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phase.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-[#BFA86B] mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Informações de garantia e acompanhamento */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-[#BFA86B]/10 border border-[#BFA86B]/30 rounded-xl p-6 sm:p-8"
      >
        <h3 className="text-xl font-bold text-[#BFA86B] mb-4 text-center flex items-center justify-center">
          <Shield className="mr-3" />
          Garantias e Transparência
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-[#BFA86B]/20 p-4 rounded-lg border border-[#BFA86B]/30 mb-3">
              <Users className="h-8 w-8 text-[#BFA86B] mx-auto mb-2" />
              <h4 className="font-bold text-white">Acompanhamento Personalizado</h4>
            </div>
            <p className="text-sm text-gray-300">
              Relatórios mensais de progresso e visitas guiadas ao canteiro de obras
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#BFA86B]/20 p-4 rounded-lg border border-[#BFA86B]/30 mb-3">
              <Shield className="h-8 w-8 text-[#BFA86B] mx-auto mb-2" />
              <h4 className="font-bold text-white">Garantia Soito Inc</h4>
            </div>
            <p className="text-sm text-gray-300">
              SCP com recompra garantida e seguro de cumprimento de prazo
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#BFA86B]/20 p-4 rounded-lg border border-[#BFA86B]/30 mb-3">
              <Clock className="h-8 w-8 text-[#BFA86B] mx-auto mb-2" />
              <h4 className="font-bold text-white">Pontualidade</h4>
            </div>
            <p className="text-sm text-gray-300">
              Histórico de 100% de entrega no prazo em projetos anteriores da Soito Inc
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-200 mb-4">
            <strong>Data de entrega confirmada:</strong> <span className="text-[#BFA86B] font-bold">Março de 2028</span>
          </p>
          <p className="text-sm text-gray-400">
            Prazo garantido pela Soito Inc com base em mais de 15 anos de experiência no mercado imobiliário
          </p>
        </div>
      </motion.div>
    </div>
  )
} 