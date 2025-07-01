"use client"

import { motion } from "framer-motion"
import {
  Calculator,
  DollarSign,
  User,
  Phone,
  Mail,
  CalendarDays,
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  AlertCircle,
  BarChart3,
} from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { sendToWebhook, type WebhookPayload } from "../../lib/webhook-config"

export function Step2Content() {
  // Estados para a calculadora
  const [squareMeters, setSquareMeters] = useState(30)
  const [period, setPeriod] = useState("24") // "12" ou "24" meses
  const [selectedOption, setSelectedOption] = useState("option1") // option1, option2, option3
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [calculationResults, setCalculationResults] = useState(null)

  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    metrosQuadrados: squareMeters,
    opcaoInvestimento: selectedOption,
    periodo: period,
  })

  // Opções de investimento baseadas no briefing
  const investmentOptions = [
    { 
      id: "option1", 
      label: "Opção 1 - À Vista", 
      pricePerM2: 3500, 
      minimumInvestment: 105000,
      payment: "À vista",
      highlight: "Melhor preço"
    },
    { 
      id: "option2", 
      label: "Opção 2 - Parcelado", 
      pricePerM2: 3900, 
      minimumInvestment: 117000,
      payment: "30% entrada + 10x",
      highlight: "Flexibilidade"
    },
    { 
      id: "option3", 
      label: "Opção 3 - Veículo", 
      pricePerM2: 4000, 
      minimumInvestment: 300000,
      payment: "Veículo FIPE 100%",
      highlight: "Diferenciado"
    },
  ]

  // Configuração da rentabilidade baseada no briefing (19,1% a.a.)
  const annualReturn = 0.191 // 19,1% a.a.
  const maxSquareMeters = 180 // Limite de m² disponíveis
  const currentSold = 85 // Progressão de vendas simulada

  // Handlers
  const handleSquareMetersChange = (value: number) => {
    const numValue = Math.min(Number(value) || 30, maxSquareMeters - currentSold)
    setSquareMeters(numValue)
    setFormData((prev) => ({
      ...prev,
      metrosQuadrados: numValue,
    }))
  }

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
    setFormData((prev) => ({
      ...prev,
      opcaoInvestimento: value,
    }))
  }

  const handlePeriodChange = (value: string) => {
    setPeriod(value)
    setFormData((prev) => ({
      ...prev,
      periodo: value,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Função para calcular e enviar dados
  const calculateAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Obter dados da opção selecionada
      const selectedInvestment = investmentOptions.find(opt => opt.id === selectedOption)
      if (!selectedInvestment) {
        throw new Error("Opção de investimento não encontrada")
      }
      const investmentAmount = squareMeters * selectedInvestment.pricePerM2

      // Calcular rentabilidade
      const periodInYears = Number.parseInt(period) / 12
      const projectedValue = investmentAmount * Math.pow(1 + annualReturn, periodInYears)
      const totalReturn = projectedValue - investmentAmount
      const returnPercentage = (totalReturn / investmentAmount) * 100
      const monthlyReturn = totalReturn / Number.parseInt(period)

      // Preparar resultados
      const results = {
        metrosQuadrados: squareMeters,
        opcaoEscolhida: selectedInvestment.label,
        valorPorMetroQuadrado: selectedInvestment.pricePerM2,
        valorInvestido: investmentAmount,
        periodo: Number.parseInt(period),
        rentabilidadeAnual: (annualReturn * 100).toFixed(1),
        lucroTotal: totalReturn.toFixed(2),
        valorTotal: projectedValue.toFixed(2),
        percentualRetorno: returnPercentage.toFixed(1),
        retornoMensal: monthlyReturn.toFixed(2),
        formaPagamento: selectedInvestment.payment,
      }

      // Payload para webhook n8n
      const webhookData: WebhookPayload = {
        // Dados pessoais
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        
        // Dados do investimento
        projeto: "Panorama Taubaté",
        metrosQuadrados: results.metrosQuadrados,
        opcaoInvestimento: results.opcaoEscolhida,
        valorInvestido: results.valorInvestido,
        periodo: results.periodo,
        
        // Resultados da simulação
        lucroProjetado: results.lucroTotal,
        rentabilidadeAnual: results.rentabilidadeAnual,
        percentualRetorno: results.percentualRetorno,
        retornoMensal: results.retornoMensal,
        
        // Metadados
        dataSimulacao: new Date().toISOString(),
        fonte: "Landing Page /invista-panorama",
        userAgent: navigator.userAgent,
      }

      // Enviar dados para webhook n8n
      const webhookSuccess = await sendToWebhook(webhookData)
      
      if (!webhookSuccess) {
        console.warn("Webhook falhou, mas continuando com a simulação")
      }

      setCalculationResults(results)
      setShowResults(true)

      toast({
        title: "Simulação calculada com sucesso!",
        description: "Confira os resultados detalhados abaixo.",
      })

    } catch (error) {
      console.error("Erro ao calcular simulação:", error)
      toast({
        title: "Erro ao calcular simulação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Calculator className="inline-block mr-3 text-[#BFA86B]" />
        Simulador de Rentabilidade
      </motion.h2>

      {/* Elementos de escassez */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-red-400 mr-2 animate-pulse" />
            <h4 className="text-base font-bold text-red-400">OFERTA LIMITADA</h4>
          </div>
          <span className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
            APENAS 180 M²
          </span>
        </div>

        <p className="text-sm text-gray-200 mb-3">
          Esta oferta está limitada a <span className="font-bold text-white">180 m²</span> totais em condições 
          especiais de lançamento. Modalidade SCP com recompra garantida pela Soito Inc.
        </p>

        {/* Barra de progresso */}
        <div className="relative">
          <div className="overflow-hidden h-4 text-xs flex rounded-full bg-white/10">
            <div
              style={{ width: `${(currentSold / maxSquareMeters) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500"
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-300">
            <span>0 m²</span>
            <span className="font-medium text-white">{currentSold} m² vendidos ({((currentSold / maxSquareMeters) * 100).toFixed(0)}%)</span>
            <span>{maxSquareMeters} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-xs text-gray-300">8 investidores ativos agora</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-300">Restam apenas </span>
            <span className="text-white font-bold mx-1">{maxSquareMeters - currentSold} m²</span>
            <span className="text-xs text-gray-300">disponíveis</span>
          </div>
        </div>
      </div>

      {/* Calculadora de simulação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] p-8 rounded-xl mb-10 border border-[#BFA86B]/20 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-[#BFA86B] to-[#8B7355] p-3 rounded-xl shadow-lg shadow-[#BFA86B]/20 mr-4">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#BFA86B]">
            Simule sua rentabilidade no Panorama Taubaté
          </h3>
        </div>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Calcule a rentabilidade do seu investimento baseado em dados reais de valorização de Taubaté. 
          Preencha os dados abaixo e veja os resultados detalhados.
        </p>

        {!showResults ? (
          <form onSubmit={calculateAndSubmit} className="grid md:grid-cols-2 gap-8">
            {/* Lado esquerdo - Configuração do investimento */}
            <div className="bg-white/5 p-6 rounded-lg border border-[#BFA86B]/20">
              <h4 className="text-lg font-medium text-[#BFA86B] mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-[#BFA86B]" />
                Configure seu investimento
              </h4>

              <div className="space-y-6">
                {/* Seleção da opção de investimento */}
                <div className="space-y-3">
                  <Label className="text-sm text-gray-300">Escolha sua opção de investimento</Label>
                  <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
                    {investmentOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#BFA86B]/30 transition-all duration-300">
                        <RadioGroupItem value={option.id} id={option.id} className="text-[#BFA86B]" />
                        <Label htmlFor={option.id} className="cursor-pointer flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-white font-medium">{option.label}</span>
                              <div className="text-xs text-gray-400">{option.payment}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[#BFA86B] font-bold">R$ {option.pricePerM2}/m²</div>
                              <div className="text-xs bg-[#BFA86B] text-black px-2 py-1 rounded-full">{option.highlight}</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Quantidade de m² */}
                <div className="space-y-2">
                  <Label htmlFor="metrosQuadrados" className="text-sm text-gray-300">
                    Quantidade de metros quadrados (m²)
                  </Label>
                  <div className="flex gap-4">
                    <Input
                      id="metrosQuadrados"
                      type="number"
                      value={squareMeters}
                      onChange={(e) => handleSquareMetersChange(Number(e.target.value))}
                      className="bg-white/10 border-white/20 text-white"
                      min="10"
                      max={maxSquareMeters - currentSold}
                      step="1"
                    />
                    <div className="w-20 text-center py-2 bg-white/5 rounded border border-white/10 text-sm">m²</div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Valor estimado: R$ {(squareMeters * investmentOptions.find(opt => opt.id === selectedOption)?.pricePerM2 || 3500).toLocaleString("pt-BR")}
                  </p>
                </div>

                {/* Período de investimento */}
                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">Período de investimento</Label>
                  <RadioGroup value={period} onValueChange={handlePeriodChange} className="flex gap-4">
                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#BFA86B]/30 transition-all duration-300 flex-1 cursor-pointer">
                      <RadioGroupItem value="12" id="period-12" className="text-[#BFA86B]" />
                      <Label htmlFor="period-12" className="cursor-pointer flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-[#BFA86B]" />
                        12 meses
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#BFA86B]/30 transition-all duration-300 flex-1 cursor-pointer">
                      <RadioGroupItem value="24" id="period-24" className="text-[#BFA86B]" />
                      <Label htmlFor="period-24" className="cursor-pointer flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-[#BFA86B]" />
                        24 meses
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Lado direito - Dados para contato */}
            <div className="bg-white/5 p-6 rounded-lg border border-[#BFA86B]/20">
              <h4 className="text-lg font-medium text-[#BFA86B] mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-[#BFA86B]" />
                Seus dados para receber a simulação
              </h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm text-gray-300">
                    Nome completo
                  </Label>
                  <div className="flex">
                    <div className="bg-white/10 p-2 rounded-l border border-white/20 border-r-0">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-white/10 border-white/20 text-white rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm text-gray-300">
                    Telefone
                  </Label>
                  <div className="flex">
                    <div className="bg-white/10 p-2 rounded-l border border-white/20 border-r-0">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-white/10 border-white/20 text-white rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-300">
                    E-mail
                  </Label>
                  <div className="flex">
                    <div className="bg-white/10 p-2 rounded-l border border-white/20 border-r-0">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-white/10 border-white/20 text-white rounded-l-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 bg-gradient-to-r from-[#BFA86B] to-[#8B7355] hover:from-[#8B7355] hover:to-[#BFA86B] text-white py-6 font-medium rounded-lg border border-[#BFA86B]/30 shadow-lg shadow-[#BFA86B]/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Calculando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Calculator className="mr-2 h-5 w-5" />
                      Calcular Rentabilidade
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-400 mt-2 text-center">
                  Ao enviar, você concorda em receber comunicações sobre este investimento.
                </p>
              </div>
            </div>
          </form>
        ) : (
          /* Resultados da simulação */
          <div>
            <div className="bg-[#BFA86B]/10 border border-[#BFA86B]/30 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-[#BFA86B]">Olá, {formData.nome}!</h4>
                <p className="text-gray-200">
                  Confira abaixo os resultados detalhados da sua simulação de investimento no Panorama Taubaté.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Coluna esquerda - Dados do investimento */}
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Opção escolhida</h5>
                    <p className="text-lg font-bold text-white">{calculationResults.opcaoEscolhida}</p>
                    <p className="text-xs text-gray-400">{calculationResults.formaPagamento}</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Valor investido</h5>
                    <p className="text-2xl font-bold text-white">
                      R$ {calculationResults.valorInvestido.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-gray-400">{calculationResults.metrosQuadrados} m² × R$ {calculationResults.valorPorMetroQuadrado.toLocaleString("pt-BR")}/m²</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Período do investimento</h5>
                    <p className="text-2xl font-bold text-white">
                      {calculationResults.periodo} meses
                    </p>
                    <p className="text-xs text-gray-400">Rentabilidade de {calculationResults.rentabilidadeAnual}% a.a.</p>
                  </div>
                </div>

                {/* Coluna direita - Resultados */}
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Lucro total projetado</h5>
                    <p className="text-2xl font-bold text-[#BFA86B]">
                      R$ {Number.parseFloat(calculationResults.lucroTotal).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-gray-400">Retorno de {calculationResults.percentualRetorno}%</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Retorno mensal médio</h5>
                    <p className="text-2xl font-bold text-[#BFA86B]">
                      R$ {Number.parseFloat(calculationResults.retornoMensal).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-gray-400">Valor médio por mês</p>
                  </div>

                  <div className="bg-[#BFA86B]/20 p-4 rounded-lg border border-[#BFA86B]/30">
                    <h5 className="text-sm text-[#BFA86B] mb-1">Valor total ao final</h5>
                    <p className="text-2xl font-bold text-white">
                      R$ {Number.parseFloat(calculationResults.valorTotal).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-[#BFA86B]">Valor investido + lucro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações após simulação */}
            <div className="text-center space-y-4">
              <p className="text-gray-200 mb-6">
                Uma cópia detalhada desta simulação foi enviada para: 
                <span className="text-[#BFA86B] font-medium"> {formData.email}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 text-white border-white/20 py-3 px-6 text-base font-medium rounded-lg shadow-lg"
                >
                  Fazer nova simulação
                </Button>

                <Button
                  className="bg-gradient-to-r from-[#BFA86B] to-[#8B7355] hover:from-[#8B7355] hover:to-[#BFA86B] text-white py-3 px-6 text-base font-medium rounded-lg shadow-lg"
                  onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Acabei de fazer uma simulação no Panorama Taubaté e gostaria de mais informações sobre o investimento de R$ ${calculationResults.valorInvestido.toLocaleString("pt-BR")}.`, "_blank")}
                >
                  Falar com consultor
                </Button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
} 