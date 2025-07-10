"use client"

import { useJourney } from "../context/journey-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function NavigationControls() {
  const { currentStep, nextStep, prevStep, isLastStep } = useJourney()

  return (
    <motion.div
      className="flex justify-between mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Button
        onClick={prevStep}
        variant="outline"
        className="bg-white/10 text-white hover:bg-white/20 border-white/30"
        disabled={currentStep === 1}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Anterior
      </Button>

      <Button
        onClick={nextStep}
        className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white"
      >
        {isLastStep ? "Finalizar" : "Próximo"}
        {!isLastStep && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </motion.div>
  )
} 