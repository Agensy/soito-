"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

type SlideType = {
  image: string
  title: string
  subtitle: string
  tag?: string
  icon?: React.ReactNode
}

interface ImageSliderProps {
  slides: SlideType[]
  autoPlayInterval?: number
  className?: string
}

export function ImageSlider({ slides, autoPlayInterval = 5000, className }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useIsMobile()

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto play functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout | null = null

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    }
  }, [currentIndex, isAutoPlaying, autoPlayInterval])

  // Pause auto play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className={cn("relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main slide */}
      <div className="w-full h-full transition-all duration-500 ease-in-out">
        <Image
          src={slides[currentIndex].image || "/placeholder.svg"}
          alt={slides[currentIndex].title}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay - opacidade reduzida */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12 w-full md:max-w-3xl z-10">
          {slides[currentIndex].tag && (
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-primary-500/90 text-white text-xs sm:text-sm font-bold py-1 px-2 sm:px-3 rounded-full mb-2 sm:mb-4">
              {slides[currentIndex].icon}
              {slides[currentIndex].tag}
            </div>
          )}
          <div className="bg-black/30 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-3">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200">{slides[currentIndex].subtitle}</p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300 z-20"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? "w-6 sm:w-8 bg-primary-500" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir para slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 