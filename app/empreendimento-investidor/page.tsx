"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  TrendingUp,
  DollarSign,
  Calculator,
  BarChart3,
  Target,
  Clock,
  Award,
  Users,
  Download,
  Calendar,
  CheckCircle,
  ArrowUp,
  Percent,
  Building,
  Home,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function EmpreendimentoInvestidor() {
  const [investmentValue, setInvestmentValue] = useState(500000)
  const [selectedPeriod, setSelectedPeriod] = useState(24)

  const calculateReturns = () => {
    const monthlyReturn = investmentValue * 0.015 // 1.5% ao mês
    const totalReturn = monthlyReturn * selectedPeriod
    const roi = ((totalReturn / investmentValue) * 100).toFixed(1)
    return { monthlyReturn, totalReturn, roi }
  }

  const { monthlyReturn, totalReturn, roi } = calculateReturns()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#BFA86B]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src="/images/logo-white.png" alt="SOITO INC" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#oportunidade" className="text-white hover:text-[#BFA86B] transition-colors">
                Oportunidade
              </Link>
              <Link href="#localizacao" className="text-white hover:text-[#BFA86B] transition-colors">
                Localização
              </Link>
              <Link href="#projecoes" className="text-white hover:text-[#BFA86B] transition-colors">
                Projeções
              </Link>
              <Link href="#sobre" className="text-white hover:text-[#BFA86B] transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-white hover:text-[#BFA86B] transition-colors">
                Contato
              </Link>
            </nav>
            <Button
              className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Tenho interesse em investir no Corporate Plaza",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale com Consultor
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/investment-opportunity-bg.png"
            alt="Investimento Corporate Plaza"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <Badge className="bg-[#BFA86B] text-black text-lg px-6 py-2 mb-6">🔥 OPORTUNIDADE DE INVESTIMENTO</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            INVISTA NO <span className="text-[#BFA86B]">CORPORATE PLAZA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Oportunidade de <strong>alta rentabilidade</strong> e <strong>valorização</strong> no coração da Faria Lima
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90 text-lg px-8 py-4"
              onClick={() => window.open("/dossie-corporate-plaza.pdf", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Dossiê
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black text-lg px-8 py-4"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Tenho interesse em investir no Corporate Plaza",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Por que Investir */}
      <section id="oportunidade" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que <span className="text-[#BFA86B]">Investir?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma oportunidade única de participar do crescimento do mercado imobiliário corporativo em São Paulo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Alta Demanda</h3>
                <p className="text-gray-300 text-sm">
                  Região com <strong>95% de ocupação</strong> em edifícios corporativos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <ArrowUp className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Valorização</h3>
                <p className="text-gray-300 text-sm">
                  <strong>18% ao ano</strong> de valorização média nos últimos 3 anos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Percent className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Rentabilidade</h3>
                <p className="text-gray-300 text-sm">
                  Projeção de <strong>22% ao ano</strong> de rentabilidade líquida
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Localização</h3>
                <p className="text-gray-300 text-sm">
                  <strong>Faria Lima</strong> - principal centro financeiro de SP
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Simulador de Investimento */}
          <Card className="bg-black border-[#BFA86B]/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white flex items-center justify-center">
                <Calculator className="w-6 h-6 mr-2 text-[#BFA86B]" />
                Simulador de Investimento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-gray-300 mb-2 block">Valor do Investimento</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BFA86B]" />
                        <Input
                          type="number"
                          value={investmentValue}
                          onChange={(e) => setInvestmentValue(Number(e.target.value))}
                          className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white pl-10 focus:border-[#BFA86B]"
                          placeholder="500000"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-gray-300 mb-2 block">Período (meses)</Label>
                      <div className="flex gap-2">
                        {[12, 24, 36, 48].map((period) => (
                          <Button
                            key={period}
                            variant={selectedPeriod === period ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedPeriod(period)}
                            className={
                              selectedPeriod === period
                                ? "bg-[#BFA86B] text-black"
                                : "border-[#BFA86B]/30 text-gray-300 hover:border-[#BFA86B]"
                            }
                          >
                            {period}m
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Retorno Mensal Estimado</div>
                      <div className="text-2xl font-bold text-[#BFA86B]">
                        R$ {monthlyReturn.toLocaleString("pt-BR")}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Retorno Total ({selectedPeriod} meses)</div>
                      <div className="text-2xl font-bold text-green-400">R$ {totalReturn.toLocaleString("pt-BR")}</div>
                    </div>
                  </div>
                  <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">ROI Total</div>
                      <div className="text-2xl font-bold text-white">{roi}%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90" asChild>
                  <Link href="#contato">
                    <Calculator className="w-4 h-4 mr-2" />
                    Simular seu Investimento
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ficha <span className="text-[#BFA86B]">Técnica</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/corporate-building-render.png"
                alt="Corporate Plaza Render"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                  <Building className="w-8 h-8 text-[#BFA86B] mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">8.500 m²</div>
                  <div className="text-sm text-gray-400">Área do Terreno</div>
                </div>
                <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                  <Home className="w-8 h-8 text-[#BFA86B] mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">120</div>
                  <div className="text-sm text-gray-400">Salas Comerciais</div>
                </div>
                <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                  <Building2 className="w-8 h-8 text-[#BFA86B] mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">25 Andares</div>
                  <div className="text-sm text-gray-400">Torre Corporativa</div>
                </div>
                <div className="bg-[#0B0B0B] p-6 rounded-lg border border-[#BFA86B]/20">
                  <Calendar className="w-8 h-8 text-[#BFA86B] mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">Dez/2025</div>
                  <div className="text-sm text-gray-400">Previsão de Entrega</div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Tipologias Disponíveis:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-[#0B0B0B] rounded border border-[#BFA86B]/20">
                    <span className="text-gray-300">Salas de 35m²</span>
                    <Badge className="bg-[#BFA86B] text-black">A partir de R$ 420k</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0B0B0B] rounded border border-[#BFA86B]/20">
                    <span className="text-gray-300">Salas de 50m²</span>
                    <Badge className="bg-[#BFA86B] text-black">A partir de R$ 580k</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0B0B0B] rounded border border-[#BFA86B]/20">
                    <span className="text-gray-300">Salas de 70m²</span>
                    <Badge className="bg-[#BFA86B] text-black">A partir de R$ 780k</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeções Financeiras */}
      <section id="projecoes" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projeções <span className="text-[#BFA86B]">Financeiras</span>
            </h2>
            <p className="text-xl text-gray-300">Dados baseados em análise de mercado e histórico da região</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black border-[#BFA86B]/20">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center">
                  <Target className="w-6 h-6 mr-2 text-[#BFA86B]" />
                  TIR Projetada
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-[#BFA86B] mb-2">22%</div>
                <div className="text-gray-300">ao ano</div>
                <Progress value={88} className="mt-4" />
                <div className="text-sm text-gray-400 mt-2">Acima da média do mercado (15%)</div>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-2 text-[#BFA86B]" />
                  Payback
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-[#BFA86B] mb-2">4.5</div>
                <div className="text-gray-300">anos</div>
                <Progress value={75} className="mt-4" />
                <div className="text-sm text-gray-400 mt-2">Retorno do investimento</div>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center">
                  <DollarSign className="w-6 h-6 mr-2 text-[#BFA86B]" />
                  Retorno Mensal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-[#BFA86B] mb-2">1.8%</div>
                <div className="text-gray-300">do investimento</div>
                <Progress value={90} className="mt-4" />
                <div className="text-sm text-gray-400 mt-2">Renda passiva mensal</div>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Projeção */}
          <Card className="bg-black border-[#BFA86B]/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-white flex items-center justify-center">
                <BarChart3 className="w-6 h-6 mr-2 text-[#BFA86B]" />
                Projeção de Retorno (5 anos)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-[#0B0B0B] rounded-lg flex items-end justify-around p-6 border border-[#BFA86B]/20">
                {[
                  { year: "Ano 1", value: 18, amount: "R$ 90k" },
                  { year: "Ano 2", value: 35, amount: "R$ 175k" },
                  { year: "Ano 3", value: 52, amount: "R$ 260k" },
                  { year: "Ano 4", value: 70, amount: "R$ 350k" },
                  { year: "Ano 5", value: 88, amount: "R$ 440k" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-xs text-gray-400 mb-2">{item.amount}</div>
                    <div
                      className="bg-gradient-to-t from-[#BFA86B] to-[#BFA86B]/60 w-12 rounded-t"
                      style={{ height: `${item.value * 2}px` }}
                    />
                    <div className="text-sm text-gray-300 mt-2">{item.year}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-300">
                  *Projeção baseada em investimento de R$ 500.000 com reinvestimento de 50% dos lucros
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Localização Estratégica */}
      <section id="localizacao" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Localização <span className="text-[#BFA86B]">Estratégica</span>
            </h2>
            <p className="text-xl text-gray-300">No coração do centro financeiro de São Paulo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#BFA86B] mx-auto mb-4" />
                  <p className="text-gray-300">Mapa Interativo</p>
                  <p className="text-sm text-gray-400">Av. Faria Lima, 2500 - Itaim Bibi</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Acesso privilegiado a:</h3>
              <div className="space-y-4">
                {[
                  { name: "Estação Faria Lima (Metrô)", distance: "2 min a pé", icon: Building2, highlight: true },
                  { name: "Shopping Iguatemi", distance: "5 min a pé", icon: Building2 },
                  { name: "Hospital Albert Einstein", distance: "8 min de carro", icon: Building2 },
                  { name: "Aeroporto de Congonhas", distance: "15 min de carro", icon: Building2 },
                  { name: "Marginal Pinheiros", distance: "3 min de carro", icon: Building2, highlight: true },
                  { name: "Av. Paulista", distance: "12 min de carro", icon: Building2 },
                ].map((location, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      location.highlight ? "bg-[#BFA86B]/10 border-[#BFA86B]/40" : "bg-[#0B0B0B] border-[#BFA86B]/20"
                    }`}
                  >
                    <div className="flex items-center">
                      <location.icon className="w-5 h-5 text-[#BFA86B] mr-3" />
                      <span className="text-white">{location.name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        location.highlight
                          ? "border-[#BFA86B] text-[#BFA86B] bg-[#BFA86B]/10"
                          : "border-[#BFA86B]/50 text-[#BFA86B]"
                      }
                    >
                      {location.distance}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#0B0B0B] rounded-lg border border-[#BFA86B]/20">
                <h4 className="text-[#BFA86B] font-bold mb-3">Vantagens da Localização:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#BFA86B] mr-2" />
                    Alto fluxo de executivos e empresas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#BFA86B] mr-2" />
                    Valorização imobiliária constante
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#BFA86B] mr-2" />
                    Infraestrutura completa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Incorporadora */}
      <section id="sobre" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-[#BFA86B]">SOITO INC</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/soito-ceo-office.png" alt="CEO SOITO INC" width={500} height={600} className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Credibilidade e Experiência</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Há mais de 15 anos no mercado, a SOITO INC se consolidou como referência em investimentos imobiliários
                de alto padrão. Nossa expertise em identificar oportunidades estratégicas garante segurança e
                rentabilidade aos nossos investidores.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#BFA86B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#BFA86B] mb-1">15+</div>
                  <div className="text-sm text-gray-400">Anos de mercado</div>
                </div>
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-[#BFA86B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#BFA86B] mb-1">25</div>
                  <div className="text-sm text-gray-400">Empreendimentos entregues</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-[#BFA86B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#BFA86B] mb-1">R$ 2.5B</div>
                  <div className="text-sm text-gray-400">VGV realizado</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#BFA86B] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#BFA86B] mb-1">500+</div>
                  <div className="text-sm text-gray-400">Investidores ativos</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-3" />
                  <span className="text-gray-300">Governança e segurança jurídica</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-3" />
                  <span className="text-gray-300">Transparência total nos processos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-3" />
                  <span className="text-gray-300">Acompanhamento personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-[#BFA86B]">investir?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato com nosso time de investimentos e garante sua participação nesta oportunidade única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90 text-lg px-8 py-4"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Tenho interesse em investir no Corporate Plaza",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um Consultor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black text-lg px-8 py-4"
              onClick={() => window.open("/dossie-corporate-plaza.pdf", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Dossiê Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário de Contato para Investidores */}
      <section id="contato" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interesse em <span className="text-[#BFA86B]">Investir?</span>
            </h2>
            <p className="text-xl text-gray-300">Preencha o formulário e receba informações exclusivas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black border-[#BFA86B]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Formulário de Interesse</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-gray-300">
                        Nome Completo
                      </Label>
                      <Input
                        id="nome"
                        className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B]"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B]"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefone" className="text-gray-300">
                        Telefone
                      </Label>
                      <Input
                        id="telefone"
                        className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B]"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="investimento" className="text-gray-300">
                        Valor de Interesse
                      </Label>
                      <Input
                        id="investimento"
                        className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B]"
                        placeholder="R$ 500.000"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="mensagem" className="text-gray-300">
                      Mensagem (Opcional)
                    </Label>
                    <Textarea
                      id="mensagem"
                      className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B] min-h-[120px]"
                      placeholder="Conte-nos sobre seu perfil de investidor..."
                    />
                  </div>
                  <Button className="w-full bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Interesse
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-black border-[#BFA86B]/20">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">WhatsApp Investidores</h3>
                  <p className="text-gray-300 mb-6">Fale diretamente com nosso time especializado</p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5511999999999?text=Olá! Tenho interesse em investir no Corporate Plaza",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com Consultor
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black border-[#BFA86B]/20">
                <CardContent className="p-8 text-center">
                  <Download className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Dossiê Completo</h3>
                  <p className="text-gray-300 mb-6">Material técnico com todas as informações</p>
                  <Button
                    className="w-full bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90"
                    onClick={() => window.open("/dossie-corporate-plaza.pdf", "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Dossiê
                  </Button>
                </CardContent>
              </Card>

              <div className="text-center">
                <h4 className="text-white font-bold mb-4">Atendimento Especializado</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-[#BFA86B]" />
                    (11) 3456-7890
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-[#BFA86B]" />
                    investidores@soitoinc.com.br
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Atendimento exclusivo para investidores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#BFA86B]/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image src="/images/logo-white.png" alt="SOITO INC" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className="text-gray-300 mb-4">Corporate Plaza</p>
              <p className="text-gray-400 text-sm">Oportunidade de Investimento</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Investimento</h4>
              <div className="space-y-2">
                <Link href="#oportunidade" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Por que Investir
                </Link>
                <Link href="#projecoes" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Projeções
                </Link>
                <Link href="#localizacao" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Localização
                </Link>
                <Link href="#sobre" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Sobre a SOITO
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato Investidores</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  (11) 3456-7890
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageCircle className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  (11) 99999-9999
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  investidores@soitoinc.com.br
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#BFA86B] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#BFA86B] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#BFA86B] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#BFA86B]/20 pt-8 text-center">
            <p className="text-gray-400">© 2024 SOITO INC - Corporate Plaza. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-sm mt-2">
              *Projeções baseadas em análise de mercado. Rentabilidade passada não garante resultados futuros.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
