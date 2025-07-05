import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme/ThemeProvider'
import '../app/globals.css'

export const metadata: Metadata = {
  title: 'SOITO INC - Incorporadora de Luxo',
  description: 'Transformando visões em realidade imobiliária há 25 anos. Projetos exclusivos com rentabilidade superior.',
  keywords: 'incorporadora, imobiliária, luxo, investimento, apartamentos, São Paulo',
  authors: [{ name: 'SOITO INC' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 