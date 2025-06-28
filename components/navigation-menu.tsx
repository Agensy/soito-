"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "./theme-provider"

export function NavigationMenu() {
  const pathname = usePathname()
  const { theme } = useTheme()

  const getWhatsAppMessage = () => {
    if (pathname === "/empreendimento-cliente") {
      return "Olá! Tenho interesse no Residencial Aurora"
    } else if (pathname === "/empreendimento-investidor") {
      return "Olá! Tenho interesse em investir no Corporate Plaza"
    }
    return "Olá! Gostaria de mais informações sobre a SOITO INC"
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(getWhatsAppMessage())
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors ${
        theme === "dark" ? "bg-black/95 border-[#BFA86B]/20" : "bg-white/95 border-[#BFA86B]/30"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src={theme === "dark" ? "/images/logo-white.png" : "/images/logo-black.png"}
                alt="SOITO INC"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/"
                  ? "text-[#BFA86B]"
                  : theme === "dark"
                    ? "text-white hover:text-[#BFA86B]"
                    : "text-black hover:text-[#BFA86B]"
              }`}
            >
              Início
            </Link>
            <Link
              href="/#empreendimentos"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-[#BFA86B]" : "text-black hover:text-[#BFA86B]"
              }`}
            >
              Empreendimentos
            </Link>
            <Link
              href="/#investidores"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-[#BFA86B]" : "text-black hover:text-[#BFA86B]"
              }`}
            >
              Investidores
            </Link>
            <Link
              href="/#contato"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-[#BFA86B]" : "text-black hover:text-[#BFA86B]"
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              className={`transition-colors ${
                theme === "dark"
                  ? "bg-[#BFA86B] text-black hover:bg-[#BFA86B]/90"
                  : "bg-[#BFA86B] text-white hover:bg-[#BFA86B]/90"
              }`}
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
