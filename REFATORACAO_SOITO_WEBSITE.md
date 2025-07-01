# 🏗️ REFATORAÇÃO SOITO WEBSITE - ARQUITETURA MELHORADA

## 📋 VISÃO GERAL

Este documento detalha a arquitetura e implementação para criar um novo site da Soito INC com estrutura moderna, escalável e de alta performance.

---

## 🎯 OBJETIVOS DA REFATORAÇÃO

### ✅ **Problemas Atuais Identificados:**
- Código monolítico em um único arquivo
- Componentes não reutilizáveis
- Falta de sistema de design consistente
- Performance não otimizada
- SEO não implementado
- Ausência de testes
- Gerenciamento de estado inadequado

### 🚀 **Objetivos da Nova Versão:**
- Arquitetura modular e escalável
- Performance de carregamento < 3s
- SEO otimizado (Score 95+)
- Design system consistente
- Mobile-first responsivo
- Testes automatizados
- CI/CD pipeline
- Analytics integrado

---

## 🏛️ ARQUITETURA PROPOSTA

### **Stack Tecnológica:**
```
Frontend: Next.js 14 + TypeScript + Tailwind CSS
UI: Shadcn/ui + Framer Motion + Lucide Icons
Estado: Zustand + React Query
Forms: React Hook Form + Zod
SEO: Next SEO + Structured Data
Analytics: Google Analytics 4 + Hotjar
Deploy: Vercel + CloudFlare
CMS: Sanity.io (opcional)
```

### **Estrutura de Diretórios:**
```
soito-website/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── (home)/
│   │   ├── sobre/
│   │   ├── projetos/
│   │   ├── investir/
│   │   └── contato/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes base (shadcn)
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Seções específicas
│   │   └── forms/              # Formulários
│   ├── lib/                    # Utilities e configurações
│   │   ├── utils.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   ├── hooks/                  # Custom hooks
│   ├── stores/                 # Gerenciamento de estado
│   ├── types/                  # Definições TypeScript
│   └── styles/                 # Estilos globais
├── public/                     # Assets estáticos
│   ├── images/
│   ├── icons/
│   └── documents/
├── docs/                       # Documentação
└── tests/                      # Testes automatizados
```

---

## 🎨 DESIGN SYSTEM

### **Tokens de Design:**
```typescript
// colors.ts
export const colors = {
  primary: {
    50: '#FEF7E7',
    100: '#FDECC4', 
    500: '#BFA86B',  // Dourado principal
    600: '#D4C08A',  // Dourado secundário
    900: '#1F1F23'   // Preto principal
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    900: '#0A0A0A'
  }
}

// typography.ts
export const typography = {
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Playfair Display', 'serif']
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem', 
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  }
}
```

### **Componentes Base:**
```typescript
// Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

// Card.tsx
interface CardProps {
  variant: 'default' | 'luxury' | 'glass'
  padding: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```

---

## 📱 PÁGINAS E FUNCIONALIDADES

### **1. HOME PAGE**
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <CEOSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
```

**Seções:**
- **Hero:** Vídeo background + CTA principal
- **Stats:** Métricas da empresa em destaque
- **About:** Visão geral da Soito INC
- **Projects:** Projetos atuais (Panorama Taubaté)
- **CEO:** Seção do Fabio Soito reformulada
- **Testimonials:** Depoimentos de clientes
- **CTA:** Call-to-action para contato

### **2. SOBRE NÓS**
```typescript
// app/sobre/page.tsx
- História da empresa
- Missão, visão, valores
- Equipe (CEO + colaboradores)
- Conquistas e certificações
- Timeline da empresa
```

### **3. PROJETOS**
```typescript
// app/projetos/page.tsx
- Grid de projetos
- Filtros (status, tipo, localização)
- Detalhes de cada projeto
- Calculadora de ROI
- Galeria de imagens
```

### **4. INVESTIR**
```typescript
// app/investir/page.tsx
- Simulador de investimento
- Tipos de investimento (SCP, etc.)
- Processo passo-a-passo
- FAQ sobre investimentos
- Formulário de interesse
```

### **5. CONTATO**
```typescript
// app/contato/page.tsx
- Formulário de contato
- Informações da empresa
- Mapa interativo
- WhatsApp integration
- Agendamento de reunião
```

---

## 🔧 IMPLEMENTAÇÃO TÉCNICA

### **1. Performance Optimization**
```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  }
}

// Image optimization
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, className, priority }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn('object-cover', className)}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
```

### **2. SEO Implementation**
```typescript
// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Soito INC',
    default: 'Soito INC - Incorporadora de Alto Padrão'
  },
  description: 'Soito INC: 25 anos transformando o mercado imobiliário com empreendimentos de alto padrão. Descubra o Panorama Taubaté com 19,1% de rentabilidade.',
  keywords: ['incorporadora', 'investimento imobiliário', 'taubaté', 'soito'],
  authors: [{ name: 'Soito INC' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Soito INC'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Structured Data
export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Soito INC',
    'description': 'Incorporadora de empreendimentos imobiliários de alto padrão',
    'founder': {
      '@type': 'Person',
      'name': 'Fabio Soito'
    }
  }
}
```

### **3. State Management**
```typescript
// stores/investmentStore.ts
import { create } from 'zustand'

interface InvestmentState {
  amount: number
  projectType: 'scp' | 'recompra'
  timeline: number
  setAmount: (amount: number) => void
  setProjectType: (type: 'scp' | 'recompra') => void
  calculateROI: () => number
}

export const useInvestmentStore = create<InvestmentState>((set, get) => ({
  amount: 100000,
  projectType: 'scp',
  timeline: 24,
  setAmount: (amount) => set({ amount }),
  setProjectType: (projectType) => set({ projectType }),
  calculateROI: () => {
    const { amount, projectType, timeline } = get()
    return projectType === 'scp' ? amount * 1.191 : amount * 1.15
  }
}))
```

### **4. Form Handling**
```typescript
// components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    // Enviar para API/webhook
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}
```

---

## 📊 ANALYTICS E TRACKING

### **1. Google Analytics 4**
```typescript
// lib/analytics.ts
import { gtag } from 'ga-gtag'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const trackEvent = (action: string, category: string, label?: string) => {
  gtag('event', action, {
    event_category: category,
    event_label: label
  })
}

// Eventos importantes:
// - Click no botão "Investir Agora"
// - Download de materiais
// - Submissão de formulários
// - Visualização de projetos
```

### **2. Hotjar Integration**
```typescript
// components/HotjarScript.tsx
export function HotjarScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `
      }}
    />
  )
}
```

---

## 🧪 TESTES

### **1. Estrutura de Testes**
```typescript
// tests/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalled()
  })
})

// tests/pages/home.test.tsx
describe('Home Page', () => {
  it('displays CEO section', () => {
    render(<HomePage />)
    expect(screen.getByText('Fabio Soito')).toBeInTheDocument()
  })
})
```

### **2. E2E Tests (Playwright)**
```typescript
// tests/e2e/investment-flow.spec.ts
import { test, expect } from '@playwright/test'

test('complete investment flow', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Investir Agora')
  await page.fill('[name="amount"]', '100000')
  await page.click('text=Calcular ROI')
  await expect(page.locator('.roi-result')).toContainText('19.1%')
})
```

---

## 🚀 DEPLOYMENT E CI/CD

### **1. Vercel Configuration**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "regions": ["gru1"],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### **2. GitHub Actions**
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: vercel/action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 📈 ROADMAP DE IMPLEMENTAÇÃO

### **Fase 1 - Fundação (Semana 1-2)**
- [ ] Setup do projeto Next.js 14
- [ ] Configuração do design system
- [ ] Implementação dos componentes base
- [ ] Setup do CI/CD

### **Fase 2 - Páginas Core (Semana 3-4)**
- [ ] Home page
- [ ] Sobre página
- [ ] CEO section melhorada
- [ ] Sistema de navegação

### **Fase 3 - Funcionalidades (Semana 5-6)**
- [ ] Página de projetos
- [ ] Calculadora de investimento
- [ ] Formulários de contato
- [ ] Integração com WhatsApp

### **Fase 4 - Otimização (Semana 7-8)**
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Analytics setup
- [ ] Testes automatizados

### **Fase 5 - Deploy (Semana 9)**
- [ ] Deploy de produção
- [ ] Testes de carga
- [ ] Monitoramento
- [ ] Documentação final

---

## 🔒 SEGURANÇA

### **1. Headers de Segurança**
```typescript
// next.config.js
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
]
```

### **2. Validação de Forms**
```typescript
// lib/validators.ts
export const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  message: z.string().min(10).max(500)
})
```

---

## 💰 ESTIMATIVA DE CUSTOS

### **Desenvolvimento:**
- Desenvolvedor Senior: 8 semanas × R$ 8.000 = **R$ 64.000**
- Designer UI/UX: 3 semanas × R$ 6.000 = **R$ 18.000**

### **Infraestrutura (Anual):**
- Vercel Pro: $20/mês = **R$ 1.200**
- Domínio premium: **R$ 200**
- Analytics Pro: **R$ 600**

### **Total:** R$ 84.000 (desenvolvimento) + R$ 2.000 (anual)

---

## 📞 PRÓXIMOS PASSOS

1. **Aprovação da arquitetura** - Revisar e aprovar o documento
2. **Setup do ambiente** - Criar repositório e configurar ferramentas
3. **Início do desenvolvimento** - Começar pela Fase 1
4. **Reuniões semanais** - Acompanhamento do progresso
5. **Testes e feedback** - Validação contínua com stakeholders

---

**Este documento serve como guia completo para a refatoração do site da Soito INC, garantindo uma base sólida, escalável e de alta performance para os próximos anos.** 