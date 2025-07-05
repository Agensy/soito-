import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dourado SOITO (sempre igual nos dois temas)
        primary: {
          DEFAULT: '#BFA86B',
          foreground: '#ffffff',
          50: '#FEF7E7',
          100: '#FDECC4',
          500: '#BFA86B',  // mesma cor da variante DEFAULT
          600: '#D4C08A',
          700: '#A8935A',
          800: '#8B7A4F',
          900: '#6D5F3E',
        },
        // Cor secundária para botões e componentes neutros
        secondary: {
          DEFAULT: '#383838',
          foreground: '#ffffff',
        },
        // Backgrounds adaptativos
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        'background-glass': 'var(--background-glass)',
        // Text adaptativos
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        // Borders adaptativos
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-focus': 'var(--border-focus)',
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'light': 'var(--shadow-light)',
        'medium': 'var(--shadow-medium)',
        'heavy': 'var(--shadow-heavy)',
        'golden': 'var(--shadow-golden)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-golden': 'pulseGolden 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGolden: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(191, 168, 107, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(191, 168, 107, 0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
