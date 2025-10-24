# 📋 Projeto Verão 60 Dias - Documentação Completa

## 🎯 Visão Geral da Landing Page

**URL:** https://fullforceacademia.com.br/projetofimdeano

**Objetivo:** Converter visitantes em assinantes do Plano Anual R$ 119 + participantes do Projeto Verão 60 Dias

**Prazo:** Inscrições até 31 de outubro | Início: 1º de novembro

---

## 📝 Copy Master - Todas as Variações

### Headlines Testáveis (Testes A/B)

#### Variação A - Foco em Economia (Atual)
```
Projeto Verão
60 Dias
```

#### Variação B - Foco em Transformação
```
Transforme Seu Corpo
em 60 Dias
```

#### Variação C - Foco em Urgência
```
Últimos Dias
Projeto Verão 60 Dias
```

#### Variação D - Foco em Prêmio
```
Ganhe 3 Meses Grátis
Projeto Verão 60 Dias
```

### Subheadlines Testáveis

#### Variação A - Economia (Atual)
```
Transforme seu corpo, compete pelo prêmio e pague apenas R$ 119/ano
```

#### Variação B - Resultado
```
60 dias para o corpo que você sempre quis. Plano Anual por R$ 119
```

#### Variação C - Comunidade
```
Entre no desafio mais transformador de Matupá. R$ 119 o ano inteiro
```

---

## 🎨 Diretrizes Visuais

### Paleta de Cores

**Primárias:**
- Preto: `#000000` / `hsl(0 0% 0%)` - Background principal
- Vermelho (Error): `#DC2626` / `hsl(0 72% 51%)` - CTAs e urgência
- Amarelo (Primary): `#FFCC00` / `hsl(45 100% 50%)` - Destaques e prêmios

**Secundárias:**
- Neutro 950: `hsl(0 0% 4%)` - Background alternativo
- Neutro 900: `hsl(0 0% 9%)` - Cards
- Gray 400: `hsl(0 0% 64%)` - Textos secundários

### Hierarquia Tipográfica

```css
H1 (Hero): 4xl md:5xl lg:6xl (2.25rem - 4rem)
H2 (Seções): 3xl md:4xl (1.875rem - 2.25rem)
H3 (Cards): xl md:2xl (1.25rem - 1.5rem)
Body: base md:lg (1rem - 1.125rem)
Small: sm md:base (0.875rem - 1rem)
```

---

## 🔄 Recomendações de Testes A/B

### Teste 1: Headlines do Hero

**Hipótese:** Headline focada em "economia" converte mais que "transformação"

**Variações:**
- A (Controle): "Projeto Verão 60 Dias"
- B: "Transforme Seu Corpo em 60 Dias"
- C: "Economize R$ 2.149 + Transforme em 60 Dias"

**Métrica:** Taxa de clique no CTA primário

**Duração:** 7 dias (500 visitantes mínimo)

---

### Teste 2: CTA Principal

**Hipótese:** CTAs com urgência convertem mais que CTAs genéricos

**Variações:**
- A (Controle): "Garantir Meu Anual Agora"
- B: "Garantir Vaga Antes que Acabe"
- C: "Quero Economizar R$ 2.149"

**Métrica:** Taxa de submissão do formulário

**Duração:** 7 dias (500 visitantes mínimo)

---

### Teste 3: Ordem das Seções

**Hipótese:** Prova social antes da tabela comparativa aumenta confiança e conversão

**Variações:**
- A (Controle): Hero → Como Funciona → Prova Social → Tabela → Benefícios → FAQ → CTA
- B: Hero → Prova Social → Como Funciona → Tabela → Benefícios → FAQ → CTA
- C: Hero → Como Funciona → Tabela → Prova Social → Benefícios → FAQ → CTA

**Métrica:** Taxa de rolagem até formulário + conversão final

**Duração:** 14 dias (1000 visitantes mínimo)

---

### Teste 4: Formulário - Campos

**Hipótese:** Menos campos = mais conversão

**Variações:**
- A (Controle): Nome + WhatsApp + Email
- B: Apenas WhatsApp
- C: Nome + WhatsApp

**Métrica:** Taxa de preenchimento completo

**Duração:** 7 dias (300 tentativas mínimo)

---

### Teste 5: Prova Social

**Hipótese:** Números específicos convertem mais que genéricos

**Variações:**
- A (Controle): "650+ alunos confiam na Full Force"
- B: "653 alunos ativos em outubro de 2025"
- C: "Mais de 600 transformações em Matupá"

**Métrica:** Tempo na página + scroll depth

**Duração:** 7 dias

---

## 📊 KPIs e Métricas de Sucesso

### Métricas Primárias

| Métrica | Meta | Medição |
|---------|------|---------|
| Taxa de conversão | 15%+ | Visitantes → Formulário enviado |
| Inscrições totais | 40+ | Total de formulários válidos |
| Custo por aquisição | < R$ 50 | Investimento ads ÷ conversões |

### Métricas Secundárias

| Métrica | Meta | Medição |
|---------|------|---------|
| Bounce rate | < 40% | GA4 |
| Tempo médio na página | > 3min | GA4 |
| Scroll depth | > 70% | GA4 + Hotjar |
| Cliques no WhatsApp | > 80 | Eventos GA4 |

---

## 💬 Microcopies - Botões e Labels

### CTAs (Call-to-Actions)

**Primários:**
- ✅ "Garantir Meu Anual Agora"
- ✅ "Garantir Vaga VIP"
- ✅ "Entrar no Desafio"

**Secundários:**
- "Falar no WhatsApp"
- "Saber Mais"
- "Ver Ranking"

### Labels de Formulário

```
Nome completo
WhatsApp
E-mail
```

### Mensagens de Validação

```
✓ Formulário enviado com sucesso!
✗ Por favor, preencha todos os campos
✗ WhatsApp inválido. Use o formato (66) 99999-9999
✗ E-mail inválido
```

### Badges de Urgência

```
🔥 Inscrições até 31 de Outubro
⏰ Últimos dias
🎯 Apenas 40 vagas
🔒 Ambiente seguro e protegido
```

---

## 📱 Responsividade - Breakpoints

### Mobile First

```css
/* Mobile: < 768px */
- Formulário ocupa 100% da largura
- CTA fixo no bottom (sticky)
- Font sizes reduzidos (4xl → 3xl)

/* Tablet: 768px - 1024px */
- Grid 2 colunas
- Formulário ao lado do hero

/* Desktop: > 1024px */
- Grid 2-4 colunas dependendo da seção
- Espaçamentos maiores
```

---

## 🔍 SEO - Meta Tags Completas

```html
<!-- Title -->
<title>Projeto Verão 60 Dias - Plano Anual Full Force Academia | R$ 119/mês</title>

<!-- Description -->
<meta name="description" content="Garanta seu Plano Anual por R$ 119/mês na Full Force Academia e participe do Projeto Verão 60 Dias. Ranking semanal, prêmios de até 3 meses grátis e grupo VIP exclusivo. Inscrições até 31/10!" />

<!-- Keywords -->
<meta name="keywords" content="projeto verão, plano anual academia matupá, full force academia, desafio 60 dias, academia matupá, prêmios academia, transformação 60 dias" />

<!-- Open Graph -->
<meta property="og:title" content="Projeto Verão 60 Dias - Plano Anual R$ 119/mês | Full Force" />
<meta property="og:description" content="Transforme seu corpo em 60 dias! Plano Anual por R$ 119/mês com ranking, prêmios e grupo VIP. Vagas limitadas até 31/10!" />
<meta property="og:url" content="https://fullforceacademia.com.br/projetofimdeano" />

<!-- Canonical -->
<link rel="canonical" href="https://fullforceacademia.com.br/projetofimdeano" />
```

---

## 🎁 Termos e Condições - Resumido

### Política de Cancelamento

```
O Plano Anual tem compromisso de 12 meses.
Cancelamentos antecipados estão sujeitos a multa proporcional.
Consulte regulamento completo na academia.
```

### Regulamento do Desafio

```
1. Participação exclusiva para assinantes do Plano Anual R$ 119
2. Inscrições até 31 de outubro de 2025
3. Desafio de 1º nov a 31 dez (60 dias)
4. Ranking atualizado toda segunda-feira
5. Prêmios: 1º lugar = 3 meses | 2º lugar = 2 meses | 3º lugar = 1 mês
6. Pontuação: Dias treinados + Fotos + Engajamento
7. Grupo VIP exclusivo no WhatsApp (40 vagas)
8. Resultados finais em 31 de dezembro
```

### Política de Privacidade

```
Seus dados pessoais (nome, WhatsApp, e-mail) são coletados
apenas para fins de inscrição no Plano Anual e Projeto Verão.
Não compartilhamos suas informações com terceiros.
Ambiente seguro e criptografado.
```

---

## 🚀 Checklist de Lançamento

### Pré-lançamento (24 out)

- [x] Landing page desenvolvida
- [x] Formulário configurado
- [x] SEO otimizado (meta tags + JSON-LD)
- [x] Responsividade testada
- [ ] WhatsApp Business configurado
- [ ] Grupo VIP criado
- [ ] Google Analytics ativo
- [ ] Pixel Facebook instalado
- [ ] Posts Instagram agendados

### Durante Campanha (24-31 out)

- [ ] Stories diários (3-4x/dia)
- [ ] Posts feed (2x durante período)
- [ ] Broadcast WhatsApp (1x/dia)
- [ ] Monitorar formulário
- [ ] Responder DMs em < 2h
- [ ] Atualizar contador de vagas

### Pós-inscrição (1 nov)

- [ ] Confirmar 40 inscritos
- [ ] Adicionar ao grupo VIP
- [ ] Enviar boas-vindas
- [ ] Agendar primeira foto
- [ ] Publicar primeiro ranking

---

## 🎨 Assets Necessários

### Imagens

- [ ] Foto fachada Full Force (Hero background)
- [ ] Antes/depois de 3-5 alunos (Prova Social)
- [ ] Equipamentos da academia
- [ ] Grupo treinando
- [ ] Logo Full Force (PNG transparente)

### Vídeos (Opcional)

- [ ] Teaser do desafio (30s)
- [ ] Depoimento aluno (15s)
- [ ] Tour pela academia (45s)

### Design

- [ ] Template ranking semanal (Canva)
- [ ] Stories countdown (7 templates)
- [ ] Post carrossel "R$ 119 vs R$ 2.268"

---

## 📞 Configurações de Contato

### WhatsApp

**Número:** +55 66 99999-9999 (ATUALIZAR COM NÚMERO REAL)

**Mensagem padrão do formulário:**
```
Quero garantir meu Plano Anual R$ 119 + Projeto Verão 60 Dias!

Nome: [NOME]
WhatsApp: [WHATSAPP]
Email: [EMAIL]
```

### Links Importantes

- Landing page: `/projetofimdeano`
- Instagram: `@fullforceacademia`
- WhatsApp: `wa.me/5566999999999`

---

## 🎯 Próximos Passos

1. **Atualizar número do WhatsApp** no código (ProjetoVeraoHero.tsx linha 16)
2. **Configurar Google Analytics** com eventos de conversão
3. **Criar posts e stories** para Instagram
4. **Preparar grupo WhatsApp VIP**
5. **Testar formulário** end-to-end
6. **Deploy no Netlify** em `/projetofimdeano`
7. **Configurar domínio** (se necessário)

---

## 📈 Análise Pós-Campanha

### Relatório Final (1 janeiro 2026)

Incluir:

1. **Métricas de aquisição**
   - Total de inscritos
   - Taxa de conversão
   - Custo por aquisição
   - Canais de origem

2. **Métricas de engajamento**
   - Frequência média
   - Fotos coletadas
   - Engagement no grupo VIP

3. **Resultados financeiros**
   - Receita total
   - ROI da campanha
   - LTV projetado

4. **Aprendizados**
   - O que funcionou
   - O que não funcionou
   - Ajustes para próxima edição

---

**Documento criado:** 24 de outubro de 2025
**Versão:** 1.0
**Status:** Pronto para deploy
