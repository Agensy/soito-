# 🚀 SOITO INC - Design System Completo

## 📋 Visão Geral

Este é o design system completo da **SOITO INC**, uma incorporadora de luxo que transmite sofisticação, exclusividade e confiança. O sistema foi desenvolvido com foco em:

- **Dual Theme**: Dark/Light mode adaptativo
- **Luxury Design**: Paleta dourada premium (#BFA86B/#D4C08A)
- **Glass Morphism**: Efeitos visuais modernos
- **Responsividade**: Mobile-first approach
- **Performance**: Animações otimizadas
- **Acessibilidade**: WCAG AA compliance

## 🎨 Paleta de Cores

### Cores Primárias (Dourado SOITO)
\`\`\`css
--primary-500: #BFA86B  /* Dourado principal */
--primary-600: #D4C08A  /* Dourado claro */
\`\`\`

### Temas Adaptativos
\`\`\`css
/* Light Mode */
--background: #FFFFFF
--text-primary: #0A0A0A
--border-primary: #E5E5E5

/* Dark Mode */
--background: #0A0A0A
--text-primary: #FFFFFF
--border-primary: #404040
\`\`\`

## 🧩 Componentes Base

### Button
\`\`\`tsx
<Button variant="primary" size="lg">
  Call to Action
</Button>
\`\`\`

**Variantes:**
- `primary`: Gradiente dourado com hover effects
- `secondary`: Borda dourada com hover
- `ghost`: Background transparente
- `outline`: Borda padrão

**Tamanhos:**
- `sm`, `md`, `lg`, `xl`

### Card
\`\`\`tsx
<Card className="glass-adaptive">
  Conteúdo do card
</Card>
\`\`\`

**Classes Utilitárias:**
- `glass-adaptive`: Glass morphism
- `ceo-section`: Sempre dark
- `cef-section`: Sempre azul

### Input
\`\`\`tsx
<Input 
  label="Nome completo"
  placeholder="Digite seu nome"
  error="Campo obrigatório"
/>
\`\`\`

### Badge
\`\`\`tsx
<Badge variant="primary" size="lg">
  SOITO INC
</Badge>
\`\`\`

## 🎭 Animações

### Framer Motion
\`\`\`tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo animado
</motion.div>
\`\`\`

### CSS Animations
\`\`\`css
.animate-fade-in-up    /* Fade in de baixo para cima */
.animate-slide-in-right /* Slide da direita */
.animate-scale-in      /* Scale in */
.animate-float         /* Float contínuo */
.animate-pulse-golden  /* Pulse dourado */
\`\`\`

## 📱 Responsividade

### Breakpoints
\`\`\`css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
\`\`\`

### Mobile-First
\`\`\`tsx
// Exemplo de grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
\`\`\`

## 🎯 Seções Principais

### HeroSlider
- Slider automático com 2 slides
- Controles de navegação
- Animações suaves
- Stats destacados

### CEOSection
- Seção sempre dark
- Foto do CEO
- Conteúdo em parágrafos
- Stats da empresa

### Header
- Navegação responsiva
- Theme toggle
- Glass morphism
- Logo com gradiente

## 🛠️ Utilitários

### cn() - Class Names
\`\`\`tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className
)}>
\`\`\`

### useInView - Intersection Observer
\`\`\`tsx
import { useInView } from '@/lib/utils'

const [ref, isInView] = useInView()
\`\`\`

## 🎨 Classes CSS Utilitárias

### Gradientes
\`\`\`css
.text-gradient          /* Texto com gradiente dourado */
.glass-adaptive         /* Glass morphism adaptativo */
.transition-smooth      /* Transição suave */
\`\`\`

### Sombras
\`\`\`css
.shadow-light           /* Sombra leve */
.shadow-medium          /* Sombra média */
.shadow-heavy           /* Sombra pesada */
.shadow-golden          /* Sombra dourada */
\`\`\`

## 📁 Estrutura de Arquivos

\`\`\`
src/
├── components/
│   ├── ui/              # Componentes base
│   ├── layout/          # Componentes de layout
│   ├── sections/        # Seções específicas
│   └── theme/           # Componentes de tema
├── lib/
│   ├── utils.ts         # Utilitários
│   └── constants.ts     # Constantes
├── types/
│   └── index.ts         # Tipos TypeScript
└── app/
    ├── layout.tsx       # Layout principal
    ├── page.tsx         # Página inicial
    └── globals.css      # Estilos globais
\`\`\`

## 🚀 Como Usar

### 1. Instalação
\`\`\`bash
npm install
npm run dev
\`\`\`

### 2. Importar Componentes
\`\`\`tsx
import { Button, Card, Badge } from '@/components/ui'
import { Header } from '@/components/layout'
import { HeroSlider, CEOSection } from '@/components/sections'
\`\`\`

### 3. Usar Theme Provider
\`\`\`tsx
import { ThemeProvider } from '@/components/theme'

<ThemeProvider defaultTheme="dark">
  {children}
</ThemeProvider>
\`\`\`

## 🎯 Características Premium

### Glass Morphism
- Backdrop blur adaptativo
- Transparências elegantes
- Bordas suaves

### Hover Effects
- Elevação sutil
- Sombras douradas
- Transições suaves

### Typography
- Font serif para títulos
- Font sans para corpo
- Hierarquia clara

### Performance
- Lazy loading
- Intersection Observer
- Animações otimizadas

## 🔧 Customização

### Cores
Edite as variáveis CSS em `globals.css`:
\`\`\`css
:root {
  --primary-500: #BFA86B;
  --primary-600: #D4C08A;
}
\`\`\`

### Animações
Configure no `tailwind.config.ts`:
\`\`\`js
animation: {
  'fade-in-up': 'fadeInUp 0.6s ease-out',
  'slide-in-right': 'slideInRight 0.8s ease-out',
}
\`\`\`

## 📊 Performance

### Otimizações Implementadas
- CSS Variables para temas
- Intersection Observer para animações
- Lazy loading de imagens
- Bundle splitting
- Reduced motion support

### Métricas Esperadas
- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🎨 Acessibilidade

### WCAG AA Compliance
- Contraste adequado
- Navegação por teclado
- Screen reader support
- Focus indicators
- Reduced motion

### Semântica
- HTML semântico
- ARIA labels
- Alt text em imagens
- Heading hierarchy

## 🚀 Próximos Passos

1. **Testes**: Implementar testes unitários
2. **Storybook**: Documentação interativa
3. **Tokens**: Sistema de design tokens
4. **Micro-interactions**: Animações mais refinadas
5. **PWA**: Progressive Web App features

---

**Desenvolvido com ❤️ para a SOITO INC**
