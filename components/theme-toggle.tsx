"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className={`border-[#BFA86B]/30 hover:border-[#BFA86B] transition-colors ${
        theme === "dark"
          ? "bg-black text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black"
          : "bg-white text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white border-[#BFA86B]/50"
      }`}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4 mr-2" />
          Light
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </>
      )}
    </Button>
  )
}
