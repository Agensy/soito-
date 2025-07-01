"use client"

import { useInvestment } from "../context/investment-context"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function InvestmentNavigation() {
  const { steps, currentStep, goToStep } = useInvestment()

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#BFA86B] to-[#8B7355] -translate-y-1/2 z-10 transition-all duration-500"
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
                    ? "bg-gradient-to-r from-[#BFA86B] to-[#8B7355] text-white ring-2 ring-[#BFA86B] ring-offset-2 ring-offset-[#0B0B0B]"
                    : step.completed
                      ? "bg-[#BFA86B] text-white"
                      : "bg-white/10 backdrop-blur-sm text-gray-400 border border-white/20"
                }`}
              >
                {step.completed ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center max-w-[100px] hidden md:block ${
                  step.id === currentStep ? "text-[#BFA86B]" : step.completed ? "text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile title */}
      <div className="mt-4 text-center md:hidden">
        <span className="text-sm font-medium text-white">{steps.find((step) => step.id === currentStep)?.title}</span>
      </div>
    </div>
  )
} 