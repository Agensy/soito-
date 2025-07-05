# Padrão de Design – Botões

Este documento descreve o **padrão oficial de botões** utilizado no site SOITO INC. Consulte-o sempre que criar novas seções ou alterar componentes existentes.

## Variantes disponíveis

| Variante | Uso recomendado | Estilo base | Classe em `Button` |
|----------|-----------------|-------------|--------------------|
| `primary` | Ação principal do bloco/ seção (CTA principal). Deve haver **no máximo um** por contexto visual. | Fundo dourado sólido `#BFA86B` (`bg-[#BFA86B]`), texto branco (`text-white`). _Hover_: fundo `#D4C08A`. | `<Button variant="primary">` |
| `outline` | Ação secundária ou complementar à primária. | Transparente, **borda 2 px** dourada `#BFA86B` (`border-2 border-[#BFA86B]`), texto dourado (`text-[#BFA86B]`). _Hover_: fundo `#BFA86B`, texto branco. | `<Button variant="outline">` |

> **Não usar:** variantes `secondary`, `ghost` ou gradientes personalizados. Elas foram removidas/ substituídas para simplificar o sistema.

## Boas práticas

1. **Reutilize o componente:** Sempre utilize o componente `Button` de `src/components/ui/button.tsx`. Nunca declare classes Tailwind diretamente em botões fora desse componente.
2. **Hierarquia visual:**
   * Exiba no máximo **um** botão `primary` por bloco.  
   * Se precisar de um segundo CTA, utilize `outline`.
3. **Consistência de tamanho:** Para CTAs principais, use `size="lg"` e aplique a classe utilitária `min-w-[200px]` (já adotada no `HeroSlider`).
4. **Feedback visual:**
   * `primary` recebe `hover:bg-[#D4C08A]`.
   * `outline` recebe `hover:bg-[#BFA86B] hover:text-white`.
5. **Acessibilidade:**
   * Os textos dos botões devem ser verbos de ação (_Ex.: "Agendar Consulta"_).  
   * Nunca coloque apenas ícones sem `aria-label`.
6. **Shadow/ animação opcional:** Para destaque extra em CTAs primários, acrescente `hover:shadow-golden hover:-translate-y-1`.

## Exemplo de implementação

\`\`\`tsx
<div className="flex gap-4">
  <Button variant="primary" size="lg" className="min-w-[200px]">
    Agendar Consultoria
  </Button>

  <Button variant="outline" size="lg" className="min-w-[200px]">
    Solicitar Proposta
  </Button>
</div>
\`\`\`

## Manutenção

Qualquer ajuste de cor ou comportamento **deve** ser feito em um único lugar: `src/components/ui/button.tsx`. Assim, toda a aplicação refletirá a mudança automaticamente.
