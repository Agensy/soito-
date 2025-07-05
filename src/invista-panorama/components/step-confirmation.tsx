"use client"

import { useInvestment } from "../context/investment-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function StepConfirmation() {
  const { currentStep, confirmStep, nextStep } = useInvestment()
  const [showConfirmation, setShowConfirmation] = useState(true)

  // Questions for each step
  const questions = [
    "Esta oportunidade de investimento no Panorama Taubaté desperta seu interesse?",
    "Este perfil de investimento se alinha com seus objetivos financeiros?",
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
      transition={{ delay: 0.5, duration: 0.3 }}
      className="bg-[#0B0B0B]/80 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-[#BFA86B]/20 max-w-3xl mx-auto"
    >
      <h3 className="text-lg md:text-xl font-medium text-white mb-4 text-center">{questions[currentStep - 1]}</h3>

      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Button
          onClick={() => handleConfirm(true)}
          className="bg-gradient-to-r from-[#BFA86B] to-[#8B7355] hover:from-[#8B7355] hover:to-[#BFA86B] text-white py-2 text-sm font-medium rounded-lg border border-[#BFA86B]/30 shadow-lg shadow-[#BFA86B]/20"
        >
          Sim, tenho interesse
        </Button>

        <Button
          onClick={() => handleConfirm(false)}
          variant="outline"
          className="bg-white/5 hover:bg-white/10 text-white border-white/20 py-2 text-sm font-medium rounded-lg shadow-lg"
        >
          Preciso de mais informações
        </Button>
      </div>
    </motion.div>
  )
}
