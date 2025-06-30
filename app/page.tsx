"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import { LuxuryHero } from "@/components/luxury/luxury-hero"
import { LuxurySection } from "@/components/luxury/luxury-section"
import { LuxuryCard } from "@/components/luxury/luxury-card"
import { LuxuryStats } from "@/components/luxury/luxury-stats"
import { LuxuryForm } from "@/components/luxury/luxury-form"
import { LuxuryGallery } from "@/components/luxury/luxury-gallery"
import { LuxuryProjectsSection } from "@/components/luxury/luxury-projects-section"
import { LuxuryPartnersSection } from "@/components/luxury/luxury-partners-section"
import { Building2, Users, TrendingUp, Award, Phone, Mail, MapPin, ArrowRight, Play } from "lucide-react"

export default function HomePage() {
  const statsData = [
    {
      value: "15+",
      label: "Anos de Experiência",
      icon: <Award className="w-8 h-8" />,
      description: "No mercado imobiliário",
    },
    {
      value: "500+",
      label: "Projetos Entregues",
      icon: <Building2 className="w-8 h-8" />,
      description: "Empreendimentos de sucesso",
    },
    {
      value: "10K+",
      label: "Clientes Satisfeitos",
      icon: <Users className="w-8 h-8" />,
      description: "Famílias realizadas",
    },
    {
      value: "98%",
      label: "Taxa de Satisfação",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Aprovação dos clientes",
    },
  ]

  const galleryImages = [
    {
      src: "/modern-apartment-building.png",
      alt: "Edifício Residencial Moderno",
      title: "Arquitetura Contemporânea",
      description: "Projetos que combinam elegância e funcionalidade",
    },
    {
      src: "/luxury-lobby.png",
      alt: "Lobby de Luxo",
      title: "Ambientes Sofisticados",
      description: "Espaços pensados para o seu conforto",
    },
    {
      src: "/rooftop-pool.png",
      alt: "Piscina na Cobertura",
      title: "Lazer Exclusivo",
      description: "Áreas de lazer premium para toda família",
    },
    {
      src: "/modern-office-meeting.png",
      alt: "Escritório Moderno",
      title: "Espaços Corporativos",
      description: "Ambientes profissionais de alto padrão",
    },
    {
      src: "/sustainable-building.png",
      alt: "Edifício Sustentável",
      title: "Sustentabilidade",
      description: "Construções eco-friendly e eficientes",
    },
    {
      src: "/gourmet-area.png",
      alt: "Área Gourmet",
      title: "Espaços Gourmet",
      description: "Ambientes perfeitos para entretenimento",
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
      placeholder: "Tipo de imóvel ou investimento",
      required: false,
    },
    {
      name: "message",
      label: "Mensagem",
      type: "textarea" as const,
      placeholder: "Conte-nos mais sobre seus objetivos...",
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

      {/* Hero Section */}
      <LuxuryHero
        badge="Excelência em Empreendimentos Imobiliários"
        title={
          <span className="luxury-text-gradient">
            SOITO
            <br />
            <span className="text-white">INC</span>
          </span>
        }
        subtitle="Transformamos sonhos em realidade através de empreendimentos imobiliários de alto padrão, conectando investidores visionários a oportunidades únicas no mercado."
        backgroundImage="/images/hero-bg.png"
        primaryAction={{
          label: "Explorar Oportunidades",
          onClick: () => console.log("Explorar clicked"),
          icon: <ArrowRight className="w-5 h-5 mr-2" />,
        }}
        secondaryAction={{
          label: "Assistir Apresentação",
          onClick: () => console.log("Video clicked"),
          icon: <Play className="w-5 h-5 mr-2" />,
        }}
      />

      {/* Stats Section */}
      <LuxuryStats
        stats={statsData}
        title="Números que Falam por Si"
        subtitle="Nossa trajetória de sucesso é construída com base em resultados sólidos e relacionamentos duradouros."
        className="bg-gradient-to-br from-black via-gray-900 to-black"
      />

      {/* About Section */}
      <LuxurySection
        title="Excelência em Cada Detalhe"
        subtitle="Na SOITO INC, cada projeto é uma obra-prima cuidadosamente planejada para superar expectativas e criar valor duradouro."
        variant="gradient"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LuxuryCard
            title="Para Clientes"
            description="Encontre o imóvel dos seus sonhos com nossa curadoria especializada de empreendimentos premium."
            icon={<Users className="w-8 h-8" />}
            action={{
              label: "Explorar Imóveis",
              onClick: () => console.log("Cliente clicked"),
            }}
            variant="featured"
          />

          <LuxuryCard
            title="Para Investidores"
            description="Oportunidades exclusivas de investimento com alto potencial de retorno e segurança garantida."
            icon={<TrendingUp className="w-8 h-8" />}
            action={{
              label: "Ver Oportunidades",
              onClick: () => console.log("Investidor clicked"),
            }}
            variant="featured"
          />

          <LuxuryCard
            title="Consultoria Especializada"
            description="Assessoria completa desde a escolha do investimento até a entrega das chaves."
            icon={<Award className="w-8 h-8" />}
            action={{
              label: "Falar com Especialista",
              onClick: () => console.log("Consultoria clicked"),
            }}
            variant="featured"
          />
        </div>
      </LuxurySection>

      {/* Projects Section */}
      <LuxuryProjectsSection />

      {/* Partners Section - Nova seção de parceiros */}
      <LuxuryPartnersSection />

      {/* Gallery Section */}
      <LuxurySection
        title="Nossos Projetos"
        subtitle="Conheça alguns dos empreendimentos que definem o padrão de excelência no mercado imobiliário."
        variant="gradient"
      >
        <LuxuryGallery images={galleryImages} />
      </LuxurySection>

      {/* Services Section */}
      <LuxurySection
        title="Nossos Serviços"
        subtitle="Soluções completas para todas as suas necessidades imobiliárias."
        variant="dark"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LuxuryCard
            title="Desenvolvimento"
            description="Criação de empreendimentos únicos e inovadores."
            icon={<Building2 className="w-6 h-6" />}
            variant="minimal"
          />

          <LuxuryCard
            title="Investimentos"
            description="Oportunidades selecionadas com alto potencial."
            icon={<TrendingUp className="w-6 h-6" />}
            variant="minimal"
          />

          <LuxuryCard
            title="Consultoria"
            description="Assessoria especializada em todo o processo."
            icon={<Users className="w-6 h-6" />}
            variant="minimal"
          />

          <LuxuryCard
            title="Pós-Venda"
            description="Suporte completo após a aquisição."
            icon={<Award className="w-6 h-6" />}
            variant="minimal"
          />
        </div>
      </LuxurySection>

      {/* Contact Section */}
      <LuxurySection
        title="Entre em Contato"
        subtitle="Estamos prontos para transformar seus objetivos imobiliários em realidade."
        variant="gradient"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <LuxuryForm
              title="Fale Conosco"
              subtitle="Preencha o formulário e nossa equipe entrará em contato em até 24 horas."
              fields={contactFields}
              submitLabel="Enviar Mensagem"
              submitIcon={<Mail className="w-5 h-5 mr-2" />}
              onSubmit={handleContactSubmit}
            />
          </div>

          <div className="space-y-8">
            <div className="luxury-glass rounded-2xl p-8">
              <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Telefone</p>
                    <p className="text-white text-lg">(11) 3000-0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">E-mail</p>
                    <p className="text-white text-lg">contato@soitoinc.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BFA86B]/20 to-[#BFA86B]/10 flex items-center justify-center text-[#BFA86B] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">Endereço</p>
                    <p className="text-white text-lg">
                      Av. Paulista, 1000
                      <br />
                      São Paulo - SP
                    </p>
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
