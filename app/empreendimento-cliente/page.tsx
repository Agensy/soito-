"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle,
  Car,
  Wifi,
  Dumbbell,
  Coffee,
  Trees,
  Shield,
  Waves,
  ChefHat,
  PawPrint,
  Briefcase,
  Star,
  Calendar,
  Home,
  Maximize,
  ChevronLeft,
  ChevronRight,
  Calculator,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function EmpreendimentoCliente() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentPlant, setCurrentPlant] = useState(0)

  const galleryImages = [
    "/modern-building-facade.png",
    "/luxury-lobby.png",
    "/rooftop-pool.png",
    "/coworking-space.png",
    "/fitness-center.png",
    "/gourmet-area.png",
  ]

  const plantas = [
    {
      type: "Studio",
      size: "32 m²",
      description:
        "Ambiente integrado com cozinha americana, área de estar e dormitório. Ideal para jovens profissionais.",
      features: ["1 Banheiro", "Cozinha Americana", "Varanda", "1 Vaga"],
      image: "/studio-plant.png",
    },
    {
      type: "Loft",
      size: "45 m²",
      description:
        "Conceito moderno com pé-direito duplo, mezanino e ampla área social. Perfeito para quem busca sofisticação.",
      features: ["1 Banheiro", "Mezanino", "Pé-direito Duplo", "1 Vaga"],
      image: "/loft-plant.png",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

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
              <Link href="#projeto" className="text-white hover:text-[#BFA86B] transition-colors">
                O Projeto
              </Link>
              <Link href="#plantas" className="text-white hover:text-[#BFA86B] transition-colors">
                Plantas
              </Link>
              <Link href="#lazer" className="text-white hover:text-[#BFA86B] transition-colors">
                Lazer
              </Link>
              <Link href="#localizacao" className="text-white hover:text-[#BFA86B] transition-colors">
                Localização
              </Link>
              <Link href="#contato" className="text-white hover:text-[#BFA86B] transition-colors">
                Contato
              </Link>
            </nav>
            <Button
              className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90"
              onClick={() =>
                window.open("https://wa.me/5511999999999?text=Olá! Tenho interesse no Residencial Aurora", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-building-facade.png" alt="Residencial Aurora" fill className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            VIVA NO <span className="text-[#BFA86B]">RESIDENCIAL AURORA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Studio e Loft de 32 a 45 m² na <strong>Vila Madalena</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90 text-lg px-8 py-4" asChild>
              <Link href="#contato">
                <Calendar className="w-5 h-5 mr-2" />
                Agende sua Visita
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#BFA86B] text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black text-lg px-8 py-4"
              onClick={() =>
                window.open("https://wa.me/5511999999999?text=Olá! Tenho interesse no Residencial Aurora", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* O Projeto */}
      <section id="projeto" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O <span className="text-[#BFA86B]">Projeto</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Building2 className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Design Moderno</h3>
                <p className="text-gray-300">
                  Arquitetura contemporânea com linhas clean e materiais nobres, criando um ambiente sofisticado e
                  acolhedor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Áreas Comuns Decoradas</h3>
                <p className="text-gray-300">
                  Espaços pensados para o seu bem-estar, com decoração assinada e ambientes que inspiram conexão e
                  relaxamento.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Conectado com Tudo</h3>
                <p className="text-gray-300">
                  Localização privilegiada na Vila Madalena, próximo ao metrô, universidades, hospitais e principais
                  centros comerciais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#BFA86B]">Galeria</span>
            </h2>
            <p className="text-xl text-gray-300">Conheça cada detalhe do seu futuro lar</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[currentImage] || "/placeholder.svg"}
                alt="Galeria Residencial Aurora"
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-[#BFA86B]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <h4 className="text-[#BFA86B] font-bold mb-2">Fachada</h4>
              <p className="text-gray-300 text-sm">Design contemporâneo e elegante</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#BFA86B] font-bold mb-2">Áreas Comuns</h4>
              <p className="text-gray-300 text-sm">Espaços de convivência únicos</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#BFA86B] font-bold mb-2">Interiores</h4>
              <p className="text-gray-300 text-sm">Ambientes decorados com sofisticação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section id="plantas" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#BFA86B]">Plantas</span>
            </h2>
            <p className="text-xl text-gray-300">Escolha o espaço perfeito para o seu estilo de vida</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-black border border-[#BFA86B]/20 rounded-lg p-1">
              {plantas.map((planta, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlant(index)}
                  className={`px-6 py-3 rounded-md transition-colors ${
                    index === currentPlant ? "bg-[#BFA86B] text-black" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {planta.type} - {planta.size}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={plantas[currentPlant].image || "/placeholder.svg"}
                alt={`Planta ${plantas[currentPlant].type}`}
                width={500}
                height={400}
                className="w-full rounded-lg border border-[#BFA86B]/20"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-[#BFA86B] mr-3" />
                <h3 className="text-3xl font-bold text-white">
                  {plantas[currentPlant].type} - {plantas[currentPlant].size}
                </h3>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{plantas[currentPlant].description}</p>
              <div className="grid grid-cols-2 gap-4">
                {plantas[currentPlant].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90">
                <Maximize className="w-4 h-4 mr-2" />
                Ver Planta Completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lazer e Comodidades */}
      <section id="lazer" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lazer e <span className="text-[#BFA86B]">Comodidades</span>
            </h2>
            <p className="text-xl text-gray-300">Tudo que você precisa para viver com qualidade</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Waves, title: "Piscina", description: "Área aquática com deck" },
              { icon: Briefcase, title: "Coworking", description: "Espaço para trabalhar" },
              { icon: Dumbbell, title: "Fitness", description: "Academia completa" },
              { icon: PawPrint, title: "Pet Place", description: "Área para pets" },
              { icon: ChefHat, title: "Espaço Gourmet", description: "Cozinha compartilhada" },
              { icon: Coffee, title: "Lounge", description: "Área de descanso" },
              { icon: Trees, title: "Jardim", description: "Área verde privativa" },
              { icon: Car, title: "Garagem", description: "Vagas cobertas" },
              { icon: Shield, title: "Segurança 24h", description: "Portaria completa" },
              { icon: Wifi, title: "Wi-Fi", description: "Internet nas áreas comuns" },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="bg-[#0B0B0B] border-[#BFA86B]/20 hover:border-[#BFA86B]/40 transition-colors group"
              >
                <CardContent className="p-6 text-center">
                  <amenity.icon className="w-10 h-10 text-[#BFA86B] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-white mb-2">{amenity.title}</h4>
                  <p className="text-gray-400 text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#BFA86B]">Localização</span>
            </h2>
            <p className="text-xl text-gray-300">No coração da Vila Madalena</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#BFA86B] mx-auto mb-4" />
                  <p className="text-gray-300">Mapa Interativo</p>
                  <p className="text-sm text-gray-400">Rua Augusta, 1234 - Vila Madalena</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Próximo a tudo que importa:</h3>
              <div className="space-y-4">
                {[
                  { name: "Shopping Vila Madalena", distance: "5 min a pé", icon: Building2 },
                  { name: "Estação Faria Lima (Metrô)", distance: "8 min a pé", icon: Car },
                  { name: "Hospital Sírio-Libanês", distance: "10 min de carro", icon: Building2 },
                  { name: "PUC-SP", distance: "15 min de carro", icon: Building2 },
                  { name: "Parque Villa-Lobos", distance: "12 min de carro", icon: Trees },
                  { name: "Marginal Pinheiros", distance: "5 min de carro", icon: Car },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-black border border-[#BFA86B]/20 rounded-lg"
                  >
                    <div className="flex items-center">
                      <location.icon className="w-5 h-5 text-[#BFA86B] mr-3" />
                      <span className="text-white">{location.name}</span>
                    </div>
                    <Badge variant="outline" className="border-[#BFA86B] text-[#BFA86B]">
                      {location.distance}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condições Comerciais */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Condições <span className="text-[#BFA86B]">Comerciais</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#0B0B0B] border-[#BFA86B]/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-[#BFA86B] mb-4">A partir de R$ 280 mil</div>
                <p className="text-xl text-gray-300 mb-6">Studios a partir de 32m²</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-2" />
                    <span className="text-gray-300">Financiamento facilitado</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-2" />
                    <span className="text-gray-300">Entrada parcelada em até 36x</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#BFA86B] mr-2" />
                    <span className="text-gray-300">Chaves na planta com desconto</span>
                  </div>
                </div>
                <Button size="lg" className="bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90" asChild>
                  <Link href="#contato">
                    <Calculator className="w-5 h-5 mr-2" />
                    Simular Financiamento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fale Conosco */}
      <section id="contato" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale <span className="text-[#BFA86B]">Conosco</span>
            </h2>
            <p className="text-xl text-gray-300">Tire suas dúvidas e agende sua visita</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black border-[#BFA86B]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-gray-300">
                        Nome
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
                    <Label htmlFor="mensagem" className="text-gray-300">
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      className="bg-[#0B0B0B] border-[#BFA86B]/30 text-white focus:border-[#BFA86B] min-h-[120px]"
                      placeholder="Como podemos ajudar você?"
                    />
                  </div>
                  <Button className="w-full bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-black border-[#BFA86B]/20">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
                  <p className="text-gray-300 mb-6">Fale diretamente com nosso consultor</p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5511999999999?text=Olá! Tenho interesse no Residencial Aurora",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black border-[#BFA86B]/20">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-[#BFA86B] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Agende sua Visita</h3>
                  <p className="text-gray-300 mb-6">Conheça o apartamento decorado</p>
                  <Button className="w-full bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90" asChild>
                    <Link href="#contato">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Visita
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="text-center">
                <h4 className="text-white font-bold mb-4">Plantão de Vendas</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-[#BFA86B]" />
                    (11) 3456-7890
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-[#BFA86B]" />
                    vendas@residencialaurora.com.br
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Segunda a Sábado: 9h às 18h
                    <br />
                    Domingo: 10h às 16h
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
              <p className="text-gray-300 mb-4">Residencial Aurora</p>
              <p className="text-gray-400 text-sm">Vila Madalena, São Paulo</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <Link href="#projeto" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  O Projeto
                </Link>
                <Link href="#plantas" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Plantas
                </Link>
                <Link href="#lazer" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Lazer
                </Link>
                <Link href="#localizacao" className="block text-gray-300 hover:text-[#BFA86B] transition-colors">
                  Localização
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
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
                  vendas@residencialaurora.com.br
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
            <p className="text-gray-400">© 2024 SOITO INC - Residencial Aurora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
