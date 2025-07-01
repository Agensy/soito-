"use client"

import { InvestmentProvider } from "./context/investment-context"
import { InvestmentNavigation } from "./components/investment-navigation"
import { StepContent } from "./components/step-content"
import { StepConfirmation } from "./components/step-confirmation"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import type { Metadata } from "next"

export default function InvestaPanorama() {
  return (
    <InvestmentProvider>
      <main className="min-h-screen bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a]">
        {/* Header com navegação das fases */}
        <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0B0B0B]/90 to-transparent py-4">
          <div className="container mx-auto px-4">
            <InvestmentNavigation />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#BFA86B] to-transparent my-6"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <StepContent />

            <motion.div
              className="flex flex-col items-center justify-center mt-16 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArrowDown className="w-6 h-6 text-[#BFA86B] animate-bounce mb-2" />
              <p className="text-[#BFA86B] text-sm">Continue explorando</p>
            </motion.div>

            <StepConfirmation />
          </div>
        </div>

        {/* Footer com informações da Soito */}
        <footer className="bg-[#0B0B0B]/80 border-t border-[#BFA86B]/20 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 SOITO INC - Construindo mais que imóveis. Construindo histórias.
            </p>
            <p className="text-[#BFA86B] text-xs mt-2">
              Panorama Taubaté - Oportunidade exclusiva de investimento
            </p>
          </div>
        </footer>
      </main>
    </InvestmentProvider>
  )
} 