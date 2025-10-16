/**
 * GUIA DE USO - LOGO RESPONSIVO FULL FORCE
 * 
 * Este arquivo documenta como usar o sistema de logos responsivo implementado.
 */

## 🎯 **SISTEMA DE LOGOS IMPLEMENTADO**

### **Arquivos Disponíveis:**
```
public/
├── logo.jpg                    # Logo original (fallback)
├── logo-full-white.jpg         # Logo completa fundo branco/transparente
├── logo-full-dark.jpg          # Logo completa fundo escuro
├── logo-full-yellow.jpg        # Logo completa com destaque amarelo
├── logo-full-yellow-alt.jpg    # Variação alternativa amarela
├── logo-symbol-only.jpg        # Apenas símbolo (sem texto)
├── logo-symbol-yellow.jpg      # Símbolo amarelo
└── favicon.jpg                 # Favicon (símbolo amarelo)
```

### **Componente LogoResponsive:**

#### **Uso Básico:**
```tsx
import LogoResponsive from "@/components/LogoResponsive";

// Logo padrão que se adapta ao tema
<LogoResponsive />

// Logo do header com hover effect
<LogoResponsive variant="header" size="md" />

// Logo do hero com efeito glow
<LogoResponsive variant="hero" size="lg" withGlow={true} />

// Logo do footer sempre amarela
<LogoResponsive variant="footer" size="md" />

// Apenas símbolo para mobile
<LogoResponsive variant="symbol" size="sm" />
```

#### **Props Disponíveis:**

| Prop | Valores | Descrição |
|------|---------|-----------|
| `variant` | `"header"` `"hero"` `"footer"` `"symbol"` `"full"` | Contexto de uso |
| `size` | `"sm"` `"md"` `"lg"` `"xl"` | Tamanho responsivo |
| `withGlow` | `boolean` | Ativa efeito glow |
| `className` | `string` | Classes CSS adicionais |

#### **Lógica de Seleção:**

- **Header**: Branca no dark mode, escura no light mode
- **Hero**: Sempre amarela para máximo destaque
- **Footer**: Sempre amarela para identificação final
- **Symbol**: Compacta para mobile e favicon
- **Full**: Adapta-se ao tema (padrão)

### **Implementação Atual:**

✅ **Header**: Logo responsiva que muda com o tema  
✅ **Hero**: Logo com efeito glow e destaque amarelo  
✅ **Footer**: Logo amarela para identificação da marca  
✅ **Favicon**: Símbolo otimizado  
✅ **Animações**: Pulse subtle e hover effects  
✅ **Performance**: Lazy loading e preload estratégico  

### **Otimizações Aplicadas:**

1. **Responsividade**: Tamanhos diferentes por dispositivo
2. **Performance**: Loading lazy exceto no hero
3. **Acessibilidade**: Alt text descritivo
4. **Fallback**: Logo original em caso de erro
5. **Tema adaptável**: Dark/light mode automático
6. **Efeitos visuais**: Glow, hover, animações

### **Próximos Passos Recomendados:**

1. **Converter para SVG**: Melhor qualidade e menor tamanho
2. **Adicionar PWA icons**: Ícones para dispositivos móveis
3. **Otimizar para SEO**: Schema.org logo structured data
4. **A/B Test**: Testar posicionamento e tamanhos

---

**Status**: ✅ Implementado e funcionando  
**Performance**: ✅ Otimizado para Core Web Vitals  
**Responsividade**: ✅ Mobile-first design  
**Acessibilidade**: ✅ Alt text e fallbacks