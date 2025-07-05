# 🎨 INSTRUÇÕES DE DESIGN PARA V0 - SOITO INC

## 🎯 IDENTIDADE VISUAL

### **Conceito Geral:**
Site para incorporadora de luxo com estética premium, elegante e sofisticada. Transmitir confiança, exclusividade e alto padrão através de design minimalista moderno com toques dourados. **Suporte completo para dark mode e light mode.**

---

## 🌈 SISTEMA DE CORES (DUAL THEME)

### **Cores Base (Neutras para ambos os temas):**
\`\`\`css
/* Dourado Luxo - Permanece igual nos dois temas */
--primary-50: #FEF7E7
--primary-100: #FDECC4
--primary-500: #BFA86B    /* Dourado principal */
--primary-600: #D4C08A    /* Dourado secundário */
--primary-700: #A8935A
--primary-800: #8B7A4F
--primary-900: #6D5F3E
\`\`\`

### **🌞 LIGHT MODE:**
\`\`\`css
:root {
  /* Backgrounds */
  --background: #FFFFFF
  --background-secondary: #FAFAFA
  --background-tertiary: #F5F5F5
  --background-glass: rgba(255, 255, 255, 0.8)
  
  /* Text Colors */
  --text-primary: #0A0A0A
  --text-secondary: #404040
  --text-muted: #737373
  --text-inverse: #FFFFFF
  
  /* Borders */
  --border-primary: #E5E5E5
  --border-secondary: rgba(191, 168, 107, 0.2)
  --border-focus: #BFA86B
  
  /* Shadows */
  --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
  --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
  --shadow-heavy: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
  --shadow-golden: 0 8px 32px rgba(191, 168, 107, 0.3)
}
\`\`\`

### **🌙 DARK MODE:**
\`\`\`css
.dark {
  /* Backgrounds */
  --background: #0A0A0A
  --background-secondary: #1F1F23
  --background-tertiary: #2A2A2F
  --background-glass: rgba(0, 0, 0, 0.6)
  
  /* Text Colors */
  --text-primary: #FFFFFF
  --text-secondary: #D4D4D4
  --text-muted: #A3A3A3
  --text-inverse: #0A0A0A
  
  /* Borders */
  --border-primary: #404040
  --border-secondary: rgba(191, 168, 107, 0.3)
  --border-focus: #D4C08A
  
  /* Shadows */
  --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.3)
  --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.3)
  --shadow-heavy: 0 20px 25px -5px rgba(0, 0, 0, 0.4)
  --shadow-golden: 0 8px 32px rgba(212, 192, 138, 0.4)
}
\`\`\`

### **Uso das Cores:**
- **Dourado (#BFA86B/#D4C08A):** CTAs principais, destaques, sempre igual
- **Backgrounds:** Dinâmicos conforme tema
- **Textos:** Contrastantes para acessibilidade

---

## 📝 TIPOGRAFIA

### **Fontes:**
\`\`\`css
/* Família Principal */
font-family: 'Inter', 'system-ui', 'sans-serif'

/* Display/Títulos */
font-family: 'Playfair Display', 'serif'

/* Código/Dados */
font-family: 'JetBrains Mono', 'monospace'
\`\`\`

### **Escala Tipográfica:**
\`\`\`css
/* Tamanhos */
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
--text-6xl: 3.75rem   /* 60px */

/* Pesos */
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
\`\`\`

### **Hierarquia:**
- **H1:** text-6xl, font-light, Playfair Display
- **H2:** text-4xl, font-light, Inter
- **H3:** text-2xl, font-medium, Inter
- **Body:** text-base, font-normal, Inter
- **Caption:** text-sm, font-medium, Inter

---

## 🎭 EFEITOS VISUAIS (DUAL THEME)

### **🌟 Theme Toggle Component:**
\`\`\`jsx
function ThemeToggle() {
  return (
    <button className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
      <div className="w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-6">
        <span className="sr-only">Toggle theme</span>
      </div>
    </button>
  )
}
\`\`\`

### **Glass Morphism:**
\`\`\`css
/* Light Mode Glass */
.glass-light {
  background: var(--background-glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-secondary);
  border-radius: 16px;
}

/* Dark Mode Glass */
.glass-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(191, 168, 107, 0.2);
  border-radius: 16px;
}

/* Universal Glass (adapta automaticamente) */
.glass-universal {
  background: var(--background-glass);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-secondary);
  border-radius: 16px;
  transition: all 0.3s ease;
}
\`\`\`

### **Gradientes (Theme-Aware):**
\`\`\`css
/* Gradiente Principal - Sempre igual */
.gradient-primary {
  background: linear-gradient(135deg, #BFA86B 0%, #D4C08A 100%);
}

/* Gradiente Background - Light */
.gradient-bg-light {
  background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #FAFAFA 100%);
}

/* Gradiente Background - Dark */
.gradient-bg-dark {
  background: linear-gradient(135deg, #0A0A0A 0%, #1F1F23 50%, #0A0A0A 100%);
}

/* Gradiente Adaptativo */
.gradient-adaptive {
  background: linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 50%, var(--background) 100%);
}

/* Gradiente Texto - Sempre dourado */
.text-gradient {
  background: linear-gradient(135deg, #BFA86B 0%, #D4C08A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
\`\`\`

### **Sombras Adaptativas:**
\`\`\`css
/* Sombras Light Mode */
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-golden: 0 8px 32px rgba(191, 168, 107, 0.3);
}

/* Sombras Dark Mode */
.dark {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  --shadow-golden: 0 8px 32px rgba(212, 192, 138, 0.4);
}

/* Glow Effects */
.glow-light {
  box-shadow: 0 0 20px rgba(191, 168, 107, 0.3);
}

.glow-dark {
  box-shadow: 0 0 30px rgba(212, 192, 138, 0.5);
}
\`\`\`

---

## 🧩 COMPONENTES UI (DUAL THEME)

### **Botões Adaptativos:**
\`\`\`css
/* Primary Button - Igual nos dois temas */
.btn-primary {
  background: linear-gradient(135deg, #BFA86B 0%, #D4C08A 100%);
  color: var(--text-inverse);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-golden);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(191, 168, 107, 0.6);
}

/* Secondary Button */
.btn-secondary {
  background: var(--background);
  color: #BFA86B;
  border: 2px solid #BFA86B;
  padding: 10px 22px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(191, 168, 107, 0.1);
  transform: translateY(-1px);
}

/* Ghost Button */
.btn-ghost {
  background: rgba(191, 168, 107, 0.1);
  color: #BFA86B;
  border: 1px solid transparent;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  border-color: rgba(191, 168, 107, 0.3);
  background: rgba(191, 168, 107, 0.15);
}

/* Destructive Button */
.btn-destructive {
  background: #EF4444;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}
\`\`\`

### **Cards Temáticos:**
\`\`\`css
/* Universal Card - Adapta automaticamente */
.card-adaptive {
  background: var(--background);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
}

.card-adaptive:hover {
  box-shadow: var(--shadow-heavy);
  transform: translateY(-2px);
  border-color: var(--border-focus);
}

/* Glass Card Universal */
.card-glass {
  background: var(--background-glass);
  border: 1px solid var(--border-secondary);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
}

/* CEO Card - Sempre escuro com borda dourada */
.card-ceo {
  background: linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(31,31,35,0.9) 100%);
  border: 2px solid #BFA86B;
  border-radius: 24px;
  padding: 32px;
  color: white;
  position: relative;
  overflow: hidden;
}

/* Stats Card */
.card-stats {
  background: var(--background-glass);
  border: 1px solid var(--border-secondary);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card-stats:hover {
  border-color: rgba(191, 168, 107, 0.5);
  background: rgba(191, 168, 107, 0.05);
  transform: translateY(-4px);
}
\`\`\`

### **Inputs Temáticos:**
\`\`\`css
/* Universal Input */
.input-adaptive {
  background: var(--background);
  border: 2px solid var(--border-primary);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  width: 100%;
}

.input-adaptive:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(191, 168, 107, 0.1);
  outline: none;
}

.input-adaptive::placeholder {
  color: var(--text-muted);
}

/* Search Input */
.input-search {
  background: var(--background-glass);
  border: 1px solid var(--border-secondary);
  border-radius: 50px;
  padding: 12px 20px;
  backdrop-filter: blur(10px);
  color: var(--text-primary);
}

/* Textarea */
.textarea-adaptive {
  background: var(--background);
  border: 2px solid var(--border-primary);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--text-primary);
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
}

.textarea-adaptive:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(191, 168, 107, 0.1);
  outline: none;
}
\`\`\`

### **Navigation Components:**
\`\`\`css
/* Header */
.header-adaptive {
  background: var(--background-glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-primary);
  transition: all 0.3s ease;
}

/* Nav Link */
.nav-link {
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #BFA86B;
  background: rgba(191, 168, 107, 0.1);
}

.nav-link.active {
  color: #BFA86B;
  background: rgba(191, 168, 107, 0.15);
}

/* Mobile Menu */
.mobile-menu {
  background: var(--background);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  box-shadow: var(--shadow-heavy);
  backdrop-filter: blur(20px);
}
\`\`\`

---

## ✨ ANIMAÇÕES E TRANSIÇÕES

### **Animações Base:**
\`\`\`css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse Golden */
@keyframes pulseGolden {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(191, 168, 107, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(191, 168, 107, 0);
  }
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
\`\`\`

### **Transições:**
\`\`\`css
/* Transições Padrão */
.transition-smooth { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.transition-bounce { transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

/* Hover Effects */
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(191, 168, 107, 0.5);
}
\`\`\`

---

## 📐 LAYOUT E ESPAÇAMENTO

### **Grid System:**
\`\`\`css
/* Container Sizes */
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }

/* Spacing Scale */
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
\`\`\`

### **Breakpoints:**
\`\`\`css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
\`\`\`

---

## 🖼️ ELEMENTOS ESPECÍFICOS (DUAL THEME)

### **Seção CEO (Sempre Dark):**
\`\`\`css
.ceo-section {
  background: linear-gradient(135deg, #0A0A0A 0%, #1F1F23 50%, #0A0A0A 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  /* Sempre escuro - independente do tema */
}

.ceo-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/pattern-architectural.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 1;
}

.ceo-content {
  position: relative;
  z-index: 2;
}

.ceo-photo {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 4px solid #BFA86B;
  box-shadow: 0 0 60px rgba(191, 168, 107, 0.4);
  object-fit: cover;
  transition: all 0.3s ease;
}

.ceo-photo:hover {
  box-shadow: 0 0 80px rgba(212, 192, 138, 0.6);
  transform: scale(1.02);
}

.ceo-badge {
  background: linear-gradient(135deg, #BFA86B 0%, #D4C08A 100%);
  color: #0A0A0A;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 2px;
  box-shadow: 0 8px 32px rgba(191, 168, 107, 0.3);
}
\`\`\`

### **Hero Section (Adaptativo):**
\`\`\`css
/* Hero Light Mode */
.hero-light {
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.95) 0%, 
    rgba(250,250,250,0.9) 50%, 
    rgba(245,245,245,0.95) 100%
  );
  color: var(--text-primary);
}

/* Hero Dark Mode */
.hero-dark {
  background: linear-gradient(135deg, 
    rgba(10,10,10,0.95) 0%, 
    rgba(31,31,35,0.9) 50%, 
    rgba(10,10,10,0.95) 100%
  );
  color: var(--text-primary);
}

/* Hero Universal */
.hero-adaptive {
  background: var(--gradient-adaptive);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-text {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--text-secondary);
  font-weight: 400;
  margin-top: 1rem;
  max-width: 600px;
}

/* Hero Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-adaptive);
  opacity: 0.8;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}
\`\`\`

### **Stats Cards (Adaptativo):**
\`\`\`css
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.stat-card {
  background: var(--background-glass);
  border: 1px solid var(--border-secondary);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(191, 168, 107, 0.05) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(191, 168, 107, 0.5);
  background: rgba(191, 168, 107, 0.05);
  transform: translateY(-4px);
  box-shadow: var(--shadow-golden);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-number {
  font-size: 3rem;
  font-weight: 300;
  background: linear-gradient(135deg, #BFA86B 0%, #D4C08A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.stat-description {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.4;
}

.stat-icon {
  color: #BFA86B;
  margin-bottom: 1rem;
}
\`\`\`

### **Seções Temáticas:**
\`\`\`css
/* Section Container */
.section-adaptive {
  background: var(--background);
  color: var(--text-primary);
  padding: 5rem 0;
  transition: all 0.3s ease;
}

.section-dark {
  background: var(--background-secondary);
  color: var(--text-primary);
}

.section-gradient {
  background: var(--gradient-adaptive);
  color: var(--text-primary);
}

/* Section Headers */
.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

/* Divider */
.section-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #BFA86B 0%, #D4C08A 100%);
  margin: 0 auto 2rem;
  border-radius: 2px;
}
\`\`\`

---

## 🎪 MICRO-INTERAÇÕES

### **Loading States:**
\`\`\`css
.loading-spinner {
  border: 3px solid rgba(191, 168, 107, 0.3);
  border-top: 3px solid #BFA86B;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
\`\`\`

### **Success States:**
\`\`\`css
.success-checkmark {
  color: #10B981;
  animation: successPulse 0.6s ease-in-out;
}

@keyframes successPulse {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
\`\`\`

---

## 📱 MOBILE FIRST

### **Princípios Mobile:**
1. **Touch Targets:** Mínimo 44px de altura
2. **Espaçamento:** Margens generosas entre elementos
3. **Typography:** Tamanhos maiores para legibilidade
4. **Navegação:** Menu hambúrguer elegante
5. **CTAs:** Botões full-width em mobile

### **Mobile Specific (Dual Theme):**
\`\`\`css
@media (max-width: 767px) {
  .hero-text { 
    font-size: 2.5rem; 
    color: var(--text-primary);
  }
  
  .ceo-photo { 
    width: 240px; 
    height: 240px; 
  }
  
  .container { 
    padding: 0 20px; 
  }
  
  .btn-primary { 
    width: 100%; 
    padding: 16px; 
  }
  
  /* Theme toggle mobile */
  .theme-toggle-mobile {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 50;
    background: var(--background-glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-secondary);
    border-radius: 50%;
    width: 56px;
    height: 56px;
  }
  
  /* Mobile menu dark/light */
  .mobile-menu {
    background: var(--background);
    border: 1px solid var(--border-primary);
    box-shadow: var(--shadow-heavy);
  }
  
  /* Cards stack on mobile */
  .stats-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .card-adaptive {
    padding: 16px;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --border-primary: #000000;
    --text-primary: #000000;
  }
  
  .dark {
    --border-primary: #FFFFFF;
    --text-primary: #FFFFFF;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

---

## 🎨 INSTRUÇÕES PARA V0 (DUAL THEME)

### **🌟 Theme System Implementation:**
\`\`\`jsx
// Sempre incluir o provider de tema
"use client"
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}
\`\`\`

### **Prompts Recomendados para Dark/Light Mode:**

#### **Hero Section:**
\`\`\`
"Crie um hero section para incorporadora de luxo com suporte a dark/light mode usando CSS variables. Background adaptativo (branco no light, preto no dark), tipografia Inter e Playfair Display, botão dourado (#BFA86B) que permanece igual nos dois temas, glass morphism adaptativo, e toggle de tema no canto superior direito."
\`\`\`

#### **CEO Section:**
\`\`\`
"Desenvolva uma seção de CEO que é sempre dark (independente do tema) com foto circular (320px) com borda dourada, background preto com padrão arquitetônico sutil, texto em grid 2 colunas, badge dourado com nome, e efeitos hover na foto. Use Tailwind dark: classes."
\`\`\`

#### **Stats Cards:**
\`\`\`
"Monte cards de estatísticas com dark/light mode support usando CSS variables, glass effect adaptativo, números grandes com gradiente dourado (sempre igual), ícones Lucide, hover com elevação e glow dourado, background que muda conforme tema, e layout responsivo."
\`\`\`

#### **Navigation:**
\`\`\`
"Crie uma navegação adaptativa com dark/light mode toggle, background glass com backdrop-blur, links que mudam cor conforme tema, logo que adapta, menu mobile com overlay adaptativo, e transições suaves entre temas."
\`\`\`

#### **Form Components:**
\`\`\`
"Desenvolva formulários com inputs adaptativos (background e border mudam conforme tema), labels e placeholders com cores temáticas, botão submit dourado (sempre igual), validação visual, e glass effects."
\`\`\`

### **Elementos SEMPRE Incluir:**

#### **🎯 Essenciais:**
- `dark:` classes do Tailwind para todos os elementos
- CSS variables para cores dinâmicas
- Transições suaves (0.3s ease) entre temas
- Theme toggle component no header
- Suporte a `prefers-color-scheme`

#### **🎨 Visual:**
- Gradiente dourado SEMPRE igual nos dois temas
- Glass morphism adaptativo
- Sombras que mudam conforme tema
- Typography hierarchy consistente
- Mobile-first responsive

#### **⚡ Interações:**
- Hover states com elevação
- Focus states com outline dourado
- Loading states adaptativos
- Success/error states temáticos

### **CSS Variables Template:**
\`\`\`css
/* Sempre incluir estas variáveis */
:root {
  --primary-500: #BFA86B;
  --primary-600: #D4C08A;
}

:root {
  --background: #FFFFFF;
  --text-primary: #0A0A0A;
  /* ... outras variáveis light */
}

.dark {
  --background: #0A0A0A;
  --text-primary: #FFFFFF;
  /* ... outras variáveis dark */
}
\`\`\`

### **Tailwind Classes Essenciais:**
\`\`\`
bg-background text-text-primary
dark:bg-background dark:text-text-primary
border-border-primary dark:border-border-primary
shadow-light dark:shadow-heavy
\`\`\`

### **Checklist para V0:**
- [ ] Theme toggle component incluído
- [ ] CSS variables definidas
- [ ] Dark/light variants implementadas
- [ ] Glass morphism adaptativo
- [ ] Gradientes dourados consistentes
- [ ] Transições suaves entre temas
- [ ] Mobile responsive
- [ ] Acessibilidade (contraste adequado)
- [ ] Estados de hover/focus temáticos

---

**🚨 IMPORTANTE: Todos os componentes devem funcionar perfeitamente em AMBOS os temas. O dourado (#BFA86B/#D4C08A) é a única cor que permanece igual - todo o resto deve adaptar-se dinamicamente usando CSS variables ou Tailwind dark: classes.**

---

## 📋 RESUMO FINAL

### **✅ Sistema Completo Dual Theme:**
- **Light Mode:** Backgrounds claros, textos escuros, alta legibilidade
- **Dark Mode:** Backgrounds escuros, textos claros, conforto visual
- **Dourado:** Sempre consistente como cor de marca
- **Glass Morphism:** Adaptativo conforme tema
- **Transições:** Suaves entre mudanças de tema

### **🎯 Para V0.dev:**
1. **Sempre use** CSS variables ou Tailwind dark: classes
2. **Inclua sempre** theme toggle component
3. **Teste ambos** os temas em todos os componentes
4. **Mantenha** a identidade dourada da marca
5. **Garanta** acessibilidade em ambos os temas

### **🚀 Resultado Esperado:**
Um sistema de design premium, elegante e completamente adaptativo que mantém a sofisticação da marca Soito INC em qualquer tema, proporcionando a melhor experiência possível para todos os usuários.

---

**Este documento garante consistência visual total em todos os componentes gerados pelo v0, com suporte completo para dark/light mode mantendo a identidade premium da Soito INC.**
