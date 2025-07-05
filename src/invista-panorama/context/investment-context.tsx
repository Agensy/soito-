"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type InvestmentStep = {
  id: number
  title: string
  completed: boolean
  confirmed: boolean
}

type InvestmentContextType = {
  steps: InvestmentStep[]
  currentStep: number
  goToStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  confirmStep: (confirmed: boolean) => void
  isLastStep: boolean
}

const initialSteps: InvestmentStep[] = [
  { id: 1, title: "Oportunidade de Investimento", completed: false, confirmed: false },
  { id: 2, title: "Simulador de Rentabilidade", completed: false, confirmed: false },
  { id: 3, title: "Cronograma do Projeto", completed: false, confirmed: false },
]

const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined)

export function InvestmentProvider({ children }: { children: ReactNode }) {
  const [steps, setSteps] = useState<InvestmentStep[]>(initialSteps)
  const [currentStep, setCurrentStep] = useState(1)

  // Load state from localStorage on component mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const savedInvestment = localStorage.getItem("panoramaTaubateInvestment")
        if (savedInvestment) {
          try {
            const { steps: savedSteps, currentStep: savedCurrentStep } = JSON.parse(savedInvestment)
            if (Array.isArray(savedSteps) && typeof savedCurrentStep === "number") {
              setSteps(savedSteps)
              setCurrentStep(savedCurrentStep)
            }
          } catch (parseError) {
            console.error("Error parsing saved investment:", parseError)
          }
        }
      }
    } catch (storageError) {
      console.error("Error accessing localStorage:", storageError)
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("panoramaTaubateInvestment", JSON.stringify({ steps, currentStep }))
      }
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
  }, [steps, currentStep])

  const goToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      // Mark all previous steps as completed
      setSteps((prevSteps) =>
        prevSteps.map((s) => ({
          ...s,
          completed: s.id < step || s.completed,
        })),
      )
      setCurrentStep(step)
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setSteps((prevSteps) => prevSteps.map((step) => (step.id === currentStep ? { ...step, completed: true } : step)))
      setCurrentStep((prev) => prev + 1)
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const confirmStep = (confirmed: boolean) => {
    setSteps((prevSteps) => prevSteps.map((step) => (step.id === currentStep ? { ...step, confirmed } : step)))
  }

  const isLastStep = currentStep === steps.length

  return (
    <InvestmentContext.Provider
      value={{
        steps,
        currentStep,
        goToStep,
        nextStep,
        prevStep,
        confirmStep,
        isLastStep,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  )
}

export function useInvestment() {
  const context = useContext(InvestmentContext)
  if (context === undefined) {
    throw new Error("useInvestment must be used within an InvestmentProvider")
  }
  return context
} 