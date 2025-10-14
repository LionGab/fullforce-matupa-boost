# 🎨 DESIGN SYSTEM - FULL FORCE ACADEMIA
## Baseado na Identidade Visual da Logo

---

## 📋 ANÁLISE DA LOGO

### **Elementos Visuais Identificados:**

1. **Tipografia:**
   - **"FULL FORCE"**: Fonte display, bold, moderna, em caixa alta
   - Estilo: Industrial, forte, confiante, com presença marcante
   - Características: Letras largas, sans-serif, peso black

2. **Paleta de Cores Primária (da Logo):**
   - **AMARELO/DOURADO**: Cor principal de destaque (#FFCC00 aprox.)
   - **PRETO**: Background e contraste (#0A0A0A)
   - **BRANCO**: Textos e elementos secundários (#FFFFFF)

3. **Estilo Visual:**
   - **Contraste Alto**: Preto + Amarelo = Máximo impacto visual
   - **Profissional Premium**: Sem elementos infantis
   - **Força e Energia**: Cores vibrantes transmitem vitalidade
   - **Sofisticação**: Paleta reduzida, minimalista, eficaz

---

## 🎨 PALETA DE CORES COMPLETA

### **1. CORES PRIMÁRIAS (Da Logo)**

```css
/* Amarelo Full Force - Cor principal da marca */
--primary: hsl(45, 100%, 50%);        /* #FFCC00 - Amarelo vibrante */
--primary-glow: hsl(45, 100%, 60%);   /* #FFD633 - Versão glow */
--primary-dark: hsl(45, 100%, 40%);   /* #CC9900 - Hover/Active */

/* Preto Full Force - Background principal */
--gym-dark: hsl(0, 0%, 8%);           /* #141414 - Preto quase puro */
--background: hsl(0, 0%, 3%);         /* #080808 - Preto absoluto */

/* Branco Full Force - Textos e contraste */
--foreground: hsl(0, 0%, 98%);        /* #FAFAFA - Branco suave */
```

---

### **2. CORES SECUNDÁRIAS (Extensão da Paleta)**

```css
/* Gradientes de Cinza (Hierarquia) */
--gray-950: hsl(0, 0%, 5%);           /* #0D0D0D - Quase preto */
--gray-900: hsl(0, 0%, 10%);          /* #1A1A1A - Preto escuro */
--gray-800: hsl(0, 0%, 15%);          /* #262626 - Cinza muito escuro */
--gray-700: hsl(0, 0%, 25%);          /* #404040 - Cinza escuro */
--gray-600: hsl(0, 0%, 35%);          /* #595959 - Cinza médio escuro */
--gray-500: hsl(0, 0%, 50%);          /* #808080 - Cinza médio */
--gray-400: hsl(0, 0%, 60%);          /* #999999 - Cinza médio claro */
--gray-300: hsl(0, 0%, 75%);          /* #BFBFBF - Cinza claro */
--gray-200: hsl(0, 0%, 85%);          /* #D9D9D9 - Cinza muito claro */
--gray-100: hsl(0, 0%, 95%);          /* #F2F2F2 - Quase branco */
```

---

### **3. CORES SEMÂNTICAS (Funcionalidade)**

```css
/* Sucesso (WhatsApp, Confirmações) */
--success: hsl(142, 76%, 36%);        /* #10B981 - Verde WhatsApp */
--success-light: hsl(142, 76%, 46%);  /* #34D399 - Verde claro */

/* Erro/Urgência (Descontos, Alertas) */
--error: hsl(0, 84%, 60%);            /* #F87171 - Vermelho urgência */
--error-dark: hsl(0, 72%, 51%);       /* #EF4444 - Vermelho escuro */

/* Aviso (Informações importantes) */
--warning: hsl(38, 92%, 50%);         /* #F59E0B - Laranja aviso */

/* Info (Badges, Estatísticas) */
--info: hsl(199, 89%, 48%);           /* #0EA5E9 - Azul informativo */
```

---

## 🖼️ APLICAÇÃO DAS CORES

### **REGRA DE OURO:** Amarelo = Ação | Preto = Base | Branco = Conteúdo

| Elemento | Cor Principal | Cor Secundária | Justificativa |
|----------|---------------|----------------|---------------|
| **CTAs Principais** | Amarelo (#FFCC00) | Preto (texto) | Máximo contraste, urgência |
| **Backgrounds** | Preto (#0A0A0A) | Cinza escuro | Profundidade, premium |
| **Títulos Principais** | Branco + Amarelo (destaque) | - | Hierarquia clara |
| **Textos Primários** | Branco (#FAFAFA) | - | Legibilidade máxima |
| **Textos Secundários** | Cinza 400 (#999) | - | Hierarquia visual |
| **Badges de Destaque** | Amarelo | Preto (texto) | Consistência com logo |
| **Borders** | Cinza 800/Amarelo | - | Profundidade sutil |
| **Hover States** | Amarelo glow | - | Feedback interativo |

---

## 📐 SISTEMA DE SOMBRAS (TWO-LAYER DEPTH)

### **Inspirado na Logo:** Sombras com glow amarelo para depth premium

```css
/* Sombras Base */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.25);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.35);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.45);

/* Sombras com Glow Amarelo (Two-Layer) */
--shadow-yellow: 
  0 4px 16px rgba(0, 0, 0, 0.3),        /* Sombra base escura */
  0 2px 8px rgba(255, 204, 0, 0.2);    /* Glow amarelo sutil */

--shadow-yellow-glow:
  0 8px 32px rgba(0, 0, 0, 0.4),        /* Sombra base profunda */
  0 4px 16px rgba(255, 204, 0, 0.4),   /* Glow amarelo médio */
  0 0 20px rgba(255, 204, 0, 0.3);     /* Halo amarelo */

--shadow-elevated:
  0 12px 48px rgba(0, 0, 0, 0.5),       /* Sombra base muito profunda */
  0 6px 24px rgba(255, 204, 0, 0.3);   /* Glow amarelo forte */
```

### **Aplicação:**
- **Cards Normais:** `shadow` ou `shadow-md`
- **Cards em Hover:** `shadow-yellow`
- **CTAs/Badges:** `shadow-yellow-glow`
- **Modais/Popups:** `shadow-elevated`

---

## ✨ EFEITOS DE GLOW (IDENTIDADE VISUAL)

### **Glow Amarelo (Drop Shadow):**

```css
/* Texto com Glow */
.text-glow {
  text-shadow: 
    0 0 20px rgba(255, 204, 0, 0.5),
    0 0 40px rgba(255, 204, 0, 0.3),
    0 0 60px rgba(255, 204, 0, 0.1);
}

/* Box com Glow */
.box-glow {
  box-shadow: 
    0 0 20px rgba(255, 204, 0, 0.3),
    0 0 40px rgba(255, 204, 0, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.4);
}

/* Border com Glow */
.border-glow {
  border: 2px solid #FFCC00;
  box-shadow: 
    inset 0 0 10px rgba(255, 204, 0, 0.2),
    0 0 20px rgba(255, 204, 0, 0.3);
}
```

### **Aplicação no Tailwind:**

```tsx
// Preço gigante com glow
<span className="text-8xl text-primary drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]">
  119
</span>

// Badge flutuante com glow
<div className="bg-primary shadow-[0_0_20px_rgba(255,204,0,0.4)]">
  MAIS ESCOLHIDO
</div>

// CTA com glow pulsante
<Button className="bg-primary shadow-[0_0_20px_rgba(255,204,0,0.3)] 
                   animate-pulse-glow">
  Começar Agora
</Button>
```

---

## 🎯 TIPOGRAFIA (ALINHADA COM A LOGO)

### **Font Family:**

```css
/* Principal: Sans-serif moderna, bold-friendly */
--font-sans: 'Inter', 'Roboto', 'Helvetica Neue', system-ui, sans-serif;

/* Display (Títulos grandes): Pesos extremos */
--font-display: 'Inter', sans-serif;

/* Monospace (Códigos, números): */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### **Weights (Inspirados na Logo):**

| Elemento | Weight | Classe Tailwind |
|----------|--------|-----------------|
| **Logo Style (Títulos Hero)** | 900 (Black) | `font-black` |
| **Títulos Principais** | 800 (Extra Bold) | `font-extrabold` |
| **Subtítulos** | 700 (Bold) | `font-bold` |
| **CTAs e Buttons** | 700-800 (Bold/Extra Bold) | `font-bold` |
| **Corpo de Texto** | 500 (Medium) | `font-medium` |
| **Texto Secundário** | 400 (Normal) | `font-normal` |
| **Captions** | 300 (Light) | `font-light` |

### **Scale (Mobile-First):**

```tsx
// Hero Headline (Logo Style)
text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black

// Preço Gigante (Estilo Full Force)
text-7xl md:text-8xl font-black text-primary

// Título de Seção
text-3xl sm:text-4xl md:text-5xl font-black

// Subtítulo
text-xl sm:text-2xl md:text-3xl font-bold

// Corpo
text-base sm:text-lg md:text-xl font-medium
```

---

## 🔲 COMPONENTES COM IDENTIDADE FULL FORCE

### **1. CTA Button (Amarelo Dominante):**

```tsx
<Button className="
  bg-primary hover:bg-primary/90 
  text-black font-black text-lg
  px-8 py-6 
  shadow-yellow-glow
  hover:scale-105 
  active:scale-95
  transition-smooth
  animate-pulse-glow
">
  🔥 Começar Agora
</Button>
```

**Anatomia:**
- **Cor:** Amarelo Full Force (#FFCC00)
- **Texto:** Preto (contraste máximo)
- **Peso:** Black (900) - Estilo logo
- **Glow:** Shadow amarelo com pulso
- **Interação:** Scale hover + pulso

---

### **2. Badge "Mais Escolhido" (Logo Style):**

```tsx
<div className="
  bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600
  text-black font-black text-sm
  px-6 py-2 rounded-full
  shadow-yellow
  animate-pulse-subtle
  flex items-center gap-2
">
  <Star className="w-4 h-4 fill-current" />
  MAIS ESCOLHIDO
</div>
```

**Anatomia:**
- **Gradiente:** Tons de amarelo (depth)
- **Texto:** Preto black (contraste logo)
- **Formato:** Pill shape (moderno)
- **Animação:** Pulso sutil (chama atenção)

---

### **3. Card Premium (Profundidade Full Force):**

```tsx
<Card className="
  bg-gradient-to-b from-gym-dark to-black
  border-2 border-primary
  shadow-elevated
  hover:scale-105
  transition-smooth
">
  {/* Conteúdo */}
</Card>
```

**Anatomia:**
- **Background:** Gradiente escuro (profundidade)
- **Border:** Amarelo 2px (destaque logo)
- **Shadow:** Elevada com glow amarelo
- **Hover:** Leve scale (feedback)

---

### **4. Pricing Display (Gigante com Glow):**

```tsx
<div className="text-center py-6">
  {/* Preço Original Tachado */}
  <div className="flex items-center justify-center gap-3 mb-2">
    <span className="text-2xl text-gray-500 line-through font-bold">
      R$ 189
    </span>
    <TrendingDown className="w-5 h-5 text-red-500" />
  </div>

  {/* Discount Badge */}
  <div className="inline-block mb-3">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 
                    text-white font-black px-4 py-2 rounded-lg text-sm 
                    shadow-lg">
      🔥 37% OFF
    </div>
  </div>

  {/* Preço Gigante com Glow Full Force */}
  <div className="flex items-baseline justify-center gap-1">
    <span className="text-2xl text-gray-400 font-bold">R$</span>
    <span className="text-7xl md:text-8xl font-black text-primary
                     drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]
                     leading-none">
      119
    </span>
    <span className="text-xl text-gray-400 font-medium">/mês</span>
  </div>

  {/* Economia Destacada */}
  <div className="mt-4 pt-4 border-t border-primary/20">
    <p className="text-primary font-bold text-base">
      💰 Você paga R$1428 em vez de R$2268
    </p>
  </div>
</div>
```

**Anatomia:**
- **Hierarquia:** Preço = Elemento dominante
- **Glow:** Drop shadow amarelo (identidade)
- **Contraste:** Cinza (secundário) vs Amarelo (principal)
- **Escala:** 8xl (96px) - Máximo impacto

---

## 🎬 ANIMAÇÕES (ENERGIA DA MARCA)

### **Animate Pulse Glow (CTA Signature):**

```css
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.3);
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 40px rgba(255, 204, 0, 0.5);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### **Animate Pulse Subtle (Badges):**

```css
@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}
```

### **Transition Smooth (Padrão):**

```css
.transition-smooth {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📱 RESPONSIVIDADE (MOBILE-FIRST)

### **Breakpoints Tailwind:**

```typescript
screens: {
  'sm': '640px',   // Tablet pequeno
  'md': '768px',   // Tablet/Desktop pequeno
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Desktop grande
  '2xl': '1536px', // Desktop XL
}
```

### **Estratégia de Escala (Logo Proportions):**

| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| **Logo/Headline** | text-3xl (30px) | text-4xl (36px) | text-6xl (60px) |
| **Preço** | text-7xl (72px) | text-8xl (96px) | text-8xl (96px) |
| **CTA** | text-base (16px) | text-lg (18px) | text-lg (18px) |
| **Padding** | px-4 py-3 | px-6 py-4 | px-8 py-6 |

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### **Cores:**
- [x] Amarelo #FFCC00 como cor primária
- [x] Preto #0A0A0A como background principal
- [x] Branco #FAFAFA para textos
- [x] Gradientes de cinza para hierarquia
- [x] Cores semânticas (verde, vermelho, laranja)

### **Sombras:**
- [x] Sistema two-layer (escura + glow amarelo)
- [x] Shadow-yellow para cards
- [x] Shadow-yellow-glow para CTAs
- [x] Shadow-elevated para modais

### **Tipografia:**
- [x] Font-black (900) para títulos hero
- [x] Font-bold (700) para CTAs
- [x] Font-medium (500) para corpo
- [x] Escala responsiva (3xl → 8xl)

### **Componentes:**
- [x] CTA amarelo com glow pulsante
- [x] Badges com gradiente amarelo
- [x] Cards com border amarela + shadow
- [x] Pricing gigante (8xl) com glow

### **Animações:**
- [x] Pulse-glow (CTAs)
- [x] Pulse-subtle (badges)
- [x] Hover scale (feedback)
- [x] Transition-smooth (300ms)

---

## 🚀 RESULTADO ESPERADO

Com este design system baseado na logo:

### **Identidade Visual:**
✅ Consistência total com a marca Full Force
✅ Amarelo dominante = Ação e energia
✅ Preto premium = Sofisticação
✅ Contraste máximo = Legibilidade perfeita

### **Psicologia das Cores:**
✅ Amarelo = Otimismo, energia, urgência
✅ Preto = Premium, seriedade, profissionalismo
✅ Contraste = Confiança, clareza, decisão

### **Percepção do Usuário:**
✅ "Esta academia é moderna e profissional"
✅ "Os CTAs são claros, sei o que fazer"
✅ "O design transmite energia e confiança"
✅ "Parece uma marca premium, mas acessível"

---

**Full Force Academia — Design que Reflete a Marca** 🎨💪⚡

*Documento criado em: Outubro 2025*  
*Versão: 1.0*  
*Baseado na análise da logo oficial*
