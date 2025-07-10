"use client"

import { useJourney } from "../context/journey-context"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function JourneyNavigation() {
  const { steps, currentStep, goToStep } = useJourney()
  const isMobile = useIsMobile()

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border-primary -translate-y-1/2 z-0"></div>
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 -translate-y-1/2 z-10 transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        ></div>

        <div className="relative z-20 flex justify-between">
          {steps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => (step.completed || step.id === currentStep ? goToStep(step.id) : null)}
              className={`flex flex-col items-center ${
                step.completed || step.id === currentStep ? "cursor-pointer" : "cursor-not-allowed opacity-70"
              }`}
              whileHover={step.completed || step.id === currentStep ? { scale: 1.05 } : {}}
              whileTap={step.completed || step.id === currentStep ? { scale: 0.95 } : {}}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                  step.id === currentStep
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white ring-2 ring-primary-500 ring-offset-2 ring-offset-background"
                    : step.completed
                      ? "bg-primary-600 text-white"
                      : "bg-background-secondary backdrop-blur-sm text-text-muted border border-border-primary"
                }`}
              >
                {step.completed ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
              </div>
              {!isMobile && (
                <span
                  className={`mt-2 text-xs font-medium text-center max-w-[80px] ${
                    step.id === currentStep ? "text-primary-500" : step.completed ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {step.title}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="mt-4 text-center">
          <span className="text-sm font-medium text-text-primary">{steps.find((step) => step.id === currentStep)?.title}</span>
        </div>
      )}
    </div>
  )
} 