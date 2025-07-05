# 🏢 Panorama Taubaté - Landing Flow

Página de investimento com 3 fases para captação de leads e simulação de rentabilidade do empreendimento Panorama Taubaté.

## 📋 Funcionalidades

### **Fase 1: Apresentação da Oportunidade**
- Hero section com informações do empreendimento
- Diferenciais e localização privilegiada
- Dados de valorização (19,1% a.a.)
- Tabs com informações detalhadas

### **Fase 2: Simulador de Rentabilidade**  
- Calculadora interativa com 3 opções de investimento
- Formulário de captura de leads
- Resultados detalhados da simulação
- Integração com webhook n8n

### **Fase 3: Cronograma do Projeto**
- Timeline de desenvolvimento (Set/25 - Mar/28)
- Fases detalhadas de construção
- Garantias e transparência

## ⚙️ Configuração do Webhook n8n

### 1. Configurar URL do Webhook

Adicione a URL do webhook n8n no arquivo `.env.local`:

\`\`\`bash
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://hooks.n8n.cloud/webhook/SEU_WEBHOOK_ID
\`\`\`

### 2. Estrutura do Payload

O webhook enviará os seguintes dados:

\`\`\`json
{
  // Dados pessoais
  "nome": "string",
  "email": "string", 
  "telefone": "string",
  
  // Dados do investimento
  "projeto": "Panorama Taubaté",
  "metrosQuadrados": "number",
  "opcaoInvestimento": "string",
  "valorInvestido": "number",
  "periodo": "number",
  
  // Resultados da simulação
  "lucroProjetado": "string",
  "rentabilidadeAnual": "19.1",
  "percentualRetorno": "string",
  "retornoMensal": "string",
  
  // Metadados
  "dataSimulacao": "2025-01-01T00:00:00.000Z",
  "fonte": "Landing Page /invista-panorama",
  "userAgent": "string"
}
\`\`\`

### 3. Configurações do Webhook

- **Retry**: 3 tentativas com backoff exponencial
- **Timeout**: 10 segundos
- **Headers**: Content-Type: application/json

## 🎨 Customização de Branding

### Cores Principais
- **Dourado**: #BFA86B (cor principal Soito)
- **Dourado escuro**: #8B7355
- **Fundo**: #0B0B0B / #1a1a1a

### Dados do Empreendimento
- **Nome**: Panorama Taubaté
- **Localização**: Rua das Andradas, 365 - Imaculada Conceição
- **Rentabilidade**: 19,1% a.a.
- **Limit de m²**: 180 m² disponíveis
- **Entrega**: Março/2028

## 🚀 Como Usar

1. Acesse `/invista-panorama`
2. Navegue pelas 3 fases usando a barra de progresso
3. Confirme interesse em cada fase para avançar
4. Na Fase 2, utilize a calculadora de rentabilidade
5. Preencha dados pessoais para receber simulação
6. Acompanhe o cronograma na Fase 3

## 📱 Responsividade

- ✅ Mobile-first design
- ✅ Tablets e desktops
- ✅ Animações otimizadas
- ✅ Performance melhorada

## 🔧 Dependências Adicionais

- `framer-motion`: Animações
- `@radix-ui/*`: Componentes UI
- `react-hook-form`: Formulários
- `zod`: Validação

## 📊 Métricas e Analytics

O sistema captura:
- Origem do lead (Landing Page)
- Data/hora da simulação
- User Agent do navegador
- Opção de investimento escolhida
- Valor simulado

## 🛠️ Desenvolvimento

\`\`\`bash
# Executar em desenvolvimento
npm run dev

# Acessar a página
http://localhost:3000/invista-panorama
\`\`\`

## 📞 Suporte

Para configuração do webhook n8n ou customizações, entre em contato com a equipe de desenvolvimento.
