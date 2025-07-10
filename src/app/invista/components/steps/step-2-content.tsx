"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Shield,
  Award,
  Briefcase,
  Calculator,
  DollarSign,
  User,
  Phone,
  Mail,
  CalendarDays,
  Home,
  BarChart3,
  CheckCircle2,
  Building,
  ExternalLink,
  Clock,
  Users,
} from "lucide-react"
import { useJourney } from "../../context/journey-context"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function Step2Content() {
  const { nextStep } = useJourney()
  const [squareMeters, setSquareMeters] = useState(30)
  const [pricePerSquareMeter] = useState(3500) // Preço base por m²
  const [validationCode, setValidationCode] = useState("")
  const [period, setPeriod] = useState("24") // "12" ou "24" meses
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [calculationResults, setCalculationResults] = useState(null)

  // Form state
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    metrosQuadrados: squareMeters,
    investimento: squareMeters * pricePerSquareMeter,
    periodo: period,
    codigoValidacao: "",
  })

  // Handler para mudança de valor do investimento
  const handleSquareMetersChange = (value) => {
    const numValue = Number(value) || 30
    setSquareMeters(numValue)
    const calculatedInvestment = numValue * pricePerSquareMeter
    setFormData((prev) => ({
      ...prev,
      metrosQuadrados: numValue,
      investimento: calculatedInvestment,
    }))
  }

  // Adicionar handler para código de validação:
  const handleValidationCodeChange = (e) => {
    setValidationCode(e.target.value)
    setFormData((prev) => ({
      ...prev,
      codigoValidacao: e.target.value,
    }))
  }

  // Handler para mudança de período
  const handlePeriodChange = (value) => {
    setPeriod(value)
    setFormData((prev) => ({
      ...prev,
      periodo: value,
    }))
  }

  // Handler para mudança nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Função para calcular e enviar os dados para o webhook
  const calculateAndSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Calcular o valor do investimento baseado nos metros quadrados
      const investmentAmount = squareMeters * pricePerSquareMeter

      // Realizar cálculos
      const periodInYears = Number.parseInt(period) / 12 || 1
      const annualReturn = 0.21 // 21% annual return
      const projectedValue = investmentAmount * Math.pow(1 + annualReturn, periodInYears)
      const totalReturn = projectedValue - investmentAmount
      const returnPercentage = (totalReturn / investmentAmount) * 100
      const monthlyValue = (totalReturn / (Number.parseInt(period) || 12)).toFixed(2)

      // Preparar os resultados
      const results = {
        metrosQuadrados: squareMeters,
        valorPorMetroQuadrado: pricePerSquareMeter,
        valorInvestido: investmentAmount,
        periodo: Number.parseInt(period) || 12,
        valorMensal: monthlyValue,
        lucro: totalReturn.toFixed(2),
        valorTotal: projectedValue.toFixed(2),
        percentualRetorno: returnPercentage.toFixed(1),
      }

      // Mostrar mensagem de sucesso
      toast({
        title: "Simulação calculada com sucesso!",
        description: "Veja os resultados abaixo.",
      })

      // Armazenar resultados e mostrar bloco de resultados
      setCalculationResults(results)
      setShowResults(true)
    } catch (error) {
      // Error calculating simulation
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
        transition={{ duration: 0.5 }}
      ></motion.h2>

      {/* Elementos de escassez e urgência */}
      <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-primary-500 mr-2 animate-pulse" />
            <h4 className="text-base font-bold text-primary-500">OPORTUNIDADE LIMITADA</h4>
          </div>
          <span className="bg-primary-500 text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
            FASE INICIAL
          </span>
        </div>

        <p className="text-sm text-text-secondary mb-3">
          Esta fase de valorização está limitada a <span className="font-bold text-text-primary">850 m²</span> (valor total de
          R$ 3.000.000). Assim que este limite for atingido, esta oportunidade será encerrada e a página será removida.
        </p>

        {/* Barra de progresso */}
        <div className="relative">
          <div className="overflow-hidden h-4 text-xs flex rounded-full bg-background-secondary">
            <div
              style={{ width: "73%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-text-secondary">
            <span>0 m²</span>
            <span className="font-medium text-text-primary">620 m² vendidos (73%)</span>
            <span>850 m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-text-muted mr-1" />
            <span className="text-xs text-text-secondary">12 investidores ativos agora</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-text-secondary">Restam apenas </span>
            <span className="text-text-primary font-bold mx-1">230 m²</span>
            <span className="text-xs text-text-secondary">disponíveis</span>
          </div>
        </div>
      </div>

      {/* Calculadora de simulação personalizada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">
            Deseja saber a rentabilidade estimada de forma personalizada? Simule sem compromisso utilizando a calculadora
            abaixo.
          </h3>
        </div>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Utilize nossa calculadora para simular a valorização no Residencial Panorama. Preencha os dados abaixo
          e clique em calcular para ver os resultados detalhados.
        </p>

        {!showResults ? (
          <form onSubmit={calculateAndSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg border border-primary-500/20">
              <h4 className="text-lg font-medium text-primary-500 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-primary-500" />
                Defina seu investimento
              </h4>

              <div className="space-y-6">
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
                      step="1"
                    />
                    <div className="w-20 text-center py-2 bg-white/5 rounded border border-white/10 text-sm">m²</div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Valor estimado: R$ {(squareMeters * pricePerSquareMeter).toLocaleString("pt-BR")}
                    (R$ {pricePerSquareMeter.toLocaleString("pt-BR")}/m²)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-gray-300">Período de investimento</Label>
                  <RadioGroup value={period} onValueChange={handlePeriodChange} className="flex gap-4">
                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex-1 cursor-pointer">
                      <RadioGroupItem value="12" id="period-12" className="text-primary-500" />
                      <Label htmlFor="period-12" className="cursor-pointer flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-primary-500" />
                        12 meses
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex-1 cursor-pointer">
                      <RadioGroupItem value="24" id="period-24" className="text-primary-500" />
                      <Label htmlFor="period-24" className="cursor-pointer flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-primary-500" />
                        24 meses
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codigoValidacao" className="text-sm text-gray-300">
                    Código de indicação (opcional)
                  </Label>
                  <div className="flex">
                    <div className="bg-white/10 p-2 rounded-l border border-white/20 border-r-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                      </svg>
                    </div>
                    <Input
                      id="codigoValidacao"
                      name="codigoValidacao"
                      value={validationCode}
                      onChange={handleValidationCodeChange}
                      placeholder="Se você tem um código, digite aqui"
                      className="bg-white/10 border-white/20 text-white rounded-l-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-primary-500/20">
              <h4 className="text-lg font-medium text-primary-500 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-500" />
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
                  className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-6 font-medium rounded-lg border border-primary-500/30 shadow-lg shadow-golden"
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
                      Calcular e ver resultados
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
          <div>
            <div className="bg-primary-500/20 p-6 rounded-lg border border-primary-500/30 mb-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-primary-500">Olá, {formData.nome}!</h4>
                <p className="text-gray-200">
                  Confira abaixo os resultados detalhados da sua simulação de investimento no Residencial Morada do
                  Bosque.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Valor investido</h5>
                    <p className="text-2xl font-bold text-white">
                      R$ {calculationResults.valorInvestido.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Metros quadrados</h5>
                    <p className="text-2xl font-bold text-white">{calculationResults.metrosQuadrados} m²</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Período</h5>
                    <p className="text-2xl font-bold text-white">
                      {calculationResults.periodo} meses ({calculationResults.periodo / 12}{" "}
                      {calculationResults.periodo / 12 === 1 ? "ano" : "anos"})
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Retorno mensal médio</h5>
                    <p className="text-2xl font-bold text-primary-500">
                      R${" "}
                      {Number.parseFloat(calculationResults.valorMensal).toLocaleString("pt-BR", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Lucro total</h5>
                    <p className="text-2xl font-bold text-primary-500">
                      R${" "}
                      {Number.parseFloat(calculationResults.lucro).toLocaleString("pt-BR", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h5 className="text-sm text-gray-300 mb-1">Percentual de retorno</h5>
                    <p className="text-2xl font-bold text-primary-500">{calculationResults.percentualRetorno}%</p>
                  </div>

                  <div className="bg-primary-500/20 p-4 rounded-lg border border-primary-500/30">
                    <h5 className="text-sm text-primary-500 mb-1">Valor total ao final do período</h5>
                    <p className="text-2xl font-bold text-white">
                      R${" "}
                      {Number.parseFloat(calculationResults.valorTotal).toLocaleString("pt-BR", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-200 mb-6">
                Uma cópia detalhada desta simulação foi enviada para o seu e-mail:{" "}
                <span className="text-primary-500 font-medium">{formData.email}</span>
              </p>

              <Button
                onClick={() => setShowResults(false)}
                variant="outline"
                className="bg-white/5 hover:bg-white/10 text-white border-white/20 py-6 px-8 text-lg font-medium rounded-lg shadow-lg"
              >
                Fazer nova simulação
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] rounded-xl overflow-hidden mb-12"
      >
        <Image src="/morada-area-lazer.webp" alt="Perfil do Investimento" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e33] via-[#1a2e33]/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 w-full md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary-500/90 text-white text-sm font-bold py-1 px-3 rounded-full mb-2">
              OPORTUNIDADE PREMIUM
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Investimento <span className="text-primary-500">inteligente</span> com respaldo institucional
            </h3>

            <p className="text-xl text-gray-200">
              O Residencial Panorama combina alta rentabilidade, baixo risco e a segurança de parceiros
              renomados no mercado imobiliário
            </p>

            {/* Principais indicadores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <p className="text-primary-500 text-2xl font-bold">42%</p>
                <p className="text-gray-300 text-xs">Valorização estimada</p>
              </div>
              <div className="text-center">
                <p className="text-primary-500 text-2xl font-bold">1,7%</p>
                <p className="text-gray-300 text-xs">Rentabilidade mensal</p>
              </div>
              <div className="text-center">
                <p className="text-primary-500 text-2xl font-bold">24</p>
                <p className="text-gray-300 text-xs">Meses para conclusão</p>
              </div>
              <div className="text-center">
                <p className="text-primary-500 text-2xl font-bold">100%</p>
                <p className="text-gray-300 text-xs">Garantia da Caixa</p>
              </div>
            </div>

            {/* Resumo visual dos benefícios */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <Shield className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-primary-500 font-medium">Baixo risco</span>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Building2 className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-primary-500 font-medium">Parceiros renomados</span>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <Briefcase className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-primary-500 font-medium">Diversificação</span>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30 flex items-center animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <Award className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-primary-500 font-medium">Qualidade premium</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Seção: Quem está por trás */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">Quem Está Por Trás</h3>
        </div>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Este projeto é conduzido por empresas com ampla experiência e reputação no setor imobiliário:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary-500/30">
            <div className="relative h-40 w-full flex items-center justify-center bg-[#1a2e33]/80">
              <div className="w-48 h-32 relative">
                <Image src="/logo-soito.svg" alt="Soito Incorporadora" fill className="object-contain" />
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-primary-500 mb-2">Soito Incorporadora</h4>
              <p className="text-sm text-text-secondary">
                Especializada em grandes empreendimentos habitacionais, a Soito é reconhecida por sua qualidade e
                inovação, trazendo confiabilidade e excelência ao Residencial Panorama.
              </p>
              <div className="flex items-center mt-3">
                <Award className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-xs text-primary-500">15+ anos de experiência</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Saiba mais <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Soito Incorporadora</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <iframe
                      src="https://soito.com.br"
                      className="w-full h-[400px] border-0"
                      title="Soito Incorporadora"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary-500/30">
            <div className="relative h-40 w-full flex items-center justify-center bg-[#1a2e33]/80">
              <div className="w-48 h-32 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">CS</div>
                  <div className="text-lg font-semibold text-white">CONSTRUTORA</div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-primary-500 mb-2">CS Construtora</h4>
              <p className="text-sm text-text-secondary">
                Parceira estratégica com sólida expertise em execução de projetos habitacionais, garantindo
                qualidade construtiva e cumprimento de prazos no Residencial Panorama.
              </p>
              <div className="flex items-center mt-3">
                <Building2 className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-xs text-primary-500">Execução de qualidade</span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                disabled
              >
                Em breve <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden group hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-primary-500/30">
            <div className="relative h-40 w-full flex items-center justify-center bg-white">
              <div className="w-48 h-32 relative">
                <Image
                  src="/logo-minha-casa-minha-vida.png"
                  alt="Minha Casa Minha Vida"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Caixa Econômica Federal</h4>
              <p className="text-sm text-gray-600">
                A parceria com a Caixa não só assegura o financiamento do projeto, mas também oferece a garantia de
                entrega, proporcionando tranquilidade aos investidores através do programa Minha Casa Minha Vida.
              </p>
              <div className="flex items-center mt-3">
                <Shield className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-xs text-gray-700">Garantia institucional</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
                  >
                    Novas regras do MCMV <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Minha Casa Minha Vida - Novas Regras</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <iframe
                      src="https://g1.globo.com/economia/noticia/2024/04/16/minha-casa-minha-vida-veja-como-ficam-as-regras-do-programa-com-nova-faixa-4-para-a-classe-media.ghtml"
                      className="w-full h-[400px] border-0"
                      title="Novas regras do Minha Casa Minha Vida"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Introdução ao mercado imobiliário */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <p className="text-gray-200 leading-relaxed text-lg">
            O mercado imobiliário brasileiro está em plena expansão, impulsionado por programas governamentais e pela
            crescente demanda por habitações de qualidade. O Residencial Panorama Araçáriguama se insere neste
            contexto como uma oportunidade única para investidores que buscam alta rentabilidade e segurança.
          </p>
        </div>
      </motion.div>

      {/* Crescimento do Programa Minha Casa Minha Vida */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <Home className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">
            Crescimento do Programa Minha Casa Minha Vida
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              O Programa Minha Casa Minha Vida registrou um aumento de{" "}
              <span className="text-primary-500 font-bold">44,2% nos lançamentos</span> e{" "}
              <span className="text-primary-500 font-bold">43,3% nas vendas</span> em 2024, demonstrando a força e a
              demanda contínua por habitações de interesse social.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Esse crescimento é um indicativo claro de que o mercado está aquecido e que empreendimentos como o
              Residencial Panorama têm um público-alvo em constante expansão.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-primary-500/20">
            <h4 className="text-lg font-medium text-primary-300 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary-500" />
              Crescimento do MCMV em 2024
            </h4>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Lançamentos</span>
                  <span className="text-primary-500 font-medium">+44,2%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "44.2%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Vendas</span>
                  <span className="text-primary-500 font-medium">+43,3%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "43.3%" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Financiamentos aprovados</span>
                  <span className="text-primary-500 font-medium">+38,7%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "38.7%" }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Déficit Habitacional no Brasil */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-gradient-to-br from-background-secondary to-background-tertiary p-8 rounded-xl mb-10 border border-primary-500/20 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-golden mr-4">
            <Building className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-500">Déficit Habitacional no Brasil</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg border border-primary-500/20 flex flex-col justify-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary-500/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-primary-500/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                ></motion.div>
                <motion.div
                  className="absolute inset-8 rounded-full border-4 border-primary-500/70"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary-500">6,2</span>
                    <span className="text-lg font-medium text-primary-300 block">milhões</span>
                    <span className="text-xs text-gray-300 block mt-1">de domicílios</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-300 text-sm">Déficit habitacional atual no Brasil</p>
          </div>

          <div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              O Brasil enfrenta um déficit habitacional de 6,2 milhões de domicílios, com grande parte desta demanda
              concentrada em imóveis de interesse social.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Isso significa que há uma necessidade urgente de mais empreendimentos como o Residencial Panorama,
              que atendem diretamente a essa demanda, garantindo uma alta taxa de ocupação e valorização.
            </p>

            <div className="mt-6 bg-primary-900/30 p-4 rounded-lg border border-primary-500/30">
              <h5 className="text-primary-500 font-medium flex items-center mb-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Impacto no seu investimento
              </h5>
              <p className="text-sm text-gray-200">
                Este déficit habitacional cria um cenário de demanda constante, reduzindo riscos de vacância e
                garantindo a valorização contínua do seu investimento no Residencial Panorama.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Disclaimer em letras miúdas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 pt-6 border-t border-white/10"
      >
        <div className="text-[10px] leading-tight text-gray-400 max-w-5xl mx-auto">
          <h5 className="text-[11px] font-medium text-gray-300 mb-2">AVISO LEGAL - INVESTIMENTO IMOBILIÁRIO</h5>
          <p className="mb-2">
                        A SOITO INCORPORADORA convida você a conhecer nossa oportunidade de participação no empreendimento "Panorama", localizado em Araçariguama/SP:
          </p>
          <p className="mb-2">
            ✓ Oferecemos participação exclusivamente neste projeto imobiliário específico através de Sociedade em Conta
            de Participação (SCP)
          </p>
          <p className="mb-2">
            ✓ O potencial de rentabilidade é atrativo, com retornos baseados no desempenho real do empreendimento
            "Panorama"
          </p>
          <p className="mb-2">Para sua segurança e transparência, esclarecemos que:</p>
          <p className="mb-2">
            • Não oferecemos produtos financeiros • Não somos regulados pela CVM • As projeções de retorno são
            estimativas baseadas em estudos de viabilidade específicos para o "Panorama" • Como em todo
            investimento imobiliário, não há garantia do FGC ou mecanismos similares • Os resultados dependem do
            desempenho comercial do empreendimento e das condições do mercado imobiliário local
          </p>
          <p className="mb-2">
            <span className="text-gray-300">Perfil do investidor:</span> Esta oportunidade é direcionada a investidores
            com experiência prévia em investimentos imobiliários e conhecimento dos riscos envolvidos neste setor.
          </p>
          <p className="mb-2">
            Valorizamos sua decisão consciente e bem informada. Por isso, disponibilizamos toda a documentação do
            empreendimento "Panorama" para análise detalhada antes da assinatura do contrato de SCP.
          </p>
          <p className="mb-2">
            Nossa equipe está à disposição para apresentar o projeto completo e esclarecer todas as suas dúvidas!
          </p>
          <p>
            Este material tem caráter informativo sobre um empreendimento específico. A SOITO INCORPORADORA preza pela
            transparência em todas as etapas do seu investimento.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
