# Full Force Academia - Guia para Agentes de IA

## 🎯 Contexto do Projeto

**Full Force Academia** é a maior academia de Matupá-MT (24 mil habitantes) com **650+ alunos ativos**. O negócio cresceu exponencialmente em apenas 8 meses e agora busca atingir **900 alunos até o fim de 2025**.

### Objetivo Principal (Outubro 2025)
- **Foco**: Venda de **Planos Anuais 2025/2026** via Google Ads
- **Oferta**: 37% OFF (R$119/mês vs R$189/mês) válido até **31/10/2025**
- **Estratégia**: Site otimizado para conversão → WhatsApp → Fechamento humano
- **Meta**: 900 alunos até dezembro/2025

---

## 🏗️ Arquitetura do Projeto

### Stack Tecnológico
- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Gerenciador**: Bun (package manager)
- **Deploy**: Netlify (com otimizações de cache e headers)
- **Analytics**: Google Analytics 4 + eventos de conversão

### Estrutura de Diretórios
```
src/
├── components/
│   ├── Hero.tsx              # Seção principal com CTA primário
│   ├── Plans.tsx             # Cards de planos (Mensal/Anual)
│   ├── Benefits.tsx          # Benefícios da academia
│   ├── Testimonials.tsx      # Depoimentos de alunos
│   ├── FinalCTA.tsx          # CTA final de conversão
│   ├── GoogleAnalytics.tsx   # Tracking GA4 + eventos
│   ├── StructuredData.tsx    # Schema.org para SEO
│   ├── PerformanceOptimizer.tsx # Otimizações de performance
│   └── ui/                   # Componentes shadcn/ui reutilizáveis
├── lib/
│   └── utils.ts              # Utilitários (cn, etc.)
└── pages/
    └── Index.tsx             # Página principal
```

---

## 🎨 Design System & Filosofia UX/UI

### Filosofia de Design
**Atue como um Designer de UX/UI Sênior e Estrategista**. O objetivo é criar uma experiência moderna, profissional e focada em conversão.

#### 1. Mineração de Inspiração e Filosofia de Design
- **Análise de Estética**: Extrair princípios de design incluindo paleta de cores, tipografia e estilos de componentes
- **Meta-Discussão**: Realizar análise profunda sobre psicologia do usuário. O design deve fazer o usuário se sentir: **motivado, acolhido e confiante**
- **Sistema de Estilos**: Guia de estilo que funde inspirações com a filosofia da Full Force

#### 2. Diretrizes Técnicas de Implementação de UI

##### Profundidade e Sombras
- **Camadas de cores (color layering)**: 3 a 4 tons da cor base para criar sensação de elevação
- **Sistema de sombras de duas camadas**: Combinar sombras claras e escuras com gradientes sutis
- **Eliminação de bordas**: A profundidade substitui a necessidade de bordas

##### Responsividade e Layout
- **Sistema de caixas flexíveis**: Relações pai-filho bem definidas
- **Rearranjo baseado em prioridades**: Não apenas encolher, mas reorganizar elementos
- **Mobile-first**: Componentes mantêm forma e layout adequados em todas as telas

##### Sistema de Cores
- **Primary (Amarelo #FFCC00)**: CTAs e destaques principais
- **Secondary**: Ações sutis
- **Neutral (Cinza/Preto)**: 80% da UI base
- **Semântico**: Verde (sucesso), Vermelho (erro), Amarelo (aviso)

#### 3. Polimento e Variações de Design
- **Refinamento Estético**: Layout suave e interface consistente
- **Temas**: Dark Mode completo (já implementado com `next-themes`)
- **Polimento Final (Audit UI)**: Remover "arestas ásperas", melhorar seções aglomeradas
- **Estados de Tela**: Considerar estado vazio, loading e com dados

---

## 🔍 SEO & Marketing Digital

### Palavras-Chave Alvo (Local SEO)
**Primárias**:
- academia em Matupá
- melhor academia Matupá
- plano anual academia

**Secundárias**:
- musculação Matupá
- treino Matupá
- academia Matupá MT
- full force academia

### Schema.org Implementado
Veja `src/components/StructuredData.tsx`:
- `Organization` - Dados da empresa
- `LocalBusiness` - Geolocalização + horários
- `Offer` - Plano Anual com desconto
- `BreadcrumbList` - Navegação estruturada
- `FAQPage` - Perguntas frequentes indexáveis

### Google Analytics 4 - Eventos de Conversão
Veja `src/components/GoogleAnalytics.tsx`:

```typescript
// Eventos implementados:
- click_whatsapp      // Clique em qualquer CTA do WhatsApp
- generate_lead       // Lead qualificado gerado
- begin_checkout      // Início do checkout (Plano Anual)
- page_view           // Visualizações com contexto
- web_vitals          // LCP, FID, CLS
```

**Configuração necessária**: Substitua `GA_MEASUREMENT_ID` pelo ID real do GA4.

---

## ⚡ Performance & Otimizações

### Core Web Vitals (Metas)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Vite Configuration (`vite.config.ts`)
- **Code Splitting**: Vendors separados (React, UI, Utils, Icons)
- **Minificação**: Terser com remoção de `console.log`
- **Asset Optimization**: Imagens, fontes e CSS otimizados
- **Tree-shaking**: Apenas código usado é incluído

### Netlify Configuration (`netlify.toml`)
- **Cache**: 1 ano para assets estáticos (`max-age=31536000`)
- **Headers de Segurança**: HSTS, X-Frame-Options
- **Redirects**: HTTP→HTTPS e www→non-www automáticos
- **Compressão**: Brotli/Gzip automático

### Performance Optimizer (`PerformanceOptimizer.tsx`)
- Preload de recursos críticos (hero image, fonts)
- Lazy loading de imagens com IntersectionObserver
- Resource hints (DNS prefetch, preconnect)
- Web Vitals reporting automático

---

## 🔧 Workflows de Desenvolvimento

### Comandos Principais
```bash
# Desenvolvimento local
bun run dev              # Inicia servidor em localhost:8080

# Build de produção
bun run build            # Build otimizado para Netlify

# Preview local do build
bun run preview          # Testa build antes do deploy

# Lint
bun run lint             # ESLint para verificar código
```

### Deploy (Netlify)
- **Automático**: Push na branch `main` dispara deploy
- **Build Command**: `npm run build` (configurado no netlify.toml)
- **Publish Directory**: `dist`
- **Node Version**: 20

---

## 💬 Integração WhatsApp

### Número Oficial
**556699100808** (usado em todos os CTAs)

### Mensagens Pré-definidas
```javascript
// Hero CTA
"Olá! Quero minha aula grátis na Full Force Academia 🏋️"

// Plans CTA (Mensal)
"Olá! Tenho interesse no Mensal da Full Force Academia"

// Plans CTA (Anual)
"Olá! Tenho interesse no Anual da Full Force Academia"
```

### Tracking de Conversão
Todo clique em CTA do WhatsApp dispara:
1. Evento `click_whatsapp` no GA4
2. Evento `generate_lead` com valor (R$189 ou R$1428)
3. Para Plano Anual: evento `begin_checkout` adicional

---

## 📊 Métricas de Sucesso (KPIs)

### Conversão
- **Taxa de Conversão**: Visitantes → Cliques no WhatsApp
- **Custo por Lead (CPL)**: Investimento Google Ads ÷ Leads gerados
- **ROI**: (Receita - Investimento) ÷ Investimento

### Performance
- Core Web Vitals no verde (PageSpeed Insights)
- Tempo de carregamento < 3s (mobile)
- Bundle size < 300KB (gzipped)

### SEO
- Posição 1-3 para "academia em Matupá"
- Rich snippets nos resultados do Google
- CTR > 5% nas campanhas Google Ads

---

## 🎯 Convenções de Código

### TypeScript
- **Strict mode** habilitado
- Tipagem explícita para props de componentes
- Evitar `any` - usar tipos específicos

### React Components
- **Functional components** com hooks
- Props desestruturadas no topo
- Constantes de configuração fora do componente (exemplo: `WHATSAPP_CONFIG`)
- Comentários JSDoc para componentes principais

### Tailwind CSS
- **Mobile-first**: Classes base para mobile, `md:` e `lg:` para desktop
- **Design tokens**: Usar cores do tema (`primary`, `neutral-950`, etc.)
- Evitar valores arbitrários - usar classes do design system

### Tracking Analytics
```typescript
// Padrão para tracking de eventos
if (typeof window !== "undefined" && window.gtag) {
  window.gtag('event', 'event_name', {
    event_category: 'category',
    event_label: 'label',
    value: 1
  });
}
```

---

## 🚨 Pontos de Atenção

### ❌ NÃO Fazer
- Alterar o número do WhatsApp sem confirmar
- Remover eventos de tracking existentes
- Modificar a estrutura de Schema.org sem validar
- Adicionar dependências pesadas sem justificativa
- Criar variações de CTA que competem entre si (princípio do CTA único)

### ✅ Sempre Fazer
- Testar responsividade em mobile (80% do tráfego)
- Verificar tracking de eventos no GA4 DebugView
- Validar Schema.org com Google Rich Results Test
- Otimizar imagens antes de adicionar (WebP preferível)
- Manter consistência do design system (cores, sombras, espaçamentos)

---

## 📝 Documentação Adicional

### Arquivos de Referência
- `OTIMIZACOES-GOOGLE.md` - Guia completo de SEO e Google Ads
- `DESIGN-SYSTEM-REFINED.md` - Sistema de design detalhado
- `SEO-LOCAL-MATUPA.md` - Estratégia de SEO local
- `MOBILE-FIRST-OPTIMIZATION.md` - Otimizações mobile

### Links Úteis
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Schema.org Docs](https://schema.org/)

---

## 🏆 Tom de Marca (Copywriting)

### Voz da Full Force
- **Direta e motivadora**: Sem rodeios, vai ao ponto
- **Inclusiva e acolhedora**: "Falta só você"
- **Baseada em fatos**: "650+ alunos", "37% OFF"
- **Urgência sem pressão**: "Oferta até 31/10" (não "ÚLTIMA CHANCE")

### Exemplos de Headlines
✅ "Matupá treina na Full Force 💪"
✅ "Mais de 650 Alunos Já Começaram. Falta Só Você."
✅ "Por que 650+ alunos escolheram o Plano Anual?"

❌ "A MELHOR academia do BRASIL!" (exagero)
❌ "Transforme seu corpo AGORA!!!" (spam)
❌ "Vagas limitadas - corre!" (pressão excessiva)

---

## 🤖 Prompt para Agentes de IA

Quando trabalhar neste projeto:
1. **Priorize conversão**: Todo código deve facilitar o caminho até o WhatsApp
2. **Mantenha tracking**: Sempre preservar ou adicionar eventos GA4
3. **Mobile-first**: Testar em mobile antes de desktop
4. **Performance**: Evitar dependências que aumentem bundle size
5. **SEO**: Manter Schema.org e meta tags atualizados
6. **Consistência**: Seguir o design system estabelecido

**Filosofia**: Este não é um site institucional. É uma **máquina de conversão**. Cada elemento deve ter um propósito claro: informar, engajar ou converter.

---

**Última atualização**: 15 de outubro de 2025
**Versão do projeto**: 1.0.0
**Status**: Em produção ativa (campanha Google Ads rodando)
