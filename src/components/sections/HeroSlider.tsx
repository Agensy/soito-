"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Building2, DollarSign, Star, TrendingUp, Home, CalendarClock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '../../lib/utils'
import { LucideIcon } from 'lucide-react'

interface SlideData {
  id: string
  type: 'branding' | 'opportunity'
  content: {
    badge?: string
    headline: string
    subtitle?: string
    ctas?: Array<{
      text: string
      variant: 'primary' | 'ghost' | 'outline'
      icon?: LucideIcon
    }>
    stats?: Array<{
      icon: LucideIcon
      number: string
      label: string
    }>
  }
}

const slides: SlideData[] = [
  {
    id: '1',
    type: 'branding',
    content: {
      badge: 'SOITO INC',
      headline: 'Transformando Visões em Realidade Imobiliária',
      subtitle: '25 anos de expertise em incorporação de luxo com projetos que elevam o padrão urbanístico das cidades.',
      ctas: [
        { text: 'Conheça Nossos Projetos', variant: 'primary' },
        { text: 'Fale com um Consultor', variant: 'outline' }
      ],
      stats: [
        { icon: Building2, number: '150+', label: 'Projetos Entregues' },
        { icon: DollarSign, number: 'R$ 2.5B', label: 'Valor em Desenvolvimento' },
        { icon: Star, number: '98%', label: 'Satisfação dos Clientes' }
      ]
    }
  },
  {
    id: '2',
    type: 'opportunity',
    content: {
      badge: 'OPORTUNIDADE ÚNICA',
      headline: 'Panorama Taubaté - Lançamento Exclusivo',
      subtitle: 'Apartamentos de 2 dormitórios com rentabilidade de 19,1% a.a. em localização estratégica.',
      ctas: [
        { text: 'Simular Investimento', variant: 'primary' },
        { text: 'Ver Localização', variant: 'outline' }
      ],
      stats: [
        { icon: TrendingUp, number: '19.1%', label: 'Rentabilidade Anual' },
        { icon: Home, number: '180m²', label: 'Disponível' },
        { icon: CalendarClock, number: 'Set/25', label: 'Lançamento' }
      ]
    }
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Troca automática de slides
  useEffect(() => {
    if (!isPlaying) return
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  // Troca manual zera o timer
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setIsPlaying(false)
  }

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length)
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length)

  return (
    <section id="hero-slider" className="relative w-full min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 bg-background overflow-hidden flex items-center">
      <div className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full transition-opacity duration-700 flex flex-col items-center justify-center",
              index === currentSlide ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
            )}
            aria-hidden={index !== currentSlide}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center">
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                  {slide.content.badge && (
                    <Badge variant="default" className="animate-pulse bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                      {slide.content.badge}
                    </Badge>
                  )}
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight">
                    <span className="text-gradient">{slide.content.headline}</span>
                  </h1>
                  {slide.content.subtitle && (
                    <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                      {slide.content.subtitle}
                    </p>
                  )}
                  {slide.content.ctas && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      {slide.content.ctas.map((cta, ctaIndex) => (
                        <Button
                          key={ctaIndex}
                          variant={cta.variant}
                          size="lg"
                          className={cn(
                            "min-w-[200px]",
                            cta.variant === 'primary' && "hover:shadow-golden hover:-translate-y-1"
                          )}
                        >
                          {cta.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controles */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="p-2 rounded-full bg-background-glass backdrop-blur-sm border border-border-secondary hover:border-primary-500 transition-smooth"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-text-primary" />
          ) : (
            <Play className="w-4 h-4 text-text-primary" />
          )}
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide
                  ? 'bg-primary-500'
                  : 'bg-border-primary hover:bg-primary-500 hover:bg-opacity-50'
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background-glass backdrop-blur-sm border border-border-secondary hover:border-primary-500 transition-smooth z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background-glass backdrop-blur-sm border border-border-secondary hover:border-primary-500 transition-smooth z-20"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-text-primary" />
      </button>
    </section>
  )
} 