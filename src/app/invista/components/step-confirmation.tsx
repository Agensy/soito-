"use client"

import { useJourney } from "../context/journey-context"
import { motion } from "framer-motion"
import { useState } from "react"

export function StepConfirmation() {
  const { currentStep, confirmStep, nextStep } = useJourney()
  const [showConfirmation, setShowConfirmation] = useState(true)

  // Questions for each step
  const questions = [
    "Esta oportunidade de investimento parece interessante para você?",
    "Este perfil de investimento se alinha com seus objetivos?",
    "O cronograma está de acordo com seu horizonte de investimento?",
  ]

  const handleConfirm = (confirmed: boolean) => {
    confirmStep(confirmed)
    nextStep()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="glass-adaptive backdrop-blur-[15px] rounded-xl p-6 md:p-8 shadow-heavy border border-border-secondary max-w-3xl mx-auto"
    >
      <h3 className="text-lg md:text-xl font-medium text-text-primary mb-4 text-center">{questions[currentStep - 1]}</h3>

      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <button
          onClick={() => handleConfirm(true)}
          className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2 px-4 text-sm font-medium rounded-lg border border-primary-500/30 shadow-golden transition-smooth"
        >
          Sim
        </button>

        <button
          onClick={() => handleConfirm(false)}
          className="bg-background-secondary hover:bg-background-tertiary text-text-primary border border-border-primary py-2 px-4 text-sm font-medium rounded-lg shadow-lg transition-smooth"
        >
          Preciso de mais informações
        </button>
      </div>
    </motion.div>
  )
} 