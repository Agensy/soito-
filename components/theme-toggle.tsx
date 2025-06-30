"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`border-[#BFA86B]/30 hover:border-[#BFA86B] transition-all duration-300 ${
            actualTheme === "dark"
              ? "bg-black/50 text-[#BFA86B] hover:bg-[#BFA86B] hover:text-black backdrop-blur-sm"
              : "bg-white/80 text-[#BFA86B] hover:bg-[#BFA86B] hover:text-white border-[#BFA86B]/50 backdrop-blur-sm"
          }`}
        >
          {actualTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`${
          actualTheme === "dark"
            ? "bg-black/90 border-[#BFA86B]/30 backdrop-blur-sm"
            : "bg-white/90 border-[#BFA86B]/30 backdrop-blur-sm"
        }`}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`${
            theme === "light" ? "bg-[#BFA86B]/20 text-[#BFA86B]" : ""
          } hover:bg-[#BFA86B]/10 hover:text-[#BFA86B] cursor-pointer`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`${
            theme === "dark" ? "bg-[#BFA86B]/20 text-[#BFA86B]" : ""
          } hover:bg-[#BFA86B]/10 hover:text-[#BFA86B] cursor-pointer`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`${
            theme === "system" ? "bg-[#BFA86B]/20 text-[#BFA86B]" : ""
          } hover:bg-[#BFA86B]/10 hover:text-[#BFA86B] cursor-pointer`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
