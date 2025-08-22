# 🌓 Plano de Implementação: Dark/Light Mode

## 📋 Visão Geral

Implementação de sistema de temas (claro/escuro) mantendo a nova paleta de cores e garantindo boa usabilidade e acessibilidade.

## 🎨 Paletas de Cores por Tema

### 🌞 Light Mode
```css
Primary: #F5F7FA (fundo principal - invertido)
Secondary: #FFFFFF (cards e componentes)
Accent 1: #0B132B (links/ações - invertido para contraste)
Accent 2: #1C2541 (realce escuro)
Accent 3: #FF7A00 (mantém - bom contraste em ambos)
Text Primary: #0B132B (texto principal)
Text Secondary: #1C2541 (texto secundário)
Border: #E5E7EB (bordas suaves)
```

### 🌚 Dark Mode (Atual)
```css
Primary: #0B132B (navy profundo)
Secondary: #1C2541 (UI escuro)
Accent 1: #00E5FF (cyan brilhante)
Accent 2: #2EE6A6 (green vibrante)
Accent 3: #FF7A00 (orange - mantém)
Text Primary: #F5F7FA (texto claro)
Text Secondary: #9AA0A6 (texto secundário)
Border: #374151 (bordas no escuro)
```

## 🔧 Implementação Técnica

### 1. Atualização do Tailwind Config
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        // Cores base (aplicadas via CSS custom properties)
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent1: 'var(--color-accent1)',
        accent2: 'var(--color-accent2)',
        accent3: '#FF7A00', // Fixa - funciona em ambos temas
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)'
      }
    }
  }
}
```

### 2. CSS Custom Properties
```css
/* src/styles/globals.css */
:root {
  /* Light Mode (padrão) */
  --color-primary: #F5F7FA;
  --color-secondary: #FFFFFF;
  --color-accent1: #0B132B;
  --color-accent2: #1C2541;
  --color-text-primary: #0B132B;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
}

.dark {
  /* Dark Mode */
  --color-primary: #0B132B;
  --color-secondary: #1C2541;
  --color-accent1: #00E5FF;
  --color-accent2: #2EE6A6;
  --color-text-primary: #F5F7FA;
  --color-text-secondary: #9AA0A6;
  --color-border: #374151;
}
```

### 3. Componente Toggle
```typescript
// src/components/features/theme/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />; // Placeholder

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-brand-secondary border border-brand-border 
                 hover:bg-brand-accent1/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        // Ícone Sol
        <svg className="w-5 h-5 text-brand-accent1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        // Ícone Lua
        <svg className="w-5 h-5 text-brand-accent1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
```

### 4. Provider de Tema
```typescript
// src/components/providers/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
```

## 🎯 Componentes a Atualizar

### 1. Layout Principal
- `src/app/layout.tsx` - Adicionar ThemeProvider
- `src/components/layout/NavBar.tsx` - Adicionar toggle no header
- `src/components/layout/Footer.tsx` - Adaptar cores

### 2. Páginas Principais
- `src/app/(site)/page.tsx` - Homepage
- `src/app/(site)/projects/page.tsx` - Projects
- `src/app/consult/page.tsx` - Consulting
- `src/app/(site)/links/page.tsx` - Links
- `src/app/(site)/blog/page.tsx` - Blog

### 3. Componentes UI
- `src/components/ui/Card.tsx` - Cards de projeto
- `src/components/ui/Heading.tsx` - Títulos
- Todos os modais e formulários

## 📱 Considerações de UX

### 1. Persistência
```typescript
// Usar next-themes para:
- Persistir preferência no localStorage
- Detectar preferência do sistema
- Evitar flash of incorrect theme (FOIT)
```

### 2. Transições Suaves
```css
/* Aplicar em elementos principais */
.theme-transition {
  transition: background-color 0.3s ease, 
              color 0.3s ease, 
              border-color 0.3s ease;
}
```

### 3. Acessibilidade
- Contraste mínimo AA (4.5:1) em ambos temas
- Toggle com aria-label apropriado
- Indicação visual clara do tema ativo
- Suporte a navegação por teclado

## 🚀 Implementação em Fases

### Fase 1: Infraestrutura (1-2 horas)
1. Instalar `next-themes`
2. Configurar CSS custom properties
3. Atualizar Tailwind config
4. Criar ThemeProvider

### Fase 2: Componentes Core (2-3 horas)
1. Criar ThemeToggle
2. Atualizar NavBar e Layout
3. Adaptar componentes UI básicos
4. Testar funcionalidade base

### Fase 3: Páginas e Refinamento (2-4 horas)
1. Atualizar todas as páginas
2. Ajustar contrastes e cores
3. Implementar transições suaves
4. Testes de acessibilidade

### Fase 4: Otimização (1 hora)
1. Performance testing
2. Ajustes finais de UX
3. Documentação

## 🧪 Testes Necessários

### Funcionalidade
- [ ] Toggle funciona corretamente
- [ ] Preferência persiste entre sessões
- [ ] Detecta tema do sistema
- [ ] Sem flash of incorrect theme

### Acessibilidade
- [ ] Contraste adequado em ambos temas
- [ ] Navegação por teclado
- [ ] Screen readers funcionam
- [ ] Indicações visuais claras

### Performance
- [ ] Sem layout shifts
- [ ] Transições suaves
- [ ] Carregamento rápido

## 📚 Dependências

```json
{
  "next-themes": "^0.2.1"
}
```

## 🔄 Compatibilidade

- ✅ Next.js 15+
- ✅ React 18+
- ✅ Tailwind CSS 3+
- ✅ Todos os browsers modernos
- ✅ Mobile e desktop

---

**Nota**: Este plano mantém a nova paleta como base para o dark mode e cria uma versão light adequada, garantindo máxima usabilidade e acessibilidade em ambos os temas.