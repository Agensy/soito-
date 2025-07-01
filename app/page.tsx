"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { HeroSlider } from "@/components/hero-slider"
import { LuxurySection } from "@/components/luxury/luxury-section"
import { LuxuryCard } from "@/components/luxury/luxury-card"
import { LuxuryStats } from "@/components/luxury/luxury-stats"
import { LuxuryForm } from "@/components/luxury/luxury-form"
import { Building2, Users, TrendingUp, Award, Phone, Mail, MapPin, ArrowRight, Play, Clock, CheckCircle, Target, DollarSign, Home, Car, Calendar, Briefcase } from "lucide-react"

export default function HomePage() {
  const statsData = [
    {
      value: "25+",
      label: "Anos de Experiência",
      icon: <Award className="w-8 h-8" />,
      description: "Fabio Soito no mercado",
    },
    {
      value: "19.1%",
      label: "Rentabilidade Panorama",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Superior à SELIC 2024",
    },
    {
      value: "328K",
      label: "Habitantes em Taubaté",
      icon: <Users className="w-8 h-8" />,
      description: "70% classes C e D",
    },
    {
      value: "130km",
      label: "Distância de São Paulo",
      icon: <MapPin className="w-8 h-8" />,
      description: "Localização estratégica",
    },
  ]

  const taubateGrowthStats = [
    {
      value: "+17.1%",
      label: "Vendas Imóveis Usados",
      icon: <Home className="w-8 h-8" />,
      description: "Crescimento em 2024",
    },
    {
      value: "+43.4%",
      label: "Contratos de Locação",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Aumento em 2024",
    },
    {
      value: "R$ 3.900",
      label: "Valor por m² - SCP",
      icon: <DollarSign className="w-8 h-8" />,
      description: "Investimento mínimo 30m²",
    },
    {
      value: "Mar/2028",
      label: "Previsão de Entrega",
      icon: <Calendar className="w-8 h-8" />,
      description: "Cronograma garantido",
    },
  ]

  const contactFields = [
    {
      name: "name",
      label: "Nome Completo",
      type: "text" as const,
      placeholder: "Seu nome completo",
      required: true,
    },
    {
      name: "email",
      label: "E-mail",
      type: "email" as const,
      placeholder: "seu@email.com",
      required: true,
    },
    {
      name: "phone",
      label: "Telefone",
      type: "tel" as const,
      placeholder: "(11) 99999-9999",
      required: true,
    },
    {
      name: "interest",
      label: "Interesse",
      type: "text" as const,
      placeholder: "Panorama Taubaté, outros investimentos...",
      required: false,
    },
    {
      name: "message",
      label: "Mensagem",
      type: "textarea" as const,
      placeholder: "Gostaria de mais informações sobre investimentos imobiliários...",
      required: false,
    },
  ]

  const handleContactSubmit = (formData: FormData) => {
    console.log("Form submitted:", Object.fromEntries(formData))
    // Aqui você implementaria o envio do formulário
  }

  return (
    <main className="min-h-screen">
      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Hero Slider - SOITO INC */}
      <HeroSlider 
        autoplay={true}
        autoplayDelay={5000}
        showIndicators={true}
        showNavigation={true}
        showAutoplayControl={true}
        onSlideChange={(index) => console.log('Slide changed to:', index)}
      />

      {/* Stats Section - SOITO INC */}
      <LuxuryStats
        stats={statsData}
        title="SOITO INC em Números"
        subtitle="Nossa expertise e dedicação resultam em oportunidades únicas. Dados atualizados do projeto Panorama Taubaté."
        className="bg-gradient-to-br from-black via-gray-900 to-black"
      />

      {/* Seção Modelo SCP */}
      <LuxurySection
        title="Modelo SCP - Sociedade em Conta de Participação"
        subtitle="Invista na fase mais lucrativa do mercado imobiliário e potencialize seus investimentos"
        variant="dark"
      >
        <div className="grid lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-black">1</span>
            </div>
            <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">SOITO FAZ A VIABILIDADE</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              Fazemos a gestão completa e suportamos financeiramente grande parte do negócio
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-black">2</span>
            </div>
            <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">INVESTIDORES ENTRAM</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              Os investidores entram como sócios participantes no empreendimento
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-black">3</span>
            </div>
            <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">SOITO EXECUTA</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              Lançamos no mercado, fazemos a obra e entregamos o empreendimento
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-black">4</span>
            </div>
            <h3 className="text-lg font-light text-gray-900 dark:text-white mb-2">DISTRIBUIÇÃO DE LUCRO</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              Com o andamento das vendas, o investidor recebe a distribuição de lucro
            </p>
          </div>
        </div>

        <div className="luxury-glass rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Opções de Investimento</h3>
              
              <div className="space-y-4">
                <div className="luxury-glass rounded-xl p-4">
                  <h4 className="text-lg font-medium text-[#BFA86B] mb-3">OPÇÃO 1: SCP</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Valor m²:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">R$ 3.900,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Mínimo:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">30m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Investimento:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">R$ 117.000,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Condições:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">30% entrada + 10x</span>
                    </div>
                  </div>
                </div>

                <div className="luxury-glass rounded-xl p-4">
                  <h4 className="text-lg font-medium text-[#BFA86B] mb-3">OPÇÃO 2: Recompra Garantida</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">12 meses:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">R$ 4.235,91/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">24 meses:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">R$ 5.216,27/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Investimento:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">R$ 300.000,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Condições:</span>
                      <span className="text-gray-900 dark:text-white font-medium text-sm">Carro (FIPE 100%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="luxury-glass rounded-xl p-6">
                <div className="text-4xl font-light luxury-text-gradient mb-3">19.1%</div>
                <p className="text-lg text-gray-300 mb-4">Rentabilidade Anual</p>
                <p className="text-xs text-gray-400 mb-4">
                  <span className="text-[#BFA86B]">Oferta limitada:</span> apenas 180 metros quadrados
                </p>
                <button 
                  className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] px-6 py-3 font-medium shadow-xl hover:shadow-[#BFA86B]/25 transition-all duration-300 rounded-lg w-full text-sm"
                  onClick={() => window.location.href = "/invista-panorama"}
                >
                  <Target className="w-4 h-4 mr-2 inline" />
                  Investir Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>

      {/* Seção Taubaté - Localização Estratégica */}
      <LuxurySection
        title="Taubaté - Localização Estratégica"
        subtitle="No coração do Vale do Paraíba, com acesso privilegiado às principais cidades do estado"
        variant="gradient"
      >
        <div className="grid lg:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="luxury-glass rounded-xl p-6">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Cidades Próximas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">Pindamonhangaba</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">170.000 habitantes</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">16km</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">Campos do Jordão</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">55.000 habitantes</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">35km</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">São José dos Campos</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">720.000 habitantes</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">40km</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">Jacareí</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">230.000 habitantes</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">50km</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">Guarulhos</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">1.400.000 habitantes</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">105km</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">São Paulo</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Capital</p>
                  </div>
                  <span className="text-[#BFA86B] font-medium">130km</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="luxury-glass rounded-xl p-6">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Crescimento da Região</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-light luxury-text-gradient mb-1">+17.1%</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Vendas de imóveis usados em 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light luxury-text-gradient mb-1">+43.4%</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Contratos de locação em 2024</p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="text-center">
                    <div className="text-xl font-light text-[#BFA86B] mb-1">70%</div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Classes C e D</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-light text-[#BFA86B] mb-1">328K</div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Habitantes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-glass rounded-xl p-6">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Infraestrutura Completa</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#BFA86B]" />
                  </div>
                  <p className="text-xs text-gray-900 dark:text-white font-medium">2 Hospitais</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">4-5km</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#BFA86B]" />
                  </div>
                  <p className="text-xs text-gray-900 dark:text-white font-medium">2 Universidades</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">4-6km</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#BFA86B]" />
                  </div>
                  <p className="text-xs text-gray-900 dark:text-white font-medium">Supermercado</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">650m</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#BFA86B]" />
                  </div>
                  <p className="text-xs text-gray-900 dark:text-white font-medium">Centro</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">1km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>

      {/* Stats Section - Crescimento Taubaté */}
      <LuxuryStats
        stats={taubateGrowthStats}
        title="Mercado de Taubaté em Crescimento"
        subtitle="Dados que comprovam o potencial da região e do projeto Panorama"
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900"
      />

      {/* Cronograma do Projeto */}
      <LuxurySection
        title="Cronograma do Projeto Panorama"
        subtitle="Fases bem definidas para garantir transparência e segurança aos investidores"
        variant="dark"
      >
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {/* Fase 1 - Concluída */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">AQUISIÇÃO</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">Terreno adquirido</p>
              <div className="w-full h-1.5 bg-green-500 rounded-full"></div>
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">✓ CONCLUÍDO</p>
            </div>

            {/* Fase 2 - Em andamento */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">APROVAÇÕES</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">Licenças e documentação</p>
              <div className="w-full h-1.5 bg-gradient-to-r from-[#BFA86B] to-gray-300 dark:to-gray-600 rounded-full"></div>
              <p className="text-xs text-[#BFA86B] font-medium">EM ANDAMENTO</p>
            </div>

            {/* Fase 3 */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-500 dark:from-gray-600 to-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">LANÇAMENTO</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">Setembro/2025</p>
              <div className="w-full h-1.5 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">PROGRAMADO</p>
            </div>

            {/* Fase 4 */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-500 dark:from-gray-600 to-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">CONSTRUÇÃO</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">Março/2026</p>
              <div className="w-full h-1.5 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">PROGRAMADO</p>
            </div>

            {/* Fase 5 */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-500 dark:from-gray-600 to-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">ENTREGA</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">Março/2028</p>
              <div className="w-full h-1.5 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">PROGRAMADO</p>
            </div>
          </div>

          <div className="luxury-glass rounded-2xl p-6 md:p-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4">Estratégias de Marketing</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Parcerias com corretores locais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Campanha online e offline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Ações promocionais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Distribuição de materiais publicitários</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Captação via redes sociais</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="luxury-glass rounded-xl p-6">
                  <h4 className="text-lg font-light text-gray-900 dark:text-white mb-3">Próxima Fase</h4>
                  <div className="text-3xl font-light luxury-text-gradient mb-3">Set/2025</div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Lançamento oficial do empreendimento</p>
                  <button 
                    className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] px-6 py-3 font-medium shadow-xl hover:shadow-[#BFA86B]/25 transition-all duration-300 rounded-lg w-full text-sm"
                    onClick={() => window.location.href = "/invista-panorama"}
                  >
                    <Calendar className="w-4 h-4 mr-2 inline" />
                    Garantir Vaga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>

      {/* About Section - SOITO INC */}
      <LuxurySection
        title="Por que Escolher a SOITO INC?"
        subtitle="Somos especialistas em identificar e desenvolver oportunidades imobiliárias excepcionais. Nosso foco atual é o Panorama Taubaté."
        variant="gradient"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LuxuryCard
            title="Expertise Comprovada"
            description="25+ anos de experiência do CEO Fabio Soito no mercado imobiliário, selecionando apenas as melhores oportunidades para nossos clientes."
            icon={<Award className="w-8 h-8" />}
            action={{
              label: "Saiba Mais",
              onClick: () => window.location.href = "/invista-panorama",
            }}
            variant="featured"
          />

          <LuxuryCard
            title="Panorama Taubaté"
            description="Nosso projeto atual oferece 19,1% de rentabilidade anual no centro de Taubaté. Oportunidade única e limitada de apenas 180m²."
            icon={<Building2 className="w-8 h-8" />}
            action={{
              label: "Ver Projeto",
              onClick: () => window.location.href = "/invista-panorama",
            }}
            variant="featured"
          />

          <LuxuryCard
            title="Atendimento Personalizado"
            description="Acompanhamento completo desde a análise do investimento até a entrega das chaves. Seu sucesso é nossa prioridade."
            icon={<Users className="w-8 h-8" />}
            action={{
              label: "Falar Conosco",
              onClick: () => window.location.href = "/invista-panorama",
            }}
            variant="featured"
          />
        </div>
      </LuxurySection>

      {/* Seção Founder CEO Fabio Soito */}
      <LuxurySection
        title=""
        subtitle=""
        variant="dark"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo - Foto com design circular */}
            <div className="relative">
              {/* Background com padrão arquitetônico */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  backgroundImage: "url('/soito-background-pattern.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/60 rounded-3xl"></div>
              
              <div className="relative text-center py-16 px-8">
                                 {/* Foto Circular com Borda Dourada */}
                 <div className="relative inline-block mb-8">
                   <div className="w-80 h-80 mx-auto rounded-full shadow-2xl border-4 border-[#BFA86B] overflow-hidden">
                     <img 
                       src="/fabio-soito-ceo-circular.jpg" 
                       alt="Fabio Soito - CEO SOITO INC"
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>

                                 {/* Nome e Título */}
                 <div className="space-y-4">
                   <div className="inline-block bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] rounded-full px-8 py-3">
                     <h2 className="text-3xl font-bold text-black tracking-wider">FABIO SOITO</h2>
                   </div>
                   <p className="text-2xl font-light text-[#BFA86B] tracking-wide">FOUNDER | CEO</p>
                 </div>
               </div>
             </div>

             {/* Lado direito - Descrição e Filosofia */}
             <div className="relative space-y-8">
               {/* Background sutil */}
               <div 
                 className="absolute inset-0 rounded-2xl opacity-5"
                 style={{
                   backgroundImage: "url('/soito-background-pattern.jpg')",
                   backgroundSize: 'cover',
                   backgroundPosition: 'center right',
                   backgroundRepeat: 'no-repeat'
                 }}
               ></div>
               
               <div className="relative z-10 space-y-8">
                 {/* Título da Seção */}
                 <div className="space-y-4">
                   <h3 className="text-4xl font-light text-white leading-tight">
                     Visão e Experiência que <span className="text-[#BFA86B]">Transformam</span> o Mercado Imobiliário
                   </h3>
                   <div className="w-20 h-1 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                 </div>

               {/* Descrição Principal */}
               <div className="space-y-6 text-gray-300 leading-relaxed">
                 <p className="text-lg">
                   À frente da <span className="text-[#BFA86B] font-medium">Soito Incorporadora</span>, trago 25 anos de trajetória executiva onde a expertise jurídica se alia à visão estratégica e ao profundo conhecimento do mercado imobiliário. Esta combinação única me permite identificar e capturar oportunidades excepcionais para nossos investidores e clientes.
                 </p>
                 
                 <p className="text-lg">
                   Construí minha carreira desenvolvendo a capacidade de enxergar além do óbvio – transformando terrenos em empreendimentos que não apenas valorizam o patrimônio, mas também elevam o padrão urbanístico das cidades onde atuamos. Cada projeto da Soito Incorporadora nasce de uma análise criteriosa e se desenvolve com rigor técnico incomparável.
                 </p>
                 
                 <p className="text-lg">
                   Nossa filosofia de trabalho une <span className="text-[#BFA86B] font-medium">tradição e inovação</span>. Aplicamos processos consistentes de governança e conformidade legal, enquanto constantemente buscamos soluções criativas para os desafios do setor. Esta abordagem equilibrada nos permite entregar empreendimentos que se destacam tanto pela solidez quanto pela ousadia arquitetônica.
                 </p>
               </div>

               {/* Missão e Compromisso */}
               <div className="luxury-glass rounded-2xl p-6 space-y-4">
                 <h4 className="text-xl font-light text-white mb-4">Nosso Compromisso</h4>
                 <p className="text-gray-300 italic leading-relaxed">
                   "Na Soito, não estamos apenas construindo estruturas físicas – estamos criando <span className="text-[#BFA86B] font-medium">legados</span> que moldam positivamente a paisagem urbana e a vida das pessoas por gerações. Este é o compromisso que renovo diariamente: transformar visão em realidade tangível, com excelência inquestionável."
                 </p>
               </div>

               {/* Call to Action */}
               <div className="pt-4">
                 <button 
                   className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] px-8 py-4 font-medium shadow-xl hover:shadow-[#BFA86B]/25 transition-all duration-300 rounded-full text-lg"
                   onClick={() => window.location.href = "/invista-panorama"}
                 >
                   <Users className="w-5 h-5 mr-3 inline" />
                   Conheça Nossa Oportunidade Atual
                 </button>
               </div>
               </div>
             </div>
           </div>
         </div>
        </LuxurySection>

      {/* Seção de Parceiros */}
      <LuxurySection
        title="Nossos Parceiros"
        subtitle="Trabalhamos com as melhores empresas do mercado para garantir excelência em cada projeto."
        variant="dark"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* Parceiro 1 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Construtora Alpha</p>
            </div>
          </div>

          {/* Parceiro 2 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Banco Invest</p>
            </div>
          </div>

          {/* Parceiro 3 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Engenharia Prime</p>
            </div>
          </div>

          {/* Parceiro 4 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Imobiliária Vale</p>
            </div>
          </div>

          {/* Parceiro 5 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Arquitetos SP</p>
            </div>
          </div>

          {/* Parceiro 6 */}
          <div className="flex items-center justify-center p-6 luxury-glass rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-[#BFA86B]" />
              </div>
              <p className="text-sm font-medium text-white">Legal Corp</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-4">
            Mais de <span className="text-[#BFA86B] font-semibold">50 parceiros</span> confiam na SOITO INC
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <span>• Construtoras</span>
            <span>• Bancos</span>
            <span>• Escritórios de Advocacia</span>
            <span>• Imobiliárias</span>
          </div>
        </div>
      </LuxurySection>

      {/* Seção de Parceiros Principais */}
      <LuxurySection
        title="Nossos Parceiros Principais"
        subtitle="Parcerias estratégicas que garantem excelência e credibilidade em todos os nossos projetos."
        variant="gradient"
      >
        <div className="space-y-16">
          {/* CS Construtora */}
          <div className="luxury-glass rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light text-white mb-2">CS Construtora</h3>
                    <p className="text-[#BFA86B] font-medium">Parceiro de Construção</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Há mais de 20 anos no mercado, a CS Construtora é reconhecida pela qualidade excepcional 
                  e inovação em projetos imobiliários. Nossa parceria garante que cada empreendimento seja 
                  executado com os mais altos padrões de excelência.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-light text-white mb-4">Principais Conquistas:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">+150 empreendimentos entregues</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">ISO 9001 certificada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">Prêmio Construção Sustentável</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">Zero acidentes em 2023</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">98% satisfação dos clientes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA86B]"></div>
                      <span className="text-gray-300">Entrega sempre no prazo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-light text-white mb-4">Empreendimentos Realizados:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                      <img 
                        src="/modern-apartment-building.png" 
                        alt="Residencial Premium"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Residencial Premium</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                      <img 
                        src="/corporate-building-render.png" 
                        alt="Corporate Plaza"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Corporate Plaza</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                      <img 
                        src="/luxury-lobby.png" 
                        alt="Edifício Executivo"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Edifício Executivo</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                      <img 
                        src="/sustainable-building.png" 
                        alt="Green Tower"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Green Tower</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa Econômica Federal */}
          <div className="luxury-glass rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light text-white mb-2">Caixa Econômica Federal</h3>
                    <p className="text-[#BFA86B] font-medium">Parceiro Financeiro Oficial</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  A parceria com a Caixa Econômica Federal garante acesso às melhores condições de financiamento 
                  do mercado, incluindo programas habitacionais governamentais e linhas de crédito especiais 
                  para nossos clientes.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-light text-white mb-4">Benefícios da Parceria:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center mt-1">
                        <Award className="w-3 h-3 text-[#BFA86B]" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Financiamento FGTS</p>
                        <p className="text-gray-400 text-sm">Utilize seu FGTS para entrada e amortização</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center mt-1">
                        <Award className="w-3 h-3 text-[#BFA86B]" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Casa Verde e Amarela</p>
                        <p className="text-gray-400 text-sm">Subsídios de até R$ 47.500</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center mt-1">
                        <Award className="w-3 h-3 text-[#BFA86B]" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Taxas Preferenciais</p>
                        <p className="text-gray-400 text-sm">Juros a partir de TR + 2,95% ao ano</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center mt-1">
                        <Award className="w-3 h-3 text-[#BFA86B]" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Aprovação Facilitada</p>
                        <p className="text-gray-400 text-sm">Processo simplificado para clientes SOITO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#BFA86B]/10 to-[#BFA86B]/5 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#BFA86B] to-[#D4C08A] rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-black mx-auto mb-2" />
                      <p className="text-black font-bold text-sm">CAIXA</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-2xl font-light text-white">
                    Parceria <span className="text-[#BFA86B]">Estratégica</span>
                  </p>
                  <p className="text-gray-300">
                    Mais de <span className="text-[#BFA86B] font-semibold">500 financiamentos</span> aprovados
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-gray-400">
                    <span>• FGTS</span>
                    <span>• Casa Verde e Amarela</span>
                    <span>• Crédito Imobiliário</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>

      {/* Chamada para Ação - SOITO INC */}
      <LuxurySection
        title="Conheça Nosso Projeto Atual: Panorama Taubaté"
        subtitle="Uma oportunidade exclusiva selecionada pela SOITO INC. Investimento inteligente com alta rentabilidade garantida."
        variant="dark"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="luxury-glass rounded-xl p-6">
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-4 tracking-wide">Diferenciais do Panorama</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Localização no centro de Taubaté</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">19,1% de rentabilidade anual</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Entrega garantida em Março/2028</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Oportunidade limitada - apenas 180m²</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="luxury-glass rounded-xl p-6">
              <div className="text-4xl font-light luxury-text-gradient mb-3">19.1%</div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Rentabilidade Anual Projetada</p>
              <button 
                className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black hover:from-[#D4C08A] hover:to-[#BFA86B] px-8 py-4 font-medium shadow-xl hover:shadow-[#BFA86B]/25 transition-all duration-300 rounded-lg w-full"
                onClick={() => window.location.href = "/invista-panorama"}
              >
                <ArrowRight className="w-4 h-4 mr-2 inline" />
                Investir Agora
              </button>
            </div>
          </div>
        </div>
      </LuxurySection>

      {/* Contact Section - SOITO INC */}
      <LuxurySection
        title="Entre em Contato Conosco"
        subtitle="Converse com nossos especialistas e descubra como a SOITO INC pode ajudar você a investir no Panorama Taubaté."
        variant="gradient"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <LuxuryForm
              title="Fale com a SOITO INC"
              subtitle="Solicite informações sobre o Panorama Taubaté e descubra esta oportunidade exclusiva de investimento."
              fields={contactFields}
              submitLabel="Solicitar Informações"
              submitIcon={<Mail className="w-5 h-5 mr-2" />}
              onSubmit={handleContactSubmit}
            />
          </div>

          <div className="space-y-8">
            <div className="luxury-glass rounded-2xl p-8">
              <h3 className="text-2xl font-light text-white mb-6 tracking-wide">SOITO INC</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Projeto Atual</p>
                    <p className="text-white text-lg">Panorama Taubaté</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Rentabilidade</p>
                    <p className="text-white text-lg">19,1% ao ano</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Experiência</p>
                    <p className="text-white text-lg">25+ anos no mercado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Contatos</p>
                    <p className="text-white text-lg">(21) 9 9122-2722</p>
                    <p className="text-gray-300 text-sm">(11) 9 4961-0468</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-glass rounded-2xl p-8">
              <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Horário de Atendimento</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda - Sexta</span>
                  <span className="text-white">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado</span>
                  <span className="text-white">9h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo</span>
                  <span className="text-white">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>
    </main>
  )
}
