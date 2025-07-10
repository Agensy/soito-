import { Header } from '../components/layout/Header'
import { HeroSlider } from '../components/sections/HeroSlider'
import { CEOSection } from '../components/sections/CEOSection'
import { CompromissoSection } from '../components/sections/CompromissoSection'
import { InteractiveProjectSection } from '../components/sections/InteractiveProjectSection'
import { Building2, Home, Phone, Mail, MapPin } from 'lucide-react'
import { Footer } from '../components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* CEO Section */}
      <section id="about">
        <CEOSection />
      </section>

      {/* Compromisso Section */}
      <section id="compromisso">
        <CompromissoSection />
      </section>

      {/* Interactive Projects Section */}
      <section id="projects-interactive">
        <InteractiveProjectSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-gradient">Nossos Projetos</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Empreendimentos que transformam a paisagem urbana e elevam o padrão de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background-secondary border border-border-primary hover:border-primary-500 transition-smooth hover:-translate-y-2 hover:shadow-heavy">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-primary-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">Panorama Taubaté</h3>
                <p className="text-text-secondary mb-4">
                  Apartamentos de 2 dormitórios com rentabilidade de 19,1% a.a.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-bold">R$ 3.500/m²</span>
                  <span className="text-sm text-text-muted">Lançamento Set/25</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background-secondary border border-border-primary hover:border-primary-500 transition-smooth hover:-translate-y-2 hover:shadow-heavy">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <Home className="w-16 h-16 text-primary-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">Residencial Luxo</h3>
                <p className="text-text-secondary mb-4">
                  Apartamentos de alto padrão com acabamentos premium.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-bold">R$ 8.500/m²</span>
                  <span className="text-sm text-text-muted">Em Construção</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background-secondary border border-border-primary hover:border-primary-500 transition-smooth hover:-translate-y-2 hover:shadow-heavy">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-primary-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">Corporate Center</h3>
                <p className="text-text-secondary mb-4">
                  Complexo empresarial com salas comerciais e coworking.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-bold">R$ 12.000/m²</span>
                  <span className="text-sm text-text-muted">Planejamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Fale Conosco</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Entre em contato para conhecer nossas oportunidades de investimento e projetos exclusivos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-10 h-10 mb-4 text-primary-500" />
              <h3 className="text-lg font-bold text-text-primary mb-2">Telefone</h3>
              <p className="text-text-secondary">(11) 99999-9999</p>
            </div>
            <div className="text-center">
              <Mail className="w-10 h-10 mb-4 text-primary-500" />
              <h3 className="text-lg font-bold text-text-primary mb-2">Email</h3>
              <p className="text-text-secondary">contato@soito.com.br</p>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 mb-4 text-primary-500" />
              <h3 className="text-lg font-bold text-text-primary mb-2">Endereço</h3>
              <p className="text-text-secondary">São Paulo, SP</p>
            </div>
          </div>

          <div className="glass-adaptive backdrop-blur-[15px] p-8 rounded-2xl border border-border-secondary">
            <p className="text-lg text-text-primary mb-6">
              Quer saber mais sobre nossos projetos e oportunidades de investimento?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg hover:shadow-golden hover:-translate-y-1 transition-smooth">
                Agendar Consultoria
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-bold rounded-lg hover:bg-primary-500 hover:text-white transition-smooth">
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
