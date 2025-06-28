"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
  CheckCircle,
  Target,
  Eye,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NavigationMenu } from "@/components/navigation-menu"
import { useTheme } from "@/components/theme-provider"

export default function SoitoInstitucional() {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Header */}
      <NavigationMenu />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Construindo mais que imóveis.
            <span className="block text-[#BFA86B]">Construindo histórias.</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Transformamos terrenos vazios em legados concretos, gerando valor e realizando sonhos há mais de uma década.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90 text-lg px-8 py-4" asChild>
              <Link href="#empreendimentos">
                Conheça Nossos Empreendimentos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] text-lg px-8 py-4 ${
                theme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
              asChild
            >
              <Link href="#contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className={`py-20 ${theme === "dark" ? "bg-[#0B0B0B]" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Nossa <span className="text-[#BFA86B]">História</span>
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Há mais de 15 anos no mercado, a SOITO INC se consolidou como referência em investimentos imobiliários
                concretos. Nossa visão vai além do terreno vazio - enxergamos oportunidades onde outros veem apenas
                espaço.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BFA86B] mb-2">15+</div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Anos de atuação
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BFA86B] mb-2">25</div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Empreendimentos entregues
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BFA86B] mb-2">150k</div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    m² construídos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BFA86B] mb-2">2.5k</div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Clientes satisfeitos
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image src="/placeholder-3tvfi.png" alt="SOITO Office" width={500} height={600} className="rounded-lg" />
              <div
                className={`absolute inset-0 rounded-lg ${
                  theme === "dark"
                    ? "bg-gradient-to-t from-black/50 to-transparent"
                    : "bg-gradient-to-t from-white/50 to-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Propósito */}
      <section className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Nossos <span className="text-[#BFA86B]">Valores</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Princípios que norteiam cada decisão e cada projeto que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card
              className={`transition-colors hover:border-[#BFA86B]/40 ${
                theme === "dark" ? "bg-[#0B0B0B] border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"
              }`}
            >
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Missão</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                  Transformar oportunidades imobiliárias em investimentos sólidos e rentáveis, criando valor sustentável
                  para nossos parceiros e clientes.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors hover:border-[#BFA86B]/40 ${
                theme === "dark" ? "bg-[#0B0B0B] border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"
              }`}
            >
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Visão</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                  Ser reconhecida como a principal referência em investimentos imobiliários estratégicos, sempre
                  antecipando tendências de mercado.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors hover:border-[#BFA86B]/40 ${
                theme === "dark" ? "bg-[#0B0B0B] border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"
              }`}
            >
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Valores</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                  Transparência, inovação, excelência e compromisso com resultados concretos em cada projeto que
                  desenvolvemos.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: CheckCircle, text: "Compromisso com qualidade" },
              { icon: Building2, text: "Arquitetura inovadora" },
              { icon: Award, text: "Sustentabilidade" },
              { icon: Users, text: "Transparência" },
              { icon: TrendingUp, text: "Foco no cliente" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-8 h-8 text-[#BFA86B] mx-auto mb-3" />
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Empreendimentos */}
      <section id="empreendimentos" className={`py-20 ${theme === "dark" ? "bg-[#0B0B0B]" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Nossos <span className="text-[#BFA86B]">Empreendimentos</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Projetos que transformam paisagens urbanas e geram valor sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Residencial Aurora",
                status: "Entregue",
                location: "Vila Madalena, SP",
                type: "Studios e Lofts",
                image: "/modern-residential-facade.png",
              },
              {
                name: "Corporate Plaza",
                status: "Em Obras",
                location: "Faria Lima, SP",
                type: "Salas Comerciais",
                image: "/placeholder-bs4bw.png",
              },
              {
                name: "Urban Living",
                status: "Lançamento",
                location: "Pinheiros, SP",
                type: "Studios Compactos",
                image: "/modern-apartment-building.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 group overflow-hidden hover:border-[#BFA86B]/40 ${
                  theme === "dark" ? "bg-black border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"
                }`}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#BFA86B] text-black">{project.status}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {project.name}
                  </h3>
                  <p className="text-[#BFA86B] mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </p>
                  <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{project.type}</p>
                  <Button
                    variant="outline"
                    className={`w-full border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] ${
                      theme === "dark" ? "hover:text-black" : "hover:text-white"
                    }`}
                    asChild
                  >
                    <Link
                      href={
                        project.name === "Residencial Aurora"
                          ? "/empreendimento-cliente"
                          : project.name === "Corporate Plaza"
                            ? "/empreendimento-investidor"
                            : "#"
                      }
                    >
                      Ver Detalhes
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90">
              Ver Todos os Empreendimentos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Área do Investidor */}
      <section id="investidores" className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
                💼 Seja sócio dos nossos <span className="text-[#BFA86B]">projetos</span>
              </h2>
              <p className={`text-xl mb-8 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Oportunidades exclusivas de investimento com rentabilidade superior e atuação em mercados estratégicos.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#BFA86B] mr-3" />
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Rentabilidade superior ao mercado
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#BFA86B] mr-3" />
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Localização estratégica dos projetos
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#BFA86B] mr-3" />
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Transparência total nos processos
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#BFA86B] mr-3" />
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Acompanhamento personalizado
                  </span>
                </div>
              </div>
              <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90" asChild>
                <Link href="/empreendimento-investidor">
                  Saiba Mais sobre Investir
                  <TrendingUp className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/modern-office-meeting.png"
                alt="Investidores SOITO"
                width={600}
                height={500}
                className="rounded-lg"
              />
              <div
                className={`absolute inset-0 rounded-lg ${
                  theme === "dark"
                    ? "bg-gradient-to-t from-black/50 to-transparent"
                    : "bg-gradient-to-t from-white/50 to-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={`py-20 ${theme === "dark" ? "bg-[#0B0B0B]" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Nossos <span className="text-[#BFA86B]">Diferenciais</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Anos de mercado", icon: Award },
              { number: "25", label: "Empreendimentos entregues", icon: Building2 },
              { number: "150k", label: "m² construídos", icon: TrendingUp },
              { number: "2.5k", label: "Clientes atendidos", icon: Users },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#BFA86B] mb-2">{item.number}</div>
                <div className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              O que dizem nossos <span className="text-[#BFA86B]">clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Empresa séria, entregou antes do prazo. Superou todas as expectativas.",
                author: "Maria Silva",
                role: "Investidora",
              },
              {
                text: "Me surpreendi com a qualidade do imóvel e o atendimento personalizado.",
                author: "João Santos",
                role: "Cliente",
              },
              {
                text: "Rentabilidade exatamente como projetado. Parceria de longo prazo garantida.",
                author: "Carlos Oliveira",
                role: "Investidor",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`${theme === "dark" ? "bg-[#0B0B0B] border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"}`}
              >
                <CardContent className="p-8">
                  <p className={`mb-6 italic ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#BFA86B] rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className={`font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {testimonial.author}
                      </div>
                      <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Notícias */}
      <section id="blog" className={`py-20 ${theme === "dark" ? "bg-[#0B0B0B]" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Últimas do <span className="text-[#BFA86B]">Blog</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Como escolher seu imóvel ideal",
                excerpt: "Dicas essenciais para fazer a melhor escolha na hora de investir em imóveis.",
                image: "/modern-apartment.png",
              },
              {
                title: "5 motivos para investir em imóveis",
                excerpt: "Descubra por que o mercado imobiliário continua sendo uma das melhores opções.",
                image: "/real-estate-investment-chart.png",
              },
              {
                title: "Sustentabilidade na construção civil",
                excerpt: "Como a SOITO incorpora práticas sustentáveis em seus empreendimentos.",
                image: "/sustainable-building.png",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 group overflow-hidden hover:border-[#BFA86B]/40 ${
                  theme === "dark" ? "bg-black border-[#BFA86B]/20" : "bg-white border-[#BFA86B]/30 shadow-lg"
                }`}
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 group-hover:text-[#BFA86B] transition-colors ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className={`text-[#BFA86B] hover:bg-[#BFA86B] p-0 ${
                      theme === "dark" ? "hover:text-black" : "hover:text-white"
                    }`}
                  >
                    Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className={`border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] ${
                theme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
            >
              Ver todas as notícias
            </Button>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Vamos construir <span className="text-[#BFA86B]">juntos?</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Entre em contato conosco e descubra como podemos transformar suas ideias em investimentos concretos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90 text-lg px-8 py-4" asChild>
              <Link href="#contato">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] text-lg px-8 py-4 ${
                theme === "dark" ? "hover:text-black" : "hover:text-white"
              }`}
              asChild
            >
              <Link href="/empreendimento-investidor">
                <TrendingUp className="w-5 h-5 mr-2" />
                Seja um Investidor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contato"
        className={`border-t py-16 ${
          theme === "dark" ? "bg-[#0B0B0B] border-[#BFA86B]/20" : "bg-gray-50 border-[#BFA86B]/30"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src={theme === "dark" ? "/images/logo-white.png" : "/images/logo-black.png"}
                alt="SOITO INC"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Investimentos Concretos</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className={`transition-colors ${
                    theme === "dark" ? "text-gray-400 hover:text-[#BFA86B]" : "text-gray-500 hover:text-[#BFA86B]"
                  }`}
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className={`transition-colors ${
                    theme === "dark" ? "text-gray-400 hover:text-[#BFA86B]" : "text-gray-500 hover:text-[#BFA86B]"
                  }`}
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className={`transition-colors ${
                    theme === "dark" ? "text-gray-400 hover:text-[#BFA86B]" : "text-gray-500 hover:text-[#BFA86B]"
                  }`}
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Links</h4>
              <div className="space-y-2">
                <Link
                  href="#sobre"
                  className={`block transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-[#BFA86B]" : "text-gray-600 hover:text-[#BFA86B]"
                  }`}
                >
                  Sobre
                </Link>
                <Link
                  href="#empreendimentos"
                  className={`block transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-[#BFA86B]" : "text-gray-600 hover:text-[#BFA86B]"
                  }`}
                >
                  Empreendimentos
                </Link>
                <Link
                  href="#blog"
                  className={`block transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-[#BFA86B]" : "text-gray-600 hover:text-[#BFA86B]"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="#contato"
                  className={`block transition-colors ${
                    theme === "dark" ? "text-gray-300 hover:text-[#BFA86B]" : "text-gray-600 hover:text-[#BFA86B]"
                  }`}
                >
                  Contato
                </Link>
              </div>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Contato</h4>
              <div className="space-y-2">
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <Phone className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  (11) 3456-7890
                </div>
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <MessageCircle className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  (11) 99999-9999
                </div>
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <Mail className="w-4 h-4 mr-2 text-[#BFA86B]" />
                  contato@soitoinc.com.br
                </div>
              </div>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Endereço</h4>
              <div className={`flex items-start ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                <MapPin className="w-4 h-4 mr-2 text-[#BFA86B] mt-1" />
                <div>
                  Av. Faria Lima, 1234
                  <br />
                  Pinheiros, São Paulo - SP
                  <br />
                  CEP: 01452-000
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border-t pt-8 text-center ${theme === "dark" ? "border-[#BFA86B]/20" : "border-[#BFA86B]/30"}`}
          >
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
              © 2024 SOITO INC. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
