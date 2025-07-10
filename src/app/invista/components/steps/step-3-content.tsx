"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarDays, Milestone, CheckCircle2, FileText, Building, TrendingUp, Shield } from "lucide-react"
import { useJourney } from "../../context/journey-context"

export function Step3Content() {
  const { nextStep } = useJourney()

  const timelineItems = [
    {
      date: "Mai/25",
      title: "Fase de captação de investidores",
      description: "Início do processo de captação de investidores para o projeto Panorama Taubaté.",
      icon: <FileText className="h-5 w-5 text-white" />,
      color: "from-primary-500 to-primary-600",
    },
    {
      date: "Jun/25",
      title: "Registro da incorporação e início das vendas",
      description: "Registro legal da incorporação imobiliária e lançamento oficial das vendas do empreendimento.",
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
      color: "from-primary-500 to-primary-600",
    },
    {
      date: "Set/25",
      title: "Contratação do financiamento e lançamento oficial",
      description: "Assinatura do contrato de financiamento com a Caixa e lançamento oficial do empreendimento.",
      icon: <Building className="h-5 w-5 text-white" />,
      color: "from-primary-500 to-primary-600",
    },
    {
      date: "Nov/25",
      title: "Início das obras",
      description: "Começo da construção do Panorama Taubaté.",
      icon: <Milestone className="h-5 w-5 text-white" />,
      color: "from-primary-500 to-primary-600",
    },
    {
      date: "Nov/27",
      title: "Conclusão e entrega das unidades",
      description: "Finalização das obras e entrega das unidades aos proprietários.",
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      color: "from-primary-500 to-primary-600",
    },
  ]

  const developmentPhases = [
    {
      title: "Fase 1: Planejamento e Aprovações",
      period: "Mai/25 - Jul/25",
      description:
        "Período dedicado à captação de investidores, registro da incorporação, início das vendas e obtenção de todas as licenças necessárias para o início das obras.",
      status: "Planejado",
    },
    {
      title: "Fase 2: Fundação e Estrutura",
      period: "Nov/25 - Jun/26",
      description:
        "Execução das fundações e estruturas principais das 16 torres do empreendimento, seguindo rigorosos padrões de qualidade e segurança.",
      status: "Planejado",
    },
    {
      title: "Fase 3: Alvenaria e Instalações",
      period: "Jul/26 - Mar/27",
      description:
        "Construção das paredes, instalações elétricas, hidráulicas e de gás, garantindo conforto e funcionalidade para os futuros moradores.",
      status: "Planejado",
    },
    {
      title: "Fase 4: Acabamentos e Áreas Comuns",
      period: "Abr/27 - Nov/27",
      description:
        "Finalização dos acabamentos internos das unidades e construção das áreas de lazer e uso comum do condomínio.",
      status: "Planejado",
    },
    {
      title: "Fase 5: Entrega e Pós-obra",
      period: "Dez/27",
      description:
        "Entrega das unidades aos proprietários e início do período de garantia, com suporte técnico para eventuais ajustes.",
      status: "Planejado",
    },
  ]

  return (
    <div className="text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cronograma do Projeto
      </motion.h2>

      {/* Hero Section - Atualizada com a nova imagem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] rounded-xl overflow-hidden mb-12"
      >
        <Image
          src="/morada-area-lazer-quadra.webp"
          alt="Área de Lazer do Panorama"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e33] via-[#1a2e33]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e33]/80 via-transparent to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 w-full md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary-500 text-white text-sm font-bold py-1 px-3 rounded-full mb-2">
              DESENVOLVIMENTO PLANEJADO
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Acompanhe o <span className="text-gradient">desenvolvimento</span> do seu investimento
            </h3>

            <p className="text-xl text-text-secondary">
              Conheça o cronograma detalhado do Panorama Taubaté e acompanhe cada etapa com transparência e
              segurança
            </p>
            {/* Resumo visual dos benefícios */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="glass-adaptive backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <CalendarDays className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-text-secondary font-medium">Cronograma definido</span>
              </div>
              <div
                className="glass-adaptive backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Milestone className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-text-secondary font-medium">Etapas claras</span>
              </div>
              <div
                className="glass-adaptive backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <Shield className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-text-secondary font-medium">Garantia de entrega</span>
              </div>
              <div
                className="glass-adaptive backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-text-secondary font-medium">Acompanhamento</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Linha do tempo principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex items-center mb-6 relative z-10">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <CalendarDays className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">Linha do Tempo do Projeto</h3>
        </div>

        <div className="relative z-10">
          <p className="text-gray-200 mb-8 leading-relaxed">
            O Residencial Panorama Araçáriguama segue um cronograma rigoroso, com etapas bem definidas e prazos
            estabelecidos. Com a parceria estratégica da Caixa Econômica Federal, garantimos transparência e segurança
            em todo o processo de desenvolvimento.
          </p>

          <div className="relative pl-8 space-y-12 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-primary-500 before:via-primary-600 before:to-primary-700">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-0 top-1 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-background flex items-center justify-center">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-6 w-6 rounded-full flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="bg-white/10 p-5 rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary-500 bg-primary-500/20 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 md:mt-0">
                      {index < timelineItems.length - 1 ? (
                        `${index + 1}/${timelineItems.length}`
                      ) : (
                        <span className="text-primary-500">Conclusão</span>
                      )}
                    </span>
                  </div>
                  <h4 className="font-medium text-white text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
