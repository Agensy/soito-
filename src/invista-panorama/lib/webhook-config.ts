// Configuração do webhook n8n para Panorama Taubaté
export const WEBHOOK_CONFIG = {
  // TODO: Configurar URL do webhook n8n
  url: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://hooks.n8n.cloud/webhook/YOUR_WEBHOOK_URL",
  retryAttempts: 3,
  timeout: 10000, // 10 segundos
}

export interface WebhookPayload {
  // Dados pessoais
  nome: string
  email: string
  telefone: string
  
  // Dados do investimento
  projeto: string
  metrosQuadrados: number
  opcaoInvestimento: string
  valorInvestido: number
  periodo: number
  
  // Resultados da simulação
  lucroProjetado: string
  rentabilidadeAnual: string
  percentualRetorno: string
  retornoMensal: string
  
  // Metadados
  dataSimulacao: string
  fonte: string
  userAgent: string
}

export async function sendToWebhook(payload: WebhookPayload): Promise<boolean> {
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= WEBHOOK_CONFIG.retryAttempts; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_CONFIG.timeout)

      const response = await fetch(WEBHOOK_CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Panorama-Taubate-Lead-Capture/1.0',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        console.log(`Webhook enviado com sucesso na tentativa ${attempt}`)
        return true
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      lastError = error as Error
      console.warn(`Tentativa ${attempt} falhou:`, error)
      
      if (attempt < WEBHOOK_CONFIG.retryAttempts) {
        // Esperar antes de tentar novamente (backoff exponencial)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000))
      }
    }
  }

  console.error('Falha ao enviar webhook após todas as tentativas:', lastError)
  return false
}
