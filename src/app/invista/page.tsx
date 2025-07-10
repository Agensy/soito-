"use client"

import { useJourney } from "./context/journey-context"
import { JourneyNavigation } from "./components/journey-navigation"
import { StepContent } from "./components/step-content"
import { StepConfirmation } from "./components/step-confirmation"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function PanoramaPage() {
  const { currentStep } = useJourney()

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full z-50 glass-adaptive py-4">
        <div className="container mx-auto px-4">
          <JourneyNavigation />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent my-6"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <StepContent />

          <motion.div
            className="flex flex-col items-center justify-center mt-16 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ArrowDown className="w-6 h-6 text-primary-500 animate-bounce mb-2" />
            <p className="text-text-secondary text-sm">Continue explorando</p>
          </motion.div>

          <StepConfirmation />
        </div>
      </div>
    </main>
  )
} 