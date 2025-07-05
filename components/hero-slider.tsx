"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight,
  Calculator,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Building2,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Interfaces TypeScript
interface SlideContent {
  id: string
  type: 'branding' | 'opportunity'
  content: any
}

interface HeroSliderProps {
  slides?: SlideContent[]
  autoplay?: boolean
  autoplayDelay?: number
  showIndicators?: boolean
  showNavigation?: boolean
  showAutoplayControl?: boolean
  className?: string
  onSlideChange?: (index: number) => void
}

// Dados dos slides
const defaultSlides: SlideContent[] = [
  {
    id: 'branding',
    type: 'branding',
    content: {
      logo: '/images/logo-white.png',
      tagline: 'INVESTIMENTOS CONCRETOS',
      headline: 'Transformamos oportunidades em grandes conquistas',
      subtitle: 'Com visão, propósito e colaboração, construímos resultados sólidos e duradouros para nossos investidores',
      cta: 'CONHEÇA NOSSOS PROJETOS'
    }
  },
  {
    id: 'opportunity',
    type: 'opportunity',
    content: {
      badge: '🟢 Oportunidade Limitada • 180m² Disponíveis',
      headline: 'INVISTA NA FASE MAIS LUCRATIVA DO MERCADO IMOBILIÁRIO',
      subtitle: 'Potencialize seus investimentos com rentabilidade de 19,1% a.a. no Panorama Taubaté',
      cta1: 'QUERO INVESTIR AGORA',
      cta2: 'VER SIMULAÇÃO DE RETORNO',
      stats: [
        { icon: TrendingUp, number: '19,1%', label: 'Rentabilidade a.a.' },
        { icon: Users, number: '328k', label: 'Habitantes Taubaté' },
        { icon: MapPin, number: '130km', label: 'de São Paulo' },
        { icon: Calendar, number: 'Mar/2028', label: 'Entrega prevista' }
      ],
      cards: [
        { icon: Building2, title: 'Renderização do Panorama Taubaté', content: 'Visualização 3D' },
        { icon: MapPin, title: 'Localização Premium', content: 'Rua das Andradas, 365 - Taubaté/SP' },
        { icon: Home, title: 'Terreno de 6.580,55 m²', content: 'Apartamentos de 56 a 60 m²' }
      ]
    }
  }
]

// Custom hook para lógica do slider
function useSlider(totalSlides: number, autoplay: boolean, delay: number) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextSlide, delay)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide, delay])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === ' ') {
        e.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide, togglePlayPause])

  return {
    currentSlide,
    isPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlayPause
  }
}

// Componente principal
export function HeroSlider({
  slides = defaultSlides,
  autoplay = true,
  autoplayDelay = 5000,
  showIndicators = true,
  showNavigation = true,
  showAutoplayControl = true,
  className,
  onSlideChange
}: HeroSliderProps) {
  const {
    currentSlide,
    isPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlayPause
  } = useSlider(slides.length, autoplay, autoplayDelay)

  // Touch/Swipe handling
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange?.(currentSlide)
  }, [currentSlide, onSlideChange])

  return (
    <div 
      className={cn(
        "relative w-full h-screen overflow-hidden bg-background",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlide].type === 'branding' && (
              <BrandingSlide content={slides[currentSlide].content} />
            )}
            {slides[currentSlide].type === 'opportunity' && (
              <OpportunitySlide content={slides[currentSlide].content} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Desktop Only */}
      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-[#BFA86B] hover:shadow-[0_8px_32px_rgba(191,168,107,0.3)] transition-all duration-300 hover:-translate-y-3 z-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-[#BFA86B] hover:shadow-[0_8px_32px_rgba(191,168,107,0.3)] transition-all duration-300 hover:-translate-y-3 z-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A]"
                  : "w-2 bg-[#BFA86B]/30 hover:bg-[#BFA86B]/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Autoplay Control */}
      {showAutoplayControl && (
        <button
          onClick={togglePlayPause}
          className="fixed bottom-10 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-[#BFA86B] hover:shadow-[0_8px_32px_rgba(191,168,107,0.3)] transition-all duration-300 hover:-translate-y-1 z-50"
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-gray-900 dark:text-white" />
          ) : (
            <Play className="w-5 h-5 text-gray-900 dark:text-white ml-0.5" />
          )}
        </button>
      )}
    </div>
  )
}

// Slide 1 - Branding
function BrandingSlide({ content }: { content: any }) {
  return (
    <div className="h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl w-full grid lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-20 bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] rounded-lg flex items-center justify-center shadow-[0_8px_32px_rgba(191,168,107,0.3)]">
              <span className="text-black font-bold text-xl">SOITO</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-2xl md:text-4xl font-light font-serif bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] bg-clip-text text-transparent"
          >
            {content.tagline}
          </motion.h2>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white leading-tight"
          >
            {content.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            {content.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <button className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-[0_8px_32px_rgba(191,168,107,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              {content.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-80 h-80 rounded-full bg-white/5 dark:bg-black/20 backdrop-blur-md border border-[#BFA86B]/20 flex items-center justify-center shadow-2xl"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-[#BFA86B]/20 to-[#D4C08A]/20 rounded-full flex items-center justify-center border border-[#BFA86B]/30">
              <span className="text-6xl font-bold text-[#BFA86B]">S</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Slide 2 - Opportunity
function OpportunitySlide({ content }: { content: any }) {
  return (
    <div className="h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl w-full grid lg:grid-cols-[55%_45%] gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-md">
              <span className="text-green-400 text-sm font-medium">{content.badge}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight font-serif"
          >
            INVISTA NA FASE MAIS{' '}
            <span className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] bg-clip-text text-transparent">
              LUCRATIVA
            </span>{' '}
            DO MERCADO IMOBILIÁRIO
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            Potencialize seus investimentos com rentabilidade de{' '}
            <span className="font-bold text-[#BFA86B]">19,1% a.a.</span> no Panorama Taubaté
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <button className="bg-gradient-to-r from-[#BFA86B] to-[#D4C08A] text-black px-8 py-4 rounded-lg font-semibold hover:shadow-[0_8px_32px_rgba(191,168,107,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              {content.cta1}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-[#BFA86B] text-[#BFA86B] px-8 py-4 rounded-lg font-semibold hover:bg-[#BFA86B]/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              {content.cta2}
              <Calculator className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {content.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                className="text-center space-y-2 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-6 h-6 text-[#BFA86B] mx-auto" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Cards Column */}
        <div className="space-y-4">
          {content.cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 hover:border-[#BFA86B]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <card.icon className="w-5 h-5 text-[#BFA86B]" />
                <h3 className="font-medium text-gray-900 dark:text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
