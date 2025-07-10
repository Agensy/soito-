"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Step = {
  id: number
  title: string
  completed: boolean
  confirmed: boolean
}

type JourneyContextType = {
  steps: Step[]
  currentStep: number
  goToStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  confirmStep: (confirmed: boolean) => void
  isLastStep: boolean
}

const initialSteps: Step[] = [
  { id: 1, title: "Apresentação da Oportunidade", completed: false, confirmed: false },
  { id: 2, title: "Perfil do Investimento", completed: false, confirmed: false },
  { id: 3, title: "Cronograma do Projeto", completed: false, confirmed: false },
]

const JourneyContext = createContext<JourneyContextType | undefined>(undefined)

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [steps, setSteps] = useState<Step[]>(initialSteps)
  const [currentStep, setCurrentStep] = useState(1)

  // Load state from localStorage on component mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const savedJourney = localStorage.getItem("panoramaInvestmentJourney")
        if (savedJourney) {
          try {
            const { steps: savedSteps, currentStep: savedCurrentStep } = JSON.parse(savedJourney)
            if (Array.isArray(savedSteps) && typeof savedCurrentStep === "number") {
              setSteps(savedSteps)
              setCurrentStep(savedCurrentStep)
            }
          } catch (parseError) {
            // Error parsing saved journey data
          }
        }
      }
    } catch (storageError) {
      // Error accessing localStorage
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("panoramaInvestmentJourney", JSON.stringify({ steps, currentStep }))
      }
    } catch (error) {
      // Error saving to localStorage
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
      // Adicionar rolagem para o topo
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
    <JourneyContext.Provider
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
    </JourneyContext.Provider>
  )
}

export function useJourney() {
  const context = useContext(JourneyContext)
  if (context === undefined) {
    throw new Error("useJourney must be used within a JourneyProvider")
  }
  return context
} 