"use client"

import { useJourney } from "../context/journey-context"
import { motion, AnimatePresence } from "framer-motion"
import { Step1Content } from "./steps/step-1-content"
import { Step2Content } from "./steps/step-2-content"
import { Step3Content } from "./steps/step-3-content"

export function StepContent() {
  const { currentStep } = useJourney()

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Content />
      case 2:
        return <Step2Content />
      case 3:
        return <Step3Content />
      default:
        return <div>Conteúdo não encontrado</div>
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {renderStepContent()}
      </motion.div>
    </AnimatePresence>
  )
} 