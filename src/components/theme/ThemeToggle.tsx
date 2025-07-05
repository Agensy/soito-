"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-8 bg-border-primary dark:bg-border-primary rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 bg-background rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-text-primary" />
        ) : (
          <Sun className="w-3 h-3 text-text-primary" />
        )}
      </div>
    </button>
  )
}
